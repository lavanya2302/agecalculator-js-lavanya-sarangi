function getDOB(){
// Get the values from the input fields
const inputDOB = document.getElementById('inputDate').value;
const inputCurrent = document.getElementById('CurrentDate').value;
// Validate if both dates are provided
if(!inputDOB || !inputCurrent){
    alert('Please enter both Date of Birth and Current Date.');
        return;
}
 // Convert input values to Date objects
const dob = new Date(inputDOB);
const Current =new Date(inputCurrent);
// Calculate age
let age = Current.getFullYear()-dob.getFullYear();
const monthDifference = Current.getMonth()-dob.getMonth();
// Adjust age if the birthday hasn't occurred yet this year
if(monthDifference < 0 || (monthDifference == 0 && Current.getDate() < dob.getDate())){
    age--;
}
 // Display the result
 document.getElementById('currentAge').textContent =`Your age is ${age} Years.`
}
