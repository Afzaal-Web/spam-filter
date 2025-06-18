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

7. The ? quantifier matches zero or one occurrence of the preceding character or group. For example, 
the regular expression /colou?r/ matches both color and colour, because the u is optional.

8. Replace the first literal space with the \s* expression. The \s character class matches whitespace,
such as spaces, tabs, and new lines. The * quantifier means "match the previous character 0 or more times".

Replace the second literal space with \s+. The + quantifier means "match the previous character at least one time".

9. One last thing with this expression. You don't actually need the match value from your capture group, so you
can turn it into a non-capturing group. This will allow you to group the characters together without preserving
the result. To create a non-capturing group in a regular expression, you can add ?: after the opening parenthesis
of a group. For instance, (?:a|b) will match either a or b, but it will not capture the result. Update your regular
 expression to use a non-capturing group.

*/

const helpRegex = /please help|assist me/i;
const dollarRegex = /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i;
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;
const dearRegex = /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i;

const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];


// const isSpam = (msg) => false;  implicity return false

const isSpam = (msg) => denyList.some((regex) => regex.test(msg));

checkMessageButton.addEventListener('click', showOutput)

function showOutput() {
    if (!messageInput.value.trim()) {
        alert("Please enter a message.");
    }
    result.textContent = isSpam(messageInput.value) ? "Oh no! This looks like a spam message." : "This message does not seem to contain any spam.";
    messageInput.value = '';
};


// shift + enter to showOutput
messageInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.ctrlKey) {
    e.preventDefault();  // Prevent newline
    showOutput();        // Run on Shift + Enter
  } else if (e.key === 'Enter') {
    // Allow regular Enter to insert a line break (do nothing)
    // So don't call preventDefault()
  }
});


