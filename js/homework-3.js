//BÀI TẬP 3
//Bấm vào button
 var hwThreeSubmitBtn = document.getElementById("homework-3-submit-btn");
 hwThreeSubmitBtn.onclick = function() {
// Đầu vào
    //DOM tới field input lấy value
    var inputOne = document.getElementById("homework-3-input-1").value;

    // - Tạo hằng số để chứa tỷ lệ quy đổi từ tiền USD sang VND
    const CURRENCY_RATE = 23500;

//Xử lí
    //- Convert giá trị từ string sang number
    inputOne = Number(inputOne);

    // - Tính toán: inputOne * CURRENCY_RATE
    // - Format Result bằng NumberFormat
  
    var result = inputOne * CURRENCY_RATE;
    var formattedResult = new Intl.NumberFormat('vn-VN').format(result);
// Đầu ra
     // - Tạo biến resultDisplay để trả kết quả tính toán
    // - Show kết quả
    var resultDisplay = document.getElementById("homework-3-result");
    resultDisplay.innerText = "Kết quả là " + formattedResult;
}