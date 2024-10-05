const myIterable = { from: 1, to: 4 };

const iteration = {
  [Symbol.iterator](it = myIterable.to) {
    if (myIterable.to < myIterable.from) {
      throw new Error("TO must be '>' then FROM");
    }

    if (typeof myIterable.from !== "number") {
      throw new Error("invalid starting point");
    }

    if (typeof myIterable.to !== "number") {
      throw new Error("invalid ending point");
    }

    if (myIterable.from === myIterable.to) {
      throw new Error("there is no range between FROM and TO");
    }

    let i = 0;
    return {
      next() {
        if (i < it) {
          return { value: ++i, done: false };
        }

        return { value: undefined, done: true };
      },
    };
  },
};

for (let item of iteration) {
  console.log(item); // 1, 2, 3, 4
}
