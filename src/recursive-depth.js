const CustomError = require("../extensions/custom-error");
//++++
module.exports = class DepthCalculator {
  calculateDepth( arr ) {
    if (Array.isArray(arr)) {
      let maxDepth = 1;
      let innerArray =[];
      for (let i=0; i<arr.length;i++){
        if (Array.isArray(arr[i])){
          innerArray.push(arr[i]);
        }
      }
      if (innerArray) {
        for (let i = 0; i < innerArray.length; i++) {
          let curVal = 1 + this.calculateDepth(innerArray[i]);
          if (curVal > maxDepth) {
            maxDepth = curVal;
          }
        }
      }
      return maxDepth;
    }
    return 0;
  }
};