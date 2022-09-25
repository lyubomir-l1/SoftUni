function multiplicationTable(){
for(i = 1; i <= 10; i++){
    for(b = 1; b <= 10; b++){
        let result = i * b;
        console.log(`${i} * ${b} = ${result}`)
    }
}
}
multiplicationTable()