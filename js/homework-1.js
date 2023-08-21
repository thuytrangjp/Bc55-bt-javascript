//BÀI TẬP 1
//Bấm vào button
var hwOneSubmitBtn = document.getElementById("homework-1-submit-btn");
hwOneSubmitBtn.onclick = function() {

// Đầu vào
    //DOM tới field input lấy value
    var inputOne = document.getElementById("homework-1-input-1").value;
    var inputTwo = document.getElementById("homework-1-input-2").value;
    
// Xử lý
    // - Convert giá trị từ string sang number
    inputOne = Number(inputOne);
    inputTwo = Number(inputTwo);


    // - Tính toán: Tạo biến result = Giá trị của input One x input Two
    var result = inputOne* inputTwo;

// Đầu ra
     // - Tạo biến resultDisplay để trả kết quả tính toán
    // - Show kết quả
    var resultDisplay = document.getElementById("homework-1-result");
    resultDisplay.innerText = "Kết quả là " + result;
}