let n = prompt("masukkan nilai: ");
for(var i = 1; i <= n; i++){
    if(i % 2 === 0){
        document.write("odd");
    }else{
        document.write(`${i}`)
    }
}