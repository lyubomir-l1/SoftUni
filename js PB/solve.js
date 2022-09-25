function yardGreening(input){
    let pricePerSqMeter = Number(7.61);
    let sqMetersForGreening = Number(input[0]);
    let priceForGreening = (pricePerSqMeter * sqMetersForGreening);
    let discount = (0.18 * priceForGreening);
    let totalPrice = (priceForGreening - discount)
console.log (`The final price is: ${totalPrice} lv.`)
console.log (`The discount is: ${discount} lv.`);
yardGreening (["150"]);