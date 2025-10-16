const _bookId = Symbol("bookId");

// Book class with static members, getter/setter, and generator
class Book {
  static count = 0;

  constructor(title, author, year, bookId) {
    this.title = title;
    this.author = author;
    this.year = year;
    this[_bookId] = bookId; // Private unique ID
    Book.count++;
  }

  // Get book info
  get info() {
    return `${this.title} by ${this.author} (${this.year})`;
  }

  // Update title using setter
  set updateTitle(newTitle) {
    this.title = newTitle;
  }

  // Access private bookId
  get bookId() {
    return this[_bookId];
  }

  // Static method to get total book count
  static totalBooks() {
    return Book.count;
  }

  // Generator to yield details
  *details() {
    yield this.title;
    yield this.author;
    yield this.year;
  }
}
const book1 = new Book("The Alchemist", "Paulo Coelho", 1988, "ID001");
const book2 = new Book("Sapiens", "Yuval Noah Harari", 2011, "ID002");

console.log("Book 1 Info:", book1.info);  // getter
console.log("Book 2 Info:", book2.info);

// Update the title using setter
book1.updateTitle = "The Alchemist (Updated)";
console.log("Updated Book 1 Title:", book1.title);

console.log("Book 1 ID:", book1.bookId);
console.log("Book 2 ID:", book2.bookId);
console.log("Total Books:", Book.totalBooks());

// Use generator to display book details
console.log("Book 1 Details:");
for (const detail of book1.details()) {
  console.log("-", detail);
}


//iterator
const iter1 = makeRangeIterator(1, 10, 2);

let result = iter1.next();
while (!result.done) {
  console.log(result.value); // 1 3 5 7 9
  result = iter1.next();
}

console.log("Iterated over sequence of size:", result.value); // [5 numbers returned, that took interval in between: 0 to 10]
function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let iterationCount = 0;
  for (let i = start; i < end; i += step) {
    iterationCount++;
    yield i;
  }
  return iterationCount;
}
function* makeIterator() {
  yield 1;
  yield 2;
}

const iter = makeIterator();

for (const itItem of iter) {
  console.log(itItem);
}

console.log(iter[Symbol.iterator]() === iter); // true
iter[Symbol.iterator] = function* () {
  yield 2;
  yield 1;
};
//user-defined iterables
const myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};
//user-defined iterables in for..loop
for (const value of myIterable) {
  console.log(value);
}
[...myIterable]; // [1, 2, 3]
//built-in iterables
for (const value of ["a", "b", "c"]) {
  console.log(value);
}
// "a"
// "b"
// "c"

[..."abc"];
// ["a", "b", "c"]

function* gen() {
  yield* ["a", "b", "c"];
}

gen().next();
// { value: "a", done: false }

[a, b, c] = new Set(["a", "b", "c"]);
a;
// "a"
