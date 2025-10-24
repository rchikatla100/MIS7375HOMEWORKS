/*
Rajesh Chikatla (1788318)
Homework 2 JS Scripts
*/

// dynamic date
const date = new Date();
let text = date.toLocaleDateString();
document.getElementById("today").innerHTML = text;


// range slider
let slider = document.getElementById("myRange");
let output = document.getElementById("rangeSlider");
output.innerHTML = slider.value;
  slider.oninput = function() 
  {
    output.innerHTML = this.value;
  }

//validate first name
function validateFirstName()
{
  let firstName = document.getElementById("firstname").value;
  let nameRegularExpression = /^[A-Za-z'-]+$/;

  if (!nameRegularExpression.test(firstName))
  {
    document.getElementById("firstNameError").innerHTML = 
    "First name can contain only letters, apostrophes, or hyphens.";
    return false;
  }
  else 
  {
    document.getElementById("firstNameError").innerHTML = "";
    return true;
  }
}
// Validate last name
function validateLastName()
{
  let lastName = document.getElementById("lastname").value;
  let nameRegularExpression = /^[a-zA-Z'2-5\s-.]+$/;

  if (!nameRegularExpression.test(lastName))
  {
    document.getElementById("lastNameError").innerHTML = 
    "Last name can only contain letters, apostrophes, dashes, and suffixes ie. IV, 2nd.";
    return false;
  }
  else 
  {
    document.getElementById("lastNameError").innerHTML = "";
    return true;
  }
}

// Validate date of birth
function validateDOB()
{
  dob = document.getElementById("dob");
  let date = new Date(dob.value);
  let maxDate = new Date().setFullYear(new Date()-120);

  if (date > new Date())
  {
    document.getElementById("dobError").innerHTML = "Date of birth cannot be in the future.";
    dob.value = "";
    return false;
  }
  else if (date < new Date(maxDate))
  {
   document.getElementById("dobError").innerHTML = "Date of birth cannot be more than 120 years ago.";
   return false;
  }
  else 
  {
    document.getElementById("dobError").innerHTML = "";
    return true;
  }
}


// Validate SSN

function validateSSN()
{
  let ssn = document.getElementById("ssn").value;
  let ssnRegularExpression = /^(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4}$/

  if (!ssnRegularExpression.test(ssn))
  {
    document.getElementById("ssnError").innerHTML = 
    "Please enter a valid SSN.";
    return false;
  }
  else 
  {
    document.getElementById("ssnError").innerHTML = "";
    return true;
  }

}
// Validate Address Line 1
function validateAddressLine1()
  {
    var addr1 = document.getElementById("addr1").value;
    console.log(addr1);
    console.log(addr1.length);

    if (addr1.length < 2)
    {
      document.getElementById("addressLine1Error").innerHTML = 
      "Please enter a valid address.";
      return false;
    }
    else 
    {
      document.getElementById("addressLine1Error").innerHTML = "";
      return true;
    }
  }
  
// Validate Email

function validateEmail()
{
  email = document.getElementById("email").value;
  var emailRegularExpression = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,20}$/;


  if (email == "")
  {
    document.getElementById("emailError").innerHTML = 
    "Email cannot be blank.";
    return false;
  }
  else if (!email.match(emailRegularExpression))
  {
    document.getElementById("emailError").innerHTML = 
    "Please enter a valid email address (email@domain.com).";
    return false;
  }
  else 
  {
    document.getElementById("emailError").innerHTML = "";
    return true;
  }
}
//Validate Phone Number
function validatePhone()
{
  phone = document.getElementById("phone").value;
  var phoneRegularExpression = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

  if (phone.length != 12)
  {
    document.getElementById("phoneError").innerHTML = 
    "Please enter a 9-digit phone number (###-###-####).";
    return false;
  }
  /*
  else if (!phone.match(phoneRegularExpression))
  {
    document.getElementById("phoneError").innerHTML = 
    "Please enter a valid phone number (###-###-####).";
    return false;
  }
  */
  else 
  {
    document.getElementById("phoneError").innerHTML = "";
    return true;
  }
}



// Validate username

function validateUsername()
{
  let username = document.getElementById("username").value;
  username = username.toLowerCase();
  document.getElementById("username").value = username;

  if (username.length == 0)
  {
    document.getElementById("usernameError").innerHTML = 
    "Username field cannot be empty.";
    return false; 
  }


  if (!isNaN(username.charAt(0)))
  {
    document.getElementById("usernameError").innerHTML = 
    "Username cannot start with a number.";
    return false;
  }

  let usernameRegularExpression = /^[A-Za-z0-9_]+$/;
  if (!usernameRegularExpression.test(username))
  {
    document.getElementById("usernameError").innerHTML = 
    "Username can contain only letters, numbers, or underscore.";
    return false;
  }
  else if (username.length < 5)
  {
    document.getElementById("usernameError").innerHTML = 
    "Username must be at least 5 characters long.";
    return false;
  }
  else if (username.length > 30)
  {
    document.getElementById("usernameError").innerHTML = 
    "Username cannot exceed 30 characters.";
    return false;
  } 
  else 
  {
    document.getElementById("usernameError").innerHTML = "";
    return true;
  }


}

// Validate Password
function validatePassword()
{
  const password = document.getElementById("password").value;
  const username = document.getElementById("username").value;

  const errorMessage = [];

  if (!password.match(/[a-z]/)) // lowercase letter
  {
    errorMessage.push("Please enter at least one lowercase letter.");
  }
  
  if (!password.match(/[A-Z]/)) // uppercase letter
  {
    errorMessage.push("Please enter at least one uppercase letter.");
  }

  if (!password.match(/[0-9]/)) // at least one number
  {
    errorMessage.push("Please enter at least one number.");
  }

  if (!password.match(/[!@#%^&*()-_+=\/><.,`~]/)) // special character
  {
    errorMessage.push("Please enter at least one special character (!@#%^&*()-_+=\/><.,`~).");
  }

  if (password == username || password.includes(username))  // password can't contain username
  {
    errorMessage.push("Password cannot contain username.");
  }

  const errorContainer = document.querySelector(".passwordError");
  errorContainer.innerHTML = errorMessage
  .map((message) => `<span>${message}</span><br/>`)
  .join("");
}

// Validate confirm password

function confirmPassword()
{
  const password1 = document.getElementById("password").value;
  const password2 = document.getElementById("confirmpassword").value;

  if (password1 !== password2)
  {
    document.getElementById("confirmPasswordError").innerHTML = 
    "Passwords do not match.";
    return false;
  }
  else 
  {
    document.getElementById("confirmPasswordError").innerHTML = "Passwords match!";
    return true;
  }
}



// Review button
function reviewInput()
{
  var formcontent = document.getElementById("signup");
  var formoutput;
  var datatype;
  var i;
  formoutput = "<table class = 'output'><th colspan  = '3'> Please review your input: </th>";
  for (i = 0; i < formcontent.length; i++)
    if (formcontent.elements[i].value != "")
    {
      datatype = formcontent.elements[i].type;
      switch (datatype)
      {
        case "checkbox": //checkbox elements
          if (formcontent.elements[i].checked)
          {
            formoutput = formoutput + "<tr> <td align = 'right'>" + formcontent.elements[i].name + "</td>";
            formoutput = formoutput + "<td class = 'outputdata'></td></tr>"
          }
          break;
        case "radio": //radio button elements
          if (formcontent.elements[i].checked)
          {
            formoutput = formoutput + "<tr> <td align = 'right'>" + formcontent.elements[i].name + "</td>"; 
            formoutput = "<td class = 'outputdata'>" + formcontent.elements[i].value + "</td></tr>";
          }
          break;

        case "submit": 
        case "button": 
        case "reset":
        
          formoutput = formoutput + "<tr><td align = 'right'>" +
          formcontent.elements[i].name + "</td>";
          formoutput = formoutput + "<td class = 'outputdata'>" +
          formcontent.elements[i].value + "</td></tr>";
          break;
          default:
          formoutput = formoutput + "<tr><td align = 'right'>" +
          formcontent.elements[i].name + "</td>";
          formoutput = formoutput + "<td class = 'outputdata'>" +
          formcontent.elements[i].value + "</td></tr>";
      }
    }

    if (formoutput.length > 0)
    {
      formoutput = formoutput + "</table>";
      document.getElementById("showInput").innerHTML = formoutput;
    }
  }

function removeReview()
{
  document.getElementById("showInput").innerHTML = "";
}



