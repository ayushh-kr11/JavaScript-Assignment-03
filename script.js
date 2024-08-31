//JS-Assignment-03

//Q1.Find Grades
let m = 50;

switch (true) {
  case (m <= 10 && m >= 0):
    console.log("E");
    break;

  case (m >= 11 && m <= 20):
    console.log("D");
    break;

  case (m >= 21 && m <= 30):
    console.log("C");
    break;

  case (m >= 31 && m <= 40):
    console.log("B");
    break;

  case (m >= 41 && m <= 50):
    console.log("A");
    break;

  default:
    console.log("N/A");
    break;
}

//Q2. Get Value
let char = 'z';

switch (true) {
  case (char == 'z'|| char == 'Z'):
    console.log("Zenith");    
    break;

  case (char == 'p' || char == 'P'):
    console.log("PrepBytes");    
    break;

  case (char == 'e' || char == 'E'):
    console.log("Expert coder");    
    break;

  case (char == 'd' || char == 'D'):
    console.log("Data structure");    
    break;

  default:
    console.log('N/A');
    break;
}

//Q3. Find the maximum out of three numbers.
let num1 = 2;
let num2 = 5;
let num3 = 4;
let max;

if (num1 >= num2 && num1 >= num3) {
  max = num1;
} 
else if(num2 >= num1 && num2 >= num3){
  max = num2;
} 
else{
  max = num3;
}

console.log(`Maximum among the given three numbers is: ${max}`);

//Q4. Second Smallest
let a = 21;
let b = 20;
let c = 23;
let secSmall;

if ((a>b && a<c) || (a<b && a>c)) {
  secSmall = a;
} 
else if((b>a && b<c) || (b<a && b>c)){
  secSmall = b;
}
else{
  secSmall = c;
}

console.log(`Second Smallest among the given three numbers is: ${secSmall}`);

//Q5. Check whether the triangle is Acute or Obtuse

let angle1 = 30;
let angle2 = 40;
let angle3 = 110;

if ((angle1 + angle2 + angle3) == 180) 
{
  if (angle1<90 && angle2<90 && angle3<90) {
    console.log("Acute angle triangle.");
  } 
  else if(angle1>90 || angle2>90 || angle3>90){
    console.log("Obtuse angle triangle.");
  }
  else{
    console.log("Right angle triangle.");    
  }
}
else{
  console.log("Sum of all the angle in triangle should not be more than 180 degree.");
  
}