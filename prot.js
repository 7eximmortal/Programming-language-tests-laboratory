function aclean(arr) {
  let map = new Map();

  for (let value of arr) {
    map.set(value.toLowerCase().split("").sort().join(""), value);
  };

  return Array.from(map.values());
};

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));