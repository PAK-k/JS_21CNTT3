function check(number) {
    if(number%2===0) {
        return true;
    } else {
        return false;
    }
}
console.log(check(4));

const check1 = (a) => a%2===0;
console.log(check1(5));

////bt4
var sachs = [
    {
        tacgia: 'Harper Lee',
        tieude: 'To Kill a Mockingbird',
        namXuatBan: 2020,
        trangthai: true
    },
    {
        tacgia: 'Ray Bradbury',
        tieude: 'fahrenheit 451',
        namXuatBan: 2022,
        trangthai: false
    }
]
// sachs.forEach(function(sach){
//     console.log(sach.tacgia);
//     console.log(sach.tieude);
//     console.log(sach.namXuatBan);
//     console.log(sach.trangthai);
// })

for (i in sachs) {
    console.log (
        `${i} ${sachs[i].tacgia}
         ${sachs[i].tieuDe}
         ${sachs[i].namXuatBan}
         ${sachs[i].trangthai}
        `);
}

////bai1
let input=[3,5,7,9,2];
let max = input[0];
let min = input[0];
for(var i=0; i<=input.length; i++) {
    (max<input[i])?max=input[i]:true;
    (min>input[i])?min=input[i]:true;
}
console.log("so lon nhat : ",max);
console.log("so nho nhat : ",min);

////bai2
function FindKeyLong(name) {
    let ten = name.split(' ');
    let max = ten[0];
    for(let i  = 0; i < ten.length; i++) {
        if(max < ten[i]){
            max = ten[i];
        }
    }
    console.log(max);
}

FindKeyLong('Pham anh kiet')


//////bai3
function FindKeyLong2(name) {
    let ten = "";
    let max = 0;
    name.trim().split(" ").forEach(element => {
        max<=element.length ? (ten = element, max = element.length) : ten = ten
    });
    console.log(ten);
}

FindKeyLong2('Pham anhpu Kiet')
















