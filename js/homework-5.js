//BÀI TẬP 5
var hwFiveSubmitBtn = document.getElementById("homework-5-submit-btn");

hwFiveSubmitBtn.onclick = function() {
 
    //DOM tới field input lấy value
   var inputOne = document.getElementById("homework-5-input-1").value;

//Xử lí
    //- Convert giá trị từ string sang number
    // - Tạo firstDigit =inputOne/100 (Math.floor())
    // - Tạo secondDigit = inputOne*10%

    inputOne = Number(inputOne);
    var firstDigit = Math.floor(inputOne / 10);
    var secondDigit = Math.floor(inputOne % 10);
    var result = firstDigit + secondDigit;

// Đầu ra
    // - Show kết quả
    // - Tạo biến resultDisplay để trả kết quả tính toán
    var resultDisplay = document.getElementById("homework-5-result");
    resultDisplay.innerText = "Kết quả là " + result;
}
;
