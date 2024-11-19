let selectednumber=6;
if(selectednumber>=8 && selectednumber<=10){
    console.log("Advanced");
}
else if(selectednumber>=0 && selectednumber<=5){
    console.log("Beginner");
}
else if(selectednumber>=5 && selectednumber<=7){
    console.log("Intermediate");
}
else{
    console.log("Sorry, this is an invalid response. Please select a number between 0 and 10")
}