const whichSchool  = function (age) {
  /*Creating an If Statement to pass through a person's age to determine what school they should go to*/
  let userSchool= '';
  if (age<13){
    userSchool ='Elementary School';
    //this prints out a statement recommending Elementary School if someone is younger than 13
  }
  else if(age>=13 && age<=18){
    userSchool= 'Secondary School';
    //this prints out a statement recommending High School if someone is between the age of 13-18
  }
  else{
    userSchool='Lighthouse Labs';
    //this prints out a statement recommending Lighthouse Labs if someone is older than 18
  }
  //This returns the recommendation of what school to go to
  return userSchool;

}

//test uses of the whichSchool function
console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));
