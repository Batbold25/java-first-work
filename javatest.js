//////////////////////////////////////////////////////////////////////////////////
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
//       let a = prompt ("ymaa oruul")
//       let result = "";
//       for (let num = 1; num <= a; num++ ){
//         result += "* ";
//         console.log(result);
//       }
// let number = prompt("too")
// for( let i = 1; i <= number; i++ ) {
//   let res = "";
//   for( let j = 1; j <= i; j++){
//     res <= "*";
//   } console.log(res);
// }
// let number = prompt("urvuu")
// for ( let i = 1; i <= number; i++){
//   let res = ""; //heden mor yvah utgiig haruulsan heseg
//   for ( let j = number; j >= i; j--){
//     res += "* " //neg morond hechneen od bairlah ve gedeg utgiig haruulsan mor
//   } console.log(res); 
// }
// let number = prompt ("utga oruulah")
// let urjver = 0;
// let zereg = 0;
// if(number == 1 || number > 1000 ) {
//   console.log("blquu");
// }else {
//   while (urjver < 1000) {zereg++
//     urjver = number ** zereg  
//   } console.log(`${number} iin zereg ni ${zereg } buyu 1000 ih ${urjver} baina`);
// }
// let tegshToo = prompt ("1-1000 hurteleh toonii niilber")
// while (too %= 0) {
  
// for ( let i = 1; i <10; i++){
//   if(i == 5){
//     continue;
//   }
// }
// let i = 0;
// while ( i < 10 ){
//   i++ 
// } console.log(i);
// //// function uzev
// function findXq (x) {
//   return x ** 3;
// }
// let imput = findXq(3)
// console.log(imput);
// // 1 hoyr toonii  ihiig ol
// function ihToo ( x , y) {
//   let num1 = 0;
//   if ( x > y ){
//     num1 +=x;
//   } else if( x < y ){
//     num1 +=y;
//   }
//   return num1
// } console.log( ihToo (10 , 7));
// / 2 tegsh toog bagaas ni ih luu bichih
// function tegshToo(a, b, c, d, e,) {
//   console.log(a, b, c, d, e, );
//   let num1 = 0;
//   if ( a % 2) {
//     num1 = a;
//   } else if( b %= 2){
//     num1 = b
//   }
//   return num1
// } 
// tegshToo(7 , 2 , 3 ,8 , 9)

// function tegshToo(number) {
//   if(number % 2 === 0) {
//     return `tegsh too mun ${number}`;
//   } else {
//     return `sondgoi too mun ${number}`;
//   }
// }
// console.log(tegshToo(10))
// /// 5 ogogdson 
// function factorail(n) {
//       let factorial = 1;
//  for( let num = 1 ; num <= n; num++ ){
//       console.log(num);
//       factorial = num * factorial;
//  } return factorial
// }
// console.log(factorail(3));
// /// ARRAY 
// const too = [ 10 , 20 , 30 , 40 , 50];
// let sum = 0;
// let average;
// for( let i = 0; i < too.length; i++){
//       console.log( i, too[i] );
//      sum += too[i]
// }
// average = sum / too.length
// console.log(average);
// ////// const numbers = [10, 20 ,30 , 40, 50,]
// numbers. pop()
// console.log(numbers);

// const niilber = [0,1]
// for ( let i = 1; i < 100; i++){
//       niilber.push(niilber[i] + niilber[i - 1]);
// } console.log(niilber);
//  ///
// /// function findMaxAndMin(nums) {
//      if( nums.length <= 2 ) return nums;
//      let min = nums[0];
//      let max = nums [0];
//      for ( let i = 0; i < nums.length; i++ ) {
//       if ( min > nums [0]) min = nums [0];
//       if ( max < nums [0]) max = nums [0];
//      } console.log(findMaxAndMin);
// } return [min, max];
// findMaxAndMin ( 1, 3, 5, 22, 89, 46, 17, 31, 59)
// const num = [ 1, 2, 3, 4, 5, 6, 7,]
// let input = 4;
// let hoosonArr =[]
// for (let i = 0; i < num.length / input; i++) {
//      hoosonArr.push(num.slice(i * input, i * input + input));
// }     
// console.log(hoosonArr);
// ////OBJECT
// date
// const noow = Date ()
// console.log(noow); 
// function toonuud(arr) {
//       const n = arr.length;
//       let daraalald;
    
//       do {
//         daraalald = false;
//         for (let i = 1; i < n; i++) {
//           if (arr[i - 1] > arr[i]) {
//             // Swap arr[i-1] and arr[i]
//             let temp = arr[i - 1];
//             arr[i - 1] = arr[i];
//             arr[i] = temp;
//             daraalald = true;
//           }
//         }
//       } while (daraalald);
    
//       return arr;
//     }
    
// const unsortedArray = [5, 2, 9, 1, 7, 6];
// const sortedArray = toonuud(unsortedArray);
// console.log(sortedArray);
                 /// 11/6
//////////  Js object exercise
// const data = [
//   {
//     porductName: " Belen goimon",
//     unitPrice: 4500,
//     amount: 4,
//     price: 1800,
//     casherld: 1 ,
//     Date: '2023-1-1',
//   },
//   {
//     porductName: "Ochir dagina" ,
//     unitPrice: 800,
//     amount:10,
//     price: 8000,
//     casherld: 2,
//     Date: '2023-1-1',
//   },
//   {
//     porductName:"Goy",
//     unitPrice: 1500,
//     amount:5,
//     price: 15000,
//     casherld: 3,
//     Date: '2022-12-29',
//   },
//   {
//     porductName: "Misheel talh",
//     unitPrice: 2400,
//     amount: 10,
//     price: 24000,
//     casherld: 4,
//     Date: '2023-11-6',
//   },
// ] 

// // let sum = 0;
// // for ( let i = 0 ; i < data.length; i++){
// //   sum = sum + data.unitPrice;
// // } console.log("niit borluulat", sum);
// if ( data)
// function calculateParkingFee(hours) {
//   const freeMinutes = 0.5; // 30 minutes
//   const rate = 1000; // MNT per hour
//   let fee = 0;

//   if (hours <= freeMinutes) {
//     fee = 0; // The first 30 minutes are free
//   } else {
//     const billableHours = hours - freeMinutes;
//     fee = Math.ceil(billableHours) * rate; // Round up to the nearest hour
//   }

//   console.log(`Parking fee: ${fee} MNT`);
// }
const startDate = new Date('2023-11-07 11:13:01')
const andDate = new Date('2023-11-7 12:13:0')
const FEE_PER_hour = 1000;
const parkingFeeCalculator = ( startDate, andDate) => {
  const parkTimeBySecond = (startDate - endDate) / 1000;
  const parkTimeByHour = Math.floor(parkTimeBySecond/3600);
  if ( parkTimeBySecond % 3600 > 1800) return ( parkTimeByHour + 1 ) * FEE_PER_hour;
  return parkTimeByHour * FEE_PER_hour
}console.log(parkingFeeCalculator( startDate, andDate);