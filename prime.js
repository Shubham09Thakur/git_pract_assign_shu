let num=25;
count=0;
for(let i=0;i<num;i++){
if(num%i==0){
count++; }
}
if(count>1){
console.log(num,"number is prime")}
else{console.log(num,"is not prime")}
