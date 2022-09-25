function sumOfTwoNumbers(input){
let a = Number(input[0]);
let b = Number(input[1]);
let magicNum = Number(input[2]);
let countOfCombinations = 0;
let rez = 0;
let flag = false;
for(let x1 = a; x1 <= b; x1++){
    for(let x2 = a; x2 <= b; x2++){ 
            countOfCombinations++; 
            let rez = x1 + x2;
            if(rez == magicNum){
                console.log(`Combination N:${countOfCombinations} (${x1} + ${x2} = ${magicNum})`);
                flag = true;
                break;
            }
            
            
        }
        if(flag){
            break;
        }
        
    }
if(!flag){
console.log(`${countOfCombinations} combinations - neither equals ${magicNum}`)
}
       
}

sumOfTwoNumbers(["23",
"24",
"20"])
