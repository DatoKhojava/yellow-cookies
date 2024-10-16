class DataHandler {
  #URL = `https://jsonplaceholder.typicode.com`;

  constructor() {
    this.posts = [];
  }

  async fetchPosts() {
    try {
      const response = await fetch(`${this.#URL}/posts`);

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const data = await response.json();

      data.map((post) => this.posts.push(post));

      return Promise.resolve(this.posts);
    } catch (error) {
      return Promise.reject("Something went wrong ", error);
    }
  }

  listPosts() {
    if (this.posts.length > 0) {
      return this.posts.sort(function (a, b) {
        return a.title.localeCompare(b.title);
      });
    }

    return "There is no recors in Posts arrya, its seems you deleted it, try to fetch one more time!";
  }

  getPost(id) {
    if (this.posts.length > 0) {
      return this.posts.find((post) => post.id === id);
    }

    return "There is no recors in Posts arrya, its seems you deleted it, try to fetch one more time!";
  }

  clearPosts() {
    return (this.posts = []);
  }
}

(async () => {
  const data = new DataHandler();

  await data.fetchPosts();
  console.log(data.listPosts());
  console.log(data.getPost(30));
  data.clearPosts();
  console.log(data.listPosts());
})();
