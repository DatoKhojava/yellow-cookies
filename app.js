const myIterration = { from: 1, to: 10 };

function iteration(obj) {
  let from = obj.from;
  let to = obj.to;

  if (to < from) {
    throw new Error("TO must be '>' then FROM");
  }

  if (typeof from !== "number") {
    throw new Error("invalid starting point");
  }

  if (typeof to !== "number") {
    throw new Error("invalid ending point");
  }

  if(from === to) {
    throw new Error("there is no range between FROM and TO")
  }

  //in case if starting point is 0 i decided to start with 0 (even it isnt natural number)
  if (from === 0) {
    for (let i = 0; i < to; i++) {
      console.log(i);
    }
  } else {
    for (let i = 0; i < to; i++) {
      console.log(i + 1);
    }
  }
}

iteration(myIterration);
