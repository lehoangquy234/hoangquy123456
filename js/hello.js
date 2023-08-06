function tinhSoNgayDaQua(ngay, thang) {
    const ngayTrongThang = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let soNgayDaQua = 0;

    //ngayTrongThang = [];
    // Tính số ngày đã qua trong năm
    for (let i = 0; i < thang ; i++) {
        soNgayDaQua += ngayTrongThang[i];
    }

    // Thêm số ngày trong tháng hiện tại
    soNgayDaQua += ngay;

    return soNgayDaQua;
}

// Thay đổi các giá trị ngày, tháng và năm dưới đây để kiểm tra kết quả
function WeekNumber(date){
    const e = new Date(date);
    let days = e.getDate();
    let years = e.getFullYear();
    let months = e.getMonth();
    const soNgayDaQua = tinhSoNgayDaQua(days,months,years);
    const weekNumber = Math.ceil(soNgayDaQua / 7);

    document.getElementById("demo").innerHTML = 'tuan thu :' + weekNumber;
}