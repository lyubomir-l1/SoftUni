function toyShop(input){
let hourOfExam = Number(input[0]);
let minutesOfExam = Number(input[1]);
let hourOfArrival = Number(input[2]);
let minutesOfArrival = Number(input[3]);
let timeOfExam = hourOfExam * 60 + minutesOfExam;
let timeOfArrival = hourOfArrival * 60 + minutesOfArrival;
let difference = Math.abs(hourOfArrival - hourOfExam);
let statement = ""
if(timeOfExam >= (timeOfExam - 30) && timeOfArrival <= timeOfExam - 30 || timeOfExam === timeOfArrival ){
    let statement = "On time";
    console.log(statement)
}else if(timeOfArrival < (timeOfExam - 30)){
    let statement = "Early"
    console.log(statement)
}

}
toyShop(["11", "30", "10", "55"])