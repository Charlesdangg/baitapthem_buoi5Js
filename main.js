
document.getElementById("nhapb1").onclick = function (){
    var support = document.getElementById("support").value *1;
    var luong = document.getElementById("luong").value *1;
    
    var currentForrmat = Intl.NumberFormat("VN-vn");
    luongnam = luong * 1000000 * 12;
    var rs = "";
    sauthue = tinhthuNhap(luongnam) - 4000000 - support * 1600000;
    rs += "<p> Tổng thu nhập sau thuế là :" + currentForrmat.format(sauthue) + "VND</p>"
    document.getElementById("infobai1").innerHTML = rs;
};


function tinhthuNhap (luongnam){
    var tongThuNhap = "";

    if(luongnam > 0 && luongnam <= 60000000){
        tongThuNhap = luongnam *0.95;
    }else if (luongnam > 60000000 && luongnam <= 120000000){
        tongThuNhap = luongnam * 0.9;
    }else if (luongnam > 120000000 && luongnam <= 210000000){
        tongThuNhap = luongnam * 0.85;
    }else if (luongnam > 210000000 && luongnam <=384000000){
        tongThuNhap = luongnam *0.8
    }else if (luongnam > 384000000 && luongnam <=624000000){
        tongThuNhap = luongnam *0.75
    }else if (luongnam > 624000000 && luongnam <=960000000){
        tongThuNhap = luongnam *0.7
    }else if (luongnam > 960000000 ){
        tongThuNhap = luongnam *0.65
    }else {
        alert("Vui lòng nhập chính xác thu nhập của bạn");
    }
    return tongThuNhap;
        
}