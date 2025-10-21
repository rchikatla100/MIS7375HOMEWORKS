# MIS7375HOMEWORKS


NEW HOMEWORK 2 (as of 10/2/2023)

Building on the work you have already done on previous assignments....

You will be taking the files that present a welcome page and a form to register a new user but now you will add a "Review" buton next to the Submit button which will   
 redisplay ALL of the entered/chosen info from the form in 1 of the following ways:

1. Use a new area on the same page to the right or bottom of the original form.
2. DO NOT rewrite the existing page. Use <div and <span tags to add new content on the same page.
3. Put the data in a new area, frame or popup window.

Make sure you are using:

1, TITLE attribute to the input box elements to give some context sensitive instructions on each field, not just required fields.
2. Html input pattern matching to accomplish most of the submit validatoins
3. Optionally use Javascript in addition to submit validations.
4. Use Javascript where absolutely required like on matching password fields.

Go see my example hw2 (work in progress) at  profjake.w3spaces.org/MIS./homework2.html Links to an external site.

Remember all the  edits/requirements of homework 1,  most of which can be done with HTML using REGEX pattern matching, to warn the user of bad data OR prevent them from entering bad data.

Notable omissions:
If you left out the use of a  <TABLE> tag, please add it this time.
External CSS that is actually referenced
External Javascript file that will contain the modules/subroutines you call from each field or from the submit button (or any other action).

SAVE your old homeworks as they are in case we need to go back to them. Make NEW versions of files and code as you go. I recommend making a new folder at w3spaces caled /homework2 and putting your homework2 specific files there.

Required Input fields AND their edits (The don't have to be in this order, but recommended):

Block/area 1:
First Name (1 to 30 characters. ADVANCED EDITING: Letters, apostrophes and dashes only)
Middle Initial (1 character, letters only, no numbers, blank/null ok)
Last Name (1 to 30 characters, ADVANCED EDITING: Letters, apostrophes, numbers 2 to 5, ie, the 3rd, and dashes only)
Dates (3 pieces, MM/DD/YYYY) (ADVANCED EDITING: must validate the date range...
In other words, for birthdays, don't allow dates in the future or more than 120 years ago. For move in, or travel dates, do not allow dates in the past.
Do this with at the very least HTML attribute minimum and maximum date range values which uou can hard code for now but it is PREFERRED to calculate MIN and MAX dates based on the date you already display on the page.
You can leave the SOCIAL SECURITY out... but if you already have it... leave it in AND make sure it is an obscured password style field, and do appropriate testing/validation of it. You must have some sort of ID # field you are asking that is using the password attribute.

Block/area 2 (contact info):
Email address ADVANCED EDITING:  in the format name@domain.tld
Phone number: ADVANCED EDITING: 000-000-0000

Block/area 3 (address):
Address Line 1 (required,2 to 30 characters, don't worry about special characters or fancy editing for now)
Address Line 2 (not required, but if entered, treat the same as address line 1, 2 to 30 characters)
City (required, 2 to 30 characters)
State (Select box with all 50 states, DC and PR, ONLY need the 2 letter State code for the selected data, but ALSO add a NULL initial value for State so the user MUST choose a valid value)
ADVANCED (not required though) : MAKE THAT DROP DOWN LIST an inclusion that you refer to as an EXTERNAL FILE.
Zip Code... .required, 5 digits only, but allow up to 10 characters including a - so in case they enter the zip+4 version, i.e. 77002-1234.
You will just truncate it AND re-display the truncated version when you do your edits.

Block/area 4 (choices):
Check Boxes
e.g. Check all of the following that apply:  Have you had Chicken Pox, Measles, Covid-19, etc... at least 5

Radio Buttons, at least 3
e.g. own or rent, unsure
e.g. Have you been vaccinated.

New thing on the Slide Bar:
Incrementing or decrement a value (formatted appropriately) that displays next to or near the bar as you slide it
e.g. make a bar that asks for desired salary from $20,000/year to $200,00/year.
For real estate, make it as if the person wants to enter a rauge of prices to pay for a home.
This will be your SECOND requirement to do run sime javascript based on a dynamic event, like “on input” or “on change”.

Text area box... Needs to be there but data entry by the user is optional. No advanced editing needs to be done on this at this time, except MAYBE watch out for double quotes """, this can mess up your database or programming. You can do this with HTML pattern matching.

Later on, we may add some editing to PREVENT entry of HTML tags!

Text box for a desired user ID
Advanced Editing:
1. 5 to 30 characters.
2. No special characters allowed. just letters, numbers (as long as the first character is NOT a number), and an underscore or dash and
3. NO SPACES.
4. Allow entry of lower or uppercase but convert it to lowercase AND redisplay the corrected lowercase version on submit.


2 boxes for a passsword  and a re-enter password.
Required:
Password fields must be obscured on the form, i.e. typing produces **** instead of the characters.
Passwords must be at least 8 characters and no more than 30 characters long and contain at least 1 upper case latter, 1 number and 1 "special" character.

When you get to the point of submitting/validating the data on the form (or you can do it oninput or keyup):

Passwords must contain at least 1 upper case, 1 lower case letter, 1 digit and one "special" character which can be things like  !@#%^&*()-_+=\/><.,`~ But DO NOT ALLOW " quotes. These just cause problems.
Password CANNOT equal your desired User ID or have part of your user id or name in it
The 2 Password fields must, of course, equal each other. 

If the user does anything wrong, you need to display a popup or warning next to each field or in an alert box or some other way that they messed up on.
e.g. Passwords do not match 
