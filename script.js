// const age = 15
const ageRestriction = (age) => {
    console.log('age', age)
    if (age < 18){
        console.log("Sorry, you're not old enough to Enter")
    } else if (age > 18){
        console.log("you are over 18, Welcome!!")
    } else if(age >= 95){
        console.log("I have never met someone who is 95 before")
    }
}
console.log(ageRestriction(97))