var arrayOfQuotes = [
	{
		"author":"Henry Ward Beecher",
		"quote":"To array a man's will against his sickness is the supreme art of medicine.",
	},
	{
		"author":"Luke Harding",
		"quote":"When I first began visiting West Germany in the early 1980s, I was startled by the contrast between Birmingham, where I went to school, and affluent Cologne. My host family, the lovely Schumachers, always had an opulent array of grapes on the table; they were better dressed than anyone I knew in Britain.",
	},
	{
		"author":"David Crystal",
		"quote":"The Internet has given us 10 or 15 new styles of communication: long messages like blogging, and then short messages like texting and tweeting. I see it all as part of an expanding array of linguistic possibilities.",
	},
	{
		"author":"William Barr",
		"quote":"As we work to secure our data and communications from hackers, we must recognize that our citizens face a far broader array of threats.",
	},
	{
		"author":"Christina Binkley",
		"quote":"The Hermes scarf is a coveted, much-collected symbol of success that defines the Paris-based luxury company. But it has no single designer. Rather, the scarves are designed by a far-flung array of freelance artists.",
	},
	{
		"author":"Joshua Bekenstein",
		"quote":"We donate time, expertise, and resources to a wide array of charitable and nonprofit organizations around the world each year through partnership initiatives that make a real difference in our communities.",
	},
	{
		"author":"Brian L. Roberts",
		"quote":"Comcast NBCUniversal has an incredible array of brands and ways to deliver those brands and experiences for consumers.",
	},
	{
		"author":"Noam Chomsky",
		"quote":"As Bromberger observed, rules are understood to be elements of the computational systems that determine the sound and meaning of the infinite array of expressions of a language; the information so derived is accessed by other systems in language use.",
	},
	{
		"author":"Seth Shostak",
		"quote":"We can never prove that we're alone in the universe. But the Allen Telescope Array could prove that we're not.",
	},
	{
		"author":"Jean Rostand",
		"quote":"Stupidity, outrage, vanity, cruelty, iniquity, bad faith, falsehood - we fail to see the whole array when it is facing in the same direction as we.",
	},
	{
		"author":"Judy Chicago",
		"quote":"I set my sights upon becoming the kind of artist who would make a contribution to art history.",
	},
	{
		"author":"Spencer Mathews",
		"quote":"I have an array of beautiful godchildren and nephews and nieces, and children are my real thing, my real love, and I can't wait to have my own.",
	},
	{
		"author":"Karen Mills",
		"quote":"I recently had the opportunity to participate in Inc.'s first-ever 'Hire Power Awards' event in Washington, D.C. The event was a testament to the power of American entrepreneurship and the role that it plays in driving job creation and innovation in a wide array of industries.",
	},
	{
		"author":"Larry Wall",
		"quote":"Doing linear scans over an associative array is like trying to club someone to death with a loaded Uzi.",
	},
	{
		"author":"Naruto Uzumaki",
		"quote":"Believe It.",
	},
	{
		"author":"Shikamaru Nara.",
		"quote":"What a drag",
	},
	
];

function randomSelector(arrayLength) {
	return Math.floor(Math.random() * arrayLength);
}

function generateQuote() {
	var randomnumber = randomSelector(arrayOfQuotes.length);
	document.getElementById('quoteOutput').innerHTML = '"' + arrayOfQuotes[randomnumber].quote + '"';
	document.getElementById('authorOutput').innerHTML = "~ " + arrayOfQuotes[randomnumber].author;
}