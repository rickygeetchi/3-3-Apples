import input from 'input';

const correct = "Jefferson City";
const answer = await input.text("What is the capital of Missouri? : ");

if (answer == correct){
    console.log("You are correct! It is Jefferson City, MO")
} else{
    console.log("You are incorrect")
}