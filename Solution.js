                   /******************* QUESTION 1 *******************/
let num = 1;
let fatherArray = [];
                    
function sequentialArrayGenerator(seq) {  
   for (let index = 1; index < seq; index++) {
      let nextArr = new Array();
      nextArr.push(num);
      for (let i = num+1; i < (num + index); i++) {
        nextArr.push(i);
        };
      num = nextArr[nextArr.length - 1] + 1;
      fatherArray.push(nextArr);
    };
   console.log(fatherArray);
};


                      /******************** QUESTION 2 *******************/
let motherArray = fatherArray
for (let x = 1; x < motherArray.length; x += 2) {
    delete motherArray[x];
};
console.log(motherArray);


                       /******************* QUESTION 3 *******************/
function toFourthPower(n) {
    let value = 0;
    for (let myIndex = 0; myIndex < n*2; myIndex += 2) {
      let item = myIndex;
      for (let j = 0; j < fatherArray[myIndex].length; j++) {
        value += fatherArray[myIndex][j];
      };      
    } ;   
    console.log(`${n} to the fourth power is ${value}`);
}

sequentialArrayGenerator(20)
toFourthPower(4)





