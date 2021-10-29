let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

let reading = new WeakMap();

reading.set(messages[0], new Date());

console.log(reading.get(messages[0]));
console.log(reading.has(messages[0]));