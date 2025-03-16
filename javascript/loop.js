const friends = ["John", "Jane", "Jim", "Jill"];
for (let index in friends) {
  console.log(`Index ${index}`);
}

for (let name of friends) {
    console.log(`Name: ${name}`);
}

let bestFriend = friends.map((name) => {
    return `${name} is my best friend`;
});

console.log(bestFriend);

friends.forEach((name, index) => {
    console.log(`Name: ${name}, On Index: ${index}`)
});