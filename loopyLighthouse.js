
//This loops through the numbers 100 to 200

for (let i = 100 ; i<=200 ;i++){

  //checks to see if i is divisible by 3 AND 4, if it is, outputs LoopyLighthouse
  if (i%3 === 0 && i%4 === 0){
    console.log('LoopyLighthouse');
  }
  //checks to see if i is divisible by 3, if it is, outputs Loopy
  else if(i%3 === 0){
    console.log('Loopy');
  }
  //checks to see if i is divisible by 4, if it is, outputs Lighthouse
  else if(i%4 === 0){
    console.log('Lighthouse');
  }
  //the "default" response if none of the if/else statements apply
  //prints out the current value of i
  else{
    console.log(i);
  }

}