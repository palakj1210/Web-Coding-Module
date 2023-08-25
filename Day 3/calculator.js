//Calculator

let choice = "Y"

while (choice === "Y" || choice ==="y"){
    choice = main()
}


function main() {
  //Step 1 - Taking the user input for name

  let name_prompt = "What is your name?";
  let user_name = prompt(name_prompt);
  console.log(user_name);

  //Step 2 - Taking the user input for numbers

  //let num1 = 0;
  //let num2 = 0;
  let number1_prompt = "Enter the Number 1";
  let num1 = parseFloat(prompt(number1_prompt)); //parseFloat considers the input as a number (including decimals)
  let number2_prompt = "Enter the Number 2";
  let num2 = parseFloat(prompt(number2_prompt));

  //Step 3 - Taking the user input for the choice
  //Back tick quotes allow you to write your own string code across multiple lines
  choice_prompt = `What would you like to do:
                \n Choose 1 for Addition
                \nChoose 2 for Subtraction
                \nChoose 3 for Multiplication
                \nChoose 4 for Division`;

  let user_choice = parseInt(prompt(choice_prompt)); //parseInt considers the input as a number (excluding decimals)
  console.log(user_choice);

  //IF/ELSE CONTROL STATEMENT - executes a code if a specified condition is true. If the condition is false, another code is executed.
  /*if (user_choice === 1) {
  //call the function add
  let result = add(num1, num2);
  console.log("The addition result is", result);
} 
else if (user_choice === 2) {
  //call the function subtract
  let result = subtract(num1, num2);
  console.log("The subtraction result is", result);
} 
else if (user_choice === 3) {
  //call the function multiply
  let result = multiply(num1, num2);
  console.log("The multiplication result is", result);
} 
else if (user_choice === 4) {
  //call the function divide
  let result = divide(num1, num2);
  console.log("The division result is", result);
}*/

  //SWITCH CONTROL STATEMENT - conditional statements which are used to perform different actions based on different conditions
  switch (user_choice) {
    case 1: {
      let result = add(num1, num2);
      console.log("The addition result is", result);
      break;
    }
    case 2: {
      let result = subtract(num1, num2);
      console.log("The subtraction result is", result);
      break;
    }
    case 3: {
      let result = multiply(num1, num2);
      console.log("The multiplication result is", result);
      break;
    }
    case 4: {
      let result = divide(num1, num2);
      console.log("The division result is", result);
      break;
    }
    default:
      alert("Please select a proper choice");
  }

let continue_choice = prompt("Do you wish to continue Y/N")
return continue_choice

}

//readLine(name_prompt)
//readInt()
//readFloat()

// Addition function defination
//Addition = num1 + num2;

function add(num1, num2) {
  result = num1 + num2;
  return result;
}
/*let add_output = add(5, 3);
console.log("Addition Output is", add_output);*/

// Subtraction function defination
//Subtraction = num1 - num2;

function subtract(num1, num2) {
  result = num1 - num2;
  return result;
}
/*let sub_output = subtract(5, 3);
console.log("Subtraction Output is", sub_output);*/

// Multiplication function defination
//Multiplication = num1 * num2

function multiply(num1, num2) {
  result = num1 * num2;
  return result;
}
/*let mul_output = multiply(5, 3);
console.log("Multiplication Output is", mul_output);*/

// Division function defination
//Division = num1 / num2

function divide(num1, num2) {
  result = num1 / num2;
  return result;
}
/*let div_output = divide(10, 5);
console.log("Divison Output is", div_output);*/
