// toán tử ++ và -- :về bản chất thì 2 toán tử này được sử dụng để tăng hoặc giảm giá trị cho trước
// tuy nhiên cách sử dụng của chúng khác nhau

// let number = 10;
//tiền tố
// bước 1 : thực hiện việc cộng hoặc trừ giá trị của biến number :=>number = 9
// bước 2 :trả về giá trị của biến number

// let output = --number;
// console.log("Output",output);

// hậu tố
// bước 1 :tạo ra một biến copy từ giá trị trước đó: numberCopy = 10
// bước 2 : thực hiện tính toán cho biến number : number = number +1 =>number= 11
//  bước 3 :trả về kết quả từ biến copy

// let output = number++;
// console.log("Output",output);

//  bài toán thực hiện phép tính sau

// let output = number++ - --number;   (10 - 10 = 0)

// vòng lặp for
// cú pháp :for (giá trị khởi tạo; điều kiện dừng/chạy; tăng hoặc giảm){}
// for(initialValue;condition;increase/decrease){}

// console.log ra dãy số từ 1 đến 10

// for(let i = 1; i <=10 ; i++){
//     console.log("lần lặp thứ ",i);
// }

// Nguyên lý hoạt động
//  bước 1 :Khi vong lặp for được chạy trong lần đầu tiên nó sẽ lấy giá trị khỏi tạo (let i =1) để thực hiện khối lệnh
//  Bước 2 :nếu điều kiện thỏa mãn (1 <=10) thì nó sẽ nhận giá trị là true
// bước 3 Lọt vào trong khối lệnh để sử lí logic
// bước 4 sai khi xủ lý logic xong thì nó sẽ quay lại for để tăng giá trị (i++)và noa sẽ quay lại kiểm tra điều kiện(2<=10)
// Bước 5 nếu điều kiện không thỏa mãn (false) thì vong lặp kết thúc

// => Vòng lặp for được sử dụng khi chúng ta biết được số lần lặp

// lặp qua các số từ 1 đến 1000 và in ra các số chẵn và các số lẻ

// for(let i =1; i<=1000; i = i++){
//     if(i%2===0){
//         console.log("số chẵn là :",i);
//     }else{
//         console.log("số lẻ là :",i)
//     };
// }
//  giảm dãy số từ 10 về 1

// for(let i =10; i>=1 ;i--){
//     console.log(i);
// }

// Vòng lặp while sử dụng khi không xác định được số lần lặp
// cú pháp while(điều kiện chạy/dừng ;){tăng hoặc giảm}

// whil.e(condition){
//     increase/decrease;
//     logic
// }

// let i = 1;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// lấy lựa chọn từ phía client
// nếu như chọn 1 thì in ra thông báo là Nhập sản phẩm
// nếu như chọn 2 thì in ra thông báo là in ra sản phẩm sản phẩm
// nếu như chọn 3 thì in ra thông báo là xuất hóa đơn sản phẩm
// nếu như chọn giá trị khác thì in ra thông báo là Nhập sai lựa chọn

// Bước 1 : dùng hàm prompt để lấy lựa chọn
// Bước 2 : thiết lập vòng lập while với số lần lặp hợp lí
// bước 3 sử dụng Switch case để bắt lựa chọn

// let number = 0;

// while (number !== 4) {
//   number = parseInt(prompt("mời bạn nhập lựa chọn"));
// //   switch (number) {
//     case 1:
//       alert("Nhap sp");
//       break;
//     case 2:
//       alert("in ra sp");
//       break;
//     case 3:
//       alert("xuất hóa đơn");
//       break;
//     case 4:
//       alert("thoát chương trình");
//       break;
//     default:
//       alert("nhập sai lựa chọn");
//       break;
//   }
// }

// Vòng lặp do-while:Nó sẽ chạy ít nhất 1 lần vào trong do rồi sau đó mới kiểm tra điều kiện

// let number = 2;
// do {
//   number++;
//   console.log(number);
// } while (number < 10);

// let choose = 0;
// do {
//     choose = parseInt(prompt("mời bạn nhập lựa chọn"))
//     switch (choose) {
//         case 1:
//           alert("Nhap sp");
//           break;
//         case 2:
//           alert("in ra sp");
//           break;
//         case 3:
//           alert("xuất hóa đơn");
//           break;
//         case 4:
//           alert("thoát chương trình");
//           break;
//         default:
//           alert("nhập sai lựa chọn");
//           break;
//       }
//     }

//  while (choose!==4);

// for (let index = 0; index <10 ; index++) {
//     if (index>5) {
//         break;
//     }
//     console.log(index);
// }

// for (let index = 0; index <10 ; index++) {
//         if (index%2 === 0) {
//             continue;
//         }
//         console.log(index);
//     }

// for (let i = 1; i < 10; i++) {
//     console.log("bảng cửu chương",i);
//   for (let j = 1; j <= 10; j++)
//    console.log(`${i}x${j}=${i*j}`);
// }

