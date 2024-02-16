function extractCharacter(c) {
    return c.wordTarget.substring(c.lowNumber, c.highNumber);
}
console.log(extractCharacter({
    wordTarget: "Learning Typescript is different than Javascript",
    lowNumber: 9,
    highNumber: 19
}));
