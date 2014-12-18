var awesomeThoughts = "I am Robert and I am AWESOME!";
console.log(awesomeThoughts);

var email = "robertjgraves@gmail.com";

var newEmail = email.replace("gmail", "outlook");

console.log(email);
console.log(newEmail);

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

console.log(funThoughts);
$("#main").append(funThoughts);