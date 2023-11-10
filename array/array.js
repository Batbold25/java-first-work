//         EASY         \\   

//-1------------------------------------

// let sum = 0;
// let huvaalt;
// const numbers = [ 10, 20 , 30 , 40 , 50, 60]
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
// }
// huvaalt = sum / numbers.length
// console.log(huvaalt);

//-2------------------------------------

// var fibo = [ 0,1] //anhnii 2 gishuun
// let n = 100;
// for (let i = 1; i <= n; i++) {
//     fibo.push (fibo[i] + fibo [i -1])
// } console.log(fibo);

//-3------------------------------------

// const numb = [ 10, 20, 30, 40, 50]
// numb.pop (); //suuliin geshuuniig hasaad
// numb.push (30); // element oruulav
// console.log(numb);

//-4------------------------------------

// const num = [ 2, -3, 5, 6, -8, 10]
// let sum = 0;
// for(let i = 0; i < num.length; i++){ //num iin lenght 
//     if (num[i] > 0 && num [i] % 2 == 0){ // numiin index utguud
//         sum += num[i]
//     }
// } console.log(sum);

//         MEDIUM         \\

//-1------------------------------------

// let numbers = [ 1,2,3,4,5,6,7]
// let num = 3;
// let Arr =[]
// for ( let i = 0; i < numbers.length / num; i++) {
//     Arr.push( numbers.slice(i * num, i * num + num))
// }
// console.log(Arr);

//-2------------------------------------

// const numbers = [1, 3, 5, 22, 89, 46, 17, 31, 59];
//     let max = numbers[0];
//     let min = numbers[0];

//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] > max) {
//             max = numbers[i];
//         } else if (numbers[i] < min) {
//             min = numbers[i];
//         }
//     }
// console.log([min, max]);

//-3------------------------------------

// const nums = [5, 4, 3, 2, 1];

// for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = 0; j < nums.length - i - 1; j++) {
//         if (nums[j] > nums[j + 1]) {
//             const temp = nums[j];
//             nums[j] = nums[j + 1];
//             nums[j + 1] = temp;
//         }
//     }
// }

// console.log(nums);

//-------------------------------------

//              ARRAY-OBJECT-STRING-METHODS

//------------------EASY------------------

// const object = {'b': 2, 'a': 1, 'c': 3}
// const order = Object.entries (object) //Object shinj chanariig array utga luu horvuuleh
// for (let i = 0; i < order.length; i++) { // Bubble sort ashiglan hoorond ni haritsuulj bga 

//     for ( let j = 0; j < order.length; j++) 
//     if ( order [i][1] < order [j][1]){ //har
//         let x = order [i];
//         order[i] = order[j];
//         order[j] = x;
//     }
    
// } console.log(order);

//------------------EASY------------------

const person = {
    
}

