var v=new Date(1559536192666)
var first=new Date(0)

var year=v.getFullYear();
var first=first.getFullYear();

for (var i=first;i<=year;i++){
  if((i%4==0)&&(i%100!=0)||(i%400)==0){
    console.log(i);
  }
}
console.log(i);
