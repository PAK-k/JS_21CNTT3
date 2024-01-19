// bài 1: 
var y = ["Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy","Chủ nhật"];
var x = 5;
switch(x)
    {
        case 0:
            console.log(y[0]);
            break;
        case 1:
            console.log(y[1]);
            break;
        case 2:
            console.log(y[2]);
            break;
        case 3:
            console.log(y[3]);
            break;
        case 4:
            console.log(y[4]);
            break;
        case 5:
            console.log(y[5]);
            break;
        case 6:
            console.log(y[6]);
            break;
        default:
            console.log("không hợp lệ");
    }

//bài 2: xác định số đó có phải là số nguyên tố hay không
function SNT(n)
{
    if(n<=1) return false;
    for(var i = 2; i <= n/2; i++){
        if(n%i==0) return false;
    }
    return true;
}

console.log(SNT(5));
console.log(SNT(16));
console.log(SNT(23));

//bài 3: matrix
var x = [["1", "1", "1"], ["1", "0", "0"], ["0", "1", "0"],["0", "0", "1"]];
var matran = "";
for (var i=0; i<4; i++ ) {
    for (var j=0; j < 3; j++){
        matran += x[i][j] + " ";

    }
    matran += "\n"; 
}
console.log(matran);

//bài 4
var username = "vidu123.";
var regex = /^[a-zA-Z0-9_]{4,10}$/;
if(regex.test(username)==true) {
        console.log("tên hợp lệ!");
    } else {
        console.log("không hợp lệ!");
    }

var password = "1234Jiet";
var regex1 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; 
if(regex1.test(password)==true) {
        console.log("mật khẩu hợp lệ!");
    } else {
        console.log("không hợp lệ!");
    }

//bài 5 + bài 6 bên file index.html

