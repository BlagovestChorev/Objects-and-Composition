function composeCalorieObject(inputArray) {
    let calorieObject = {};
  
    for (let i = 0; i < inputArray.length; i += 2) {
      let food = inputArray[i];
      let calories = Number(inputArray[i + 1]);
  
      calorieObject[food] = calories;
    }
  
    console.log(calorieObject);
  }
  
  // Example usage:
  const inputArray = ['Yoghurt', '48', 'Rise', '138', 'Apple', '52'];
  composeCalorieObject(inputArray);