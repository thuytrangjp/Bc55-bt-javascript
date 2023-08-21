//BÀI TẬP 4
 //Bấm vào button
var hwFourSubmitBtn = document.getElementById("homework-4-submit-btn");

hwFourSubmitBtn.onclick = function() {
// Đầu vào
    //DOM tới field input lấy value
    var inputOne = document.getElementById("homework-4-input-1").value;
    var inputTwo = document.getElementById("homework-4-input-2").value;

//Xử lí
   //- Convert giá trị từ string sang number  
   inputOne = Number(inputOne);
   inputTwo = Number(inputTwo);

    // - Tính diện tích: inputOne*inputTwo
    // - Tính chu vi: (inputOne+inputTwo)*2
    var resultOfArea = inputOne*inputTwo;
    var resultOfPerimeter = (inputOne + inputTwo) * 2;

// Đầu ra
    // - Tạo biến resultDisplay để trả kết quả tính toán
    // - Show kết quả
    var resultDisplay = document.getElementById("homework-4-result");
    resultDisplay.innerText = "Kết quả diện tích là " + resultOfArea + ". "
                            + "Kết quả chu vi là " + resultOfPerimeter + ".";
}