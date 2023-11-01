// //1 huvisagch zarlav
//  let myAge = 21;
//  if (myAge > 25) {
//     console.log("above 25");
//  }
// else { console.log("below 25");}
// //2 huvisagch concole deer tegsh sondgoigoor ni zarlah
//  let p = 2;
//  if (p % 2 === 0) {
//      console.log("tegsh too");
//    } else {
//      console.log("sondgoi too");
//    }  
// //3 toon huvisagch aa zarlav
//  let num1 = 12;
//  let num2 = 45;
//  let num3 = 30;
// // hamgiin ih huvisagch oloh
//  if ( num1<num2 && num3<num2){
//      console.log("num2 hamgiin ih");
//  } else if ( num1<num2 && num2<num3 )
//     {console.log("num3 hamgiin ih");}
// // 4 hamginn baga huvisagch
//  if ( num1<num2 && num3>num1 ) {
//      console.log("num1 hamgiin baga");
//  }
//  else if ( num1>num2 && num2<num3){
//      console.log("num3 hamgiin baga");
//  }
// //5amraltiin odor ajiliin odor
//     //odruudiin des dugaar
//  var dolooHonog = 7
//  if (dolooHonog == 1){
//      console.log("Davaa garig");
//  } else if (dolooHonog == 2){
//      console.log("Mygmar gargi");
//  } else if ( dolooHonog == 3){
//      console.log("Lhagva gargi");
//  } else if (dolooHonog == 4){
//      console.log("Purev gargi");
//  } else if (dolooHonog == 5) {
//      console.log("Baasan gargi");
//  } else if ( dolooHonog == 6){
//      console.log("Bymba gargi");
//  } else if (dolooHonog == 7){
//      console.log("Nym gargi");
//  } else {
//      console.log("oor ymar odor heregtei bga bee");
//  }
// //6 huvisagch zarlav
//  let too1 = 85;
//  let too2 = 75;
//  let too3 = 96;
//  let too4 = 69;
//  let sum = 0;
//  const min = 80;
//  //181 garah niilber too 
//  if (too1 > min) sum += too1;
//  if (too2 > min) sum += too2;
//  if (too3 > min) sum += too3;
//  if (too4 > min) console.log((sum += too4));
//  else {
//      console.log(sum);
//  }
// //7
//  let numbers2 = [3, 7, 2, 4];

//  // 5 aas baga
//  let is4LessThan5 = 4 < 5;
//  console.log("Is 4 less than 5?", is4LessThan5);

//  // Calculate the product of numbers less than 5
//  let productLessThan5 = numbers2.reduce((product, num) => (num < 5 ? product * num : product), 1);
//  console.log("5 aas bag toonii urjver", productLessThan5);
//  const examResults = {
//      Bagsh: 67,
//      bolroo: 59,
//    };
  
//    for (const teacher in examResults) {
//      const score = examResults[teacher];
//      let grade = "";
//      if (score < 60) {
//        grade = "Very bad";
//      } else if (score >= 60 && score < 70) {
//        grade = "Sufficient";
//      } else if (score >= 70 && score < 80) {
//        grade = "Medium";
//      } else if (score >= 80 && score < 90) {
//        grade = "Good";
//      } else {
//        grade = "Excellent";
//      }
//      console.log(`${teacher} - POINTS OBTAINED: ${score} - ${grade}`);
//    }
// // Gurvaljingiin perimeter
//   const side1 = 5;
//      const side2 = 7;
//      const side3 = 9;
//      const perimeter = side1 + side2 + side3;
//      console.log("Perimeter of the triangle: " + perimeter);
// // m = y2-y1/x2-x1 
//      const x1 = 2;
//      const x2 = 6;
//      const y1 = 3;
//      const y2 = 8;
//      const m = (y2 - y1) / (x2 - x1);
//      console.log("m = " + m);
// // gegabyti how many bits
//  const gegabyte = 1;
//  const bitsInAGigabyte = gegabyte * 8 * 1024 * 1024 * 1024;
//  console.log("1 gb ni " + bitsInAGigabyte + "biti");
// // mg dat 3
//  const MgDown = 3;
// const downloudTime = 3;
// const bitReta = (MgDown * 8) / downloudTime;
// console.log("bit rate" + bitReta + "bit olno");
// // side1, side2, side3, gurvaljinii talbai olno
// const a = 5;
// const b = 4;
// const c = 3;
// const s = (a * b * c) / 2;
// console.log("Gurvaljinii talbai " + s);
// // tselisees faringeit ruu horvuuleh
// let tselis = 27;
// let faringeit = (tselis * 9/5) + 32;
// console.log( tselis + "Цельсийн градустай тэнцүү байна" + faringeit + " Фаренгейтийн градус ");
// //faringeit ees tselisees ruu shiljuuleh
// const fahrenheit = 77; 
// const celsius = (fahrenheit - 32) * 5/9;
// console.log("faring iig tsaals luu shiljuulvel " + celsius);
// let num = 10;
// while (num > 0) {
//   console.log(num);
//   num--;==
// }
// let secret;

// do {
//   secret = prompt("nuuts ugee banidaa:");
// } while (secret !== 'zaa hooy');

// alert("Access granted!");
// for ( let num = 0; num < 10 ; num++){
//   alert(num)
// }
      // let a = prompt ("ymaa oruul")
      // let result = "";
      // for (let num = 1; num <= a; num++ ){
      //   result += "* ";
      //   console.log(result);
      // }
// let number = prompt("too")
// for( let i = 1; i <= number; i++ ) {
//   let res = "";
//   for( let j = 1; j <= i; j++){
//     res <= "*";
//   } console.log(res);
// }
let number = prompt("urvuu")
for ( let i = 1; i <= number; i++){
  let res = "";
  for ( let j = number; j >= i; j--){
    res += "* "
  } console.log(res);
}

