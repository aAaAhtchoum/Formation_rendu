// check if type is number
function isNumber(element) {
    return typeof element === 'number';
  }

// check duplicates
function hasDuplicates(param) {
    const noDups = new Set(param);
    if (param.length !== noDups.size) {
      return true;
    } else {
      return false;
    }
  }
// check if values are between 1 and 9
function oneToNine(element) {
    return element >=1 && element <= 9;
}

// take an array of 9 as input and check if all are numbers and no duplicates, return true if all good
function isCorrect(param){
    if ((param.every(isNumber) === true) && (param.every(oneToNine) === true) && (hasDuplicates(param) === false)){
        return true;
    }else{
        return false;
    }
}
