function majorityElement(nums) {
    let majorityElement;
    let count = 0;
  
    for (const num of nums) {
      if (count === 0) {
        majorityElement = num;
      }
      count += (num === majorityElement) ? 1 : -1;
    }
  
    return majorityElement;
  }
  
  console.log(majorityElement([4, 2, 4]));
  console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));