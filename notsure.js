let selectednumber=13;
let name= "learner";
name="Cadalist"
if(selectednumber>=8 && selectednumber<=10){
    console.log(`Welcome ${name}! We recommend choosing advanced`);
}
else if(selectednumber>=5 && selectednumber<=7){
    console.log(`Welcome ${name}! We recommend selecting intermediate`);
}
else if(selectednumber>=0 && selectednumber<=4){
    console.log(`Welcome ${name}! We recommend taking off with beginner`);
}
else{
    console.log("Sorry, you've inputted an invalid response. Please try again or use the scale")
}