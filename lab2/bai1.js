
// nhập a từ nàn phím
let a = parseInt(prompt("Nhap so  a:"));
// nhập số b 
let b = parseInt(prompt("Nhap so  b:"));
// nhập c
let c = parseInt(prompt("Nhap so  c:"));
if(a==0){
   let  x= -c/b;
   console.log("phuong trinh co mot nghiem:"+x);

}else{
 let delta= Math.pow(b,2)- 4 *a *c;
 if(delta<0){
    console.log("phuong trinh vo nghiem")

 }else if(delta==0){
    let x = -b/(2*a);
    console.log(" phuong trinh có nghiem kep:"+ x);
 }else{
    let x1 = (-b + Math.sqrt(delta)/(2*a));
    let x2 = (-b - Math.sqrt(delta)/(2*a));
    console.log("x1 la:" +x1+ "x2 la:"+x2);
 }
}

