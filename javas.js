// //program1
// let itr;
// for(itr=1;itr<=100;itr++)
// {
//     if(itr%3==0 && itr%5!=0)
//         document.writeln("fizz,");
//     else if(itr%3!=0 && itr%5==0)
//         document.writeln("bus,");
//     else if(itr%3==0 && itr%5==0)
//         document.writeln("fizzbus,");
//     else 
//     document.writeln(itr+",");
// }
// //factorialptogram6
// function fact(num){
// let fact=1,itr1;
// for(itr1=1;itr1<=num;itr1++)
// {
//   fact=fact*itr1;
// }
// return fact;
// }
// console.log("The factorial is " +fact(6));

// //arrLargestNumber
// function larnum(arr){
//     arr.sort();
//     return arr[arr.length-1];
// }
// let arr=[1,2,3,4,5,6];
// console.log("The largest Number in the array is "+larnum(arr));

// //fahrenheittocelsius
// function toCelsius(temp){
//     return celsius=(temp-32)*5/9;

// }
// console.log("Temperature from fahrenheit to celsius is "+toCelsius(100));

// function Palindrome(str1){
// let str2=(str1.split("").reverse().join(""));
// if (str1==str2)
//     return("Palindrome");
// else
//    return("Not a Palindrome");

// }
// console.log(Palindrome("malayalam"));

//missing number
// function missNum(arr){
//    let  n=arr[arr.length-1];
//     let sum=(n*0.5)*(n+1);
//     let i,sum1=0;
//     for(i=0;i<arr.length;i++)
//         sum1=sum1+arr[i];
//     return sum-sum1;

// }
// let arr=[1,2,4,5,6];
// console.log(missNum(arr));

//longest
function longest(str) {
    let arr = str.split(' ');
    let long= 0;
    let arrl=null;
    for(let i = 0; i < arr.length; i++){
      if(arr[i].length > long){
      long = arr[i].length;
      arrl=arr[i];
       }
    }
    return arrl ;
  }
  console.log(longest("I am Laaavanya Balaji"));