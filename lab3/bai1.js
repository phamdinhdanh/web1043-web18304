let chon;
do {
    chon = parseInt(prompt("\t\t\tmenu \n Mời chọn chức năng \n 1.Tính điểm trung bình (switch case) \n 2.Tính điểm trung bình (if else) \n 0.thoát "))

    switch (chon) {
        case 1:
        alert(diemtb_1());
            break;
        case 2:
        alert(diemtb_2());

            break;
        case 0:
        alert("thoat chuong trinh");
            break;

        default:
            alert("ban nhap sai chuc nang 0-2 !!");

    }
 
} while (chon != 0);
function diemtb_1(){ 

    //nhap diem va kiem tra dau vao
         
        let toan = parseFloat(prompt("moi nhập điểm toán"));
        let ly  = parseFloat(prompt("moi nhập điểm lý"));
        let hoa = parseFloat(prompt("moi nhập điểm hóa "));
        let sinh = parseFloat(prompt("moi nhập điểm sinh "));
        if(0<=toan<=10 && 0<=ly<=10 && 0<=hoa<=10 && 0<=sinh<=10){
            //tinh trung binh cong
            var diemtb = (toan+ly+hoa+sinh)/4;
        //sep loai 
        var xeploai;
           switch(diemtb){
            case 10:
            case 9:
                xeploai ="giỏi";
                break;
            case 8:
            case 7:
                xeploai ="khá";
                break;
            case 6:
            case 5:
                xeploai ="trung bình";
                break;
            default:
                xeploai ="Yếu";
                break;                     
           }
               
        }else{
            alert("Ban nhap sai, vui long nhap lai diem!");
         }
         alert("điểm trung bình:"+diemtb +"\nXếp loại:"+xeploai);
    
       }
    
    
    function diemtb_2(){ 
    
        //nhap diem va kiem tra dau vao
             
            let toan = parseFloat(prompt("moi nhập điểm toán"));
            let ly  = parseFloat(prompt("moi nhập điểm lý"));
            let hoa = parseFloat(prompt("moi nhập điểm hóa "));
            let sinh = parseFloat(prompt("moi nhập điểm sinh "));
            if(0<=toan<=10 && 0<=ly<=10 && 0<=hoa<=10 && 0<=sinh<=10){
                //tinh trung binh cong
                var diemtb = (toan+ly+hoa+sinh)/4;
                
               //xep loai 
               var xeploai;
               if(diemtb>=9){
                   xeploai ="giỏi";
               }else if(diemtb>=7){
                   xeploai ="khá";
               }else if(diemtb>=5){
                   xeploai ="trung bình";
               }else{
                xeploai ="Yếu";
               }
            }else{
                alert("Ban nhap sai, vui long nhap lai diem!");
             }
             alert("điểm trung bình:"+diemtb +"\nXếp loại:"+ xeploai);
        }
