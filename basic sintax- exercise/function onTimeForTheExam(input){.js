function integerAndFloat(first, second, last){
let sum = first + second + last;
sum % 1 == 0 ? console.log(`${sum} - Integer`) : console.log(`${sum} - Float`)
}
integerAndFloat( 9, 100, 1.1)