// bài 1

// let i = 0;
// for (i = 1; i <= 5; i++) {
//   console.log(i + i);
// }
// bài 2
// let number = parseInt(prompt("nhập số bất kì"));

// let total = 0;
// let i = 1;
// for (i = 1; i <= number; i += 1) {
//   total = total+i;
// }
// console.log(total);

// bảng cửu chương

// for (let i = 1; i <= 10; i++) {

//   console.log("bảng cửu chương", i);

//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} x ${j}=`, i * j);
//     if (i == 3 && j == 2) {
//         break;
//       }
//   }
// }
// let N = parseInt(prompt("moi ban nhap so"));

// if (N < 2 || N > 100) {
//   console.log("mời bạn nhập lại")
// } else {
//   for(let i = 2 ;1<=N;i++){
//     let square = Math.pow(i,2);
//     if(square %2 ===0) {
//         console.log("square",square)
//     }
//   }
// // }

// let N = parseInt(prompt("hay nhap so"));

// if(N<2 || N>100){
//     console.log("nhap lai so")
// }else{
//     for (let i =1; i<=N;i++) {
//               let square = Math.pow(i,2);
//             if(square%2==0){
//                 console.log("square",square)
//             }
//     }
// }

// bài 4

// for (let i = 1; i <= 100; i++) {
//   if (i % 5 == 0 && i % 3 == 0) {
//     console.log(i, "buzzfizz");
//   }else if (i % 3 == 0) {
//     console.log(i, "fizz");
//   }else if (i % 5 == 0) {
//     console.log(i, "buzz");
//   }
// }

// bài 5

// let N = parseInt(prompt("nhap so di ban"));

// let check = true;

// if (N < 2) {
//   console.log(N, "không phải là số nguyên tố");
// } else {
//   for (let i = 2; i <= Math.sqrt(N); i++) {
//     if (N % i === 0) {
//       check = false;
//       break;
//     }
//   }

//   if (check) {
//     console.log("la so ng to");
//   } else {
//     console.log("ko phai ng to");
//   }
// }

for (let i = 1; i <= 10; i++) {
  let row = " ";
  for (let j = 1; j <= i; j++) {
    row = row + "*";
  }
  console.log(row);
}
