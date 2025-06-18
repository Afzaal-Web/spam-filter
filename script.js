const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");


/* 
1. Regular expressions can take flags to modify their behavior.For instance, 
the i flag can be used to make the expression ignore case, causing it to match hello, 
HELLO, and Hello for the expression / hello /. 

2. Instead of using the .match() method, you can use the .test() method of a regular 
expression to test if a string matches the pattern. Unlike .match(), .test() returns a
 boolean value indicating whether or not the string matches the pattern.

const isSpam = (msg) => msg.match(helpRegex);

3. The alternate sequence | can be used to match either the text on the left or the text
on the right of the |. For example, the regular expression /yes|no/ will match either yes or no.

4. Arrays have a .some() method. Like the .filter() method, .some() accepts a callback function which
should take an element of the array as the argument. The .some() method will return true if the callback 
function returns true for at least one element in the array.

const arr = ["A", "b", "C"];
arr.some(letter => letter === letter.toUpperCase());

5. the regular expression /a+/ matches one or more consecutive a characters.

6. A capture group is a way to define a part of the expression that should be captured and saved for later 
reference. You can define a capture group by wrapping a part of your expression in parentheses. For example, 
/h(i|ey) camper/ would match either hi camper or hey camper, and would capture i or ey in a group.

*/

const helpRegex = /please help|assist me/i;
const dollarRegex = /[0-9]+ (hundred|thousand|million|billion) dollars/i;

const denyList = [helpRegex, dollarRegex];


// const isSpam = (msg) => false;  implicity return false

const isSpam = (msg) => denyList.some((regex) => regex.test(msg));

checkMessageButton.addEventListener('click', () => {
    if (!messageInput.value.trim()) {
        alert("Please enter a message.");
    }
    result.textContent = isSpam(messageInput.value) ? "Oh no! This looks like a spam message." : "This message does not seem to contain any spam.";
    messageInput.value = '';
});