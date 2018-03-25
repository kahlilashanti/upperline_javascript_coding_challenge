
//create a function that allows custom arguments
let upperLine = function(word1 = 'upper', word2 = 'line', n1= 2, n2 = 3){
  //start with an empty array
  let arr = []

//array length is set to 100
  for(let i = 1; arr.length < 100; i++){
    //if the number divided by n1 and the number divided by n2 both have a remainder of 0,
    //push both corresponding values of the function arguments into the array
    if(i % n1 === 0 && i % n2 === 0){
      arr.push(word1 + word2) //upper + line
    } else if (i % n1 === 0){
      //if the number divided by n1 leaves a remainder of 0, print 'upper'
      arr.push(word1);
    }
    //if the number divided by n2 leaves a remainder of 0, print 'upper'
      else if(i % n2 === 0){
        arr.push(word2)
      } else{
        //if none of these conditions apply print the values of the array as is
        arr.push(i)
      }
  }

//print the array when the function is called
  return arr
};

//add custom arguments as well
console.log(upperLine('Upper','Line', 10, 12))
