//BÀI TẬP 2
//Bấm vào button

var hwTwoSubmitBtn = document.getElementById("homework-2-submit-btn");

hwTwoSubmitBtn.onclick = function() {
// Đầu vào
    //DOM tới field input lấy value
    var inputOne = document.getElementById("homework-2-input-1").value;
    var inputTwo = document.getElementById("homework-2-input-2").value;
    var inputThree = document.getElementById("homework-2-input-3").value;
    var inputFour = document.getElementById("homework-2-input-4").value;
    var inputFive = document.getElementById("homework-2-input-5").value;

//Xử lí
   //- Convert giá trị từ string sang number
    inputOne = Number(inputOne);
    inputTwo = Number(inputTwo);
    inputThree = Number(inputThree);
    inputFour = Number(inputFour);
    inputFive = Number(inputFive);

    // - Tính toán: 
       // +Tạo biến result = (inputOne+inputTwo+inputThree+inputFour+inputFive)
       // +Tạo biến average = result/5  
   
    var result = inputOne + inputTwo + inputThree + inputFour + inputFive;
    var average = result / 5;

// Đầu ra
    //- Tạo biến resultDisplay để trả kết quả tính toán
    // - Show kết quả
    var resultDisplay = document.getElementById("homework-2-result");
    resultDisplay.innerText = "Kết quả là " + average;
}