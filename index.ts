interface Criteria {
  wordTarget: string;
  lowIndex: number;
  highIndex: number;
};

function extractCharacter(criteria: Criteria): string {
  return criteria.wordTarget.substring(criteria.lowIndex, criteria.highIndex);
};

console.log(
  extractCharacter({
    wordTarget: "Learning Typescript is different than Javascript",
    lowIndex: 9,
    highIndex: 19,
  })
);
