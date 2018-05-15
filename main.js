/*

@ task

replace formal english with broken english base on certain rules 
that are given.

*/


// pseudo code

/*
  put every word into an array
  loop through array

  if found to, too then replace with the number 2
  if found for, fore the replace with the number 4
  if found double o's, replace with 00

  if found be", "are", "you", "please", "people", "really", "have", 
  and "know" replace with "b", "r", "u", "plz", "ppl", "rly", "haz", 
  and "no"

  if found 's', replace with a z

  if the beginning word starts with a w or W add a LOL in front of it

	'OMG' but be add in beginning of sentece if it has more than 32 characters
	(after LOL if it exist)

	all evenly placed word be all cap

	if input starts with h or H, all words but be all cap

	. , ' must be removed

	if there is a question marks the amount of words must equal to the
	amount of question marks present

	if there is a exclamation point the amount of words must equal to
	the amount of (!) and replace every even  (!) with a (1)
*/

function n00bify(text) {
	var textLength = text.length;
	text = text.split(" ");

	text.forEach(function (current, index) {
		// replace to or too with a number 2
		if (current.toLowerCase().indexOf("to") > -1) {
			if (current.toLowerCase().indexOf("too") > -1) {
				text[index] = text[index].replace("too", "2");
			} else {
				text[index] = text[index].replace("to", "2");
			}
		}

		// replace for or fore with a number 4
		if (current.toLowerCase().indexOf("for") > -1) {
			if (current.toLowerCase().indexOf("fore") > -1) {
				text[index] = text[index].replace("fore", "4");
			} else {
				text[index] = text[index].replace("for", "4");
			}
		}

		// replace double o with double 0

		if (current.indexOf("oo") > -1 && current.toLowerCase() !== "too" || current.toLowerCase() !== "to") {
			text[index] = text[index].replace("oo", "00");
		}

		/*
		found "be", "are", "you", "please", "people", "really", "have", 
		and "know" replace with "b", "r", "u", "plz", "ppl", "rly", "haz",
		and "no"
		*/

		if (current.indexOf("be") > -1) {
			text[index] = text[index].replace("be", "b");
		}
		if (current.indexOf("are") > -1) {
			text[index] = text[index].replace("are", "r");
		}
		if (current.indexOf("you") > -1) {
			text[index] = text[index].replace("you", "u");
		}
		if (current.indexOf("please") > -1) {
			text[index] = text[index].replace("please", "plz");
		}
		if (current.indexOf("people") > -1) {
			text[index] = text[index].replace("people", "pbl");
		}
		if (current.indexOf("really") > -1) {
			text[index] = text[index].replace("really", "rly");
		}
		if (current.indexOf("have") > -1) {
			text[index] = text[index].replace("have", "haz");
		}

		if (current.indexOf("know") > -1) {
			text[index] = text[index].replace("know", "no");
		}

		if (current.indexOf("s") > -1) {
			text[index] = text[index].replace("s", "z");
		}

		if (current.toLowerCase().indexOf("w") > -1 && index == 0) {
			text.unshift("LOL");
		}

		if (index % 2 === 0) {
			text[index] = text[index].toUpperCase();
		}

		if (current.indexOf(".") > -1) {
			text[index] = text[index].replace(".", "")
		}
		if (current.indexOf(",") > -1) {
			text[index] = text[index].replace(",", "");
		}
		if (current.indexOf("\'") > -1) {
			text[index] = text[index].replace("\'", "");
		}
		
		if (current.indexOf("?") > -1) {
			var storeQuestionMarks = "";
			for (let i = 0; i < text.length-1; i++) {
				storeQuestionMarks += "?"
			}
			text[index] = text[index] + storeQuestionMarks;
		}

		if (current.indexOf("!") > -1) {
			var storeExclamationPoints = "";
			for (let i = 0; i < text.length - 1; i++) {
				if (i % 2 === 0) {
					storeExclamationPoints += "1"
				} else {
					storeExclamationPoints += "!"
				}
			}
			text[index] = text[index] + storeExclamationPoints;
		}
	});

	if (textLength > 32 && text[0] !== "LOL") {
		text.unshift("OMG")
	} else if (text[0] === "LOL" && textLength > 32) {
		text.splice(1, 0, "OMG");
	}
	if (text[0].toLowerCase().indexOf("h") > -1) {
		text.forEach(function (char, subIndex) {
			text[subIndex] = text[subIndex].toUpperCase();
		})
	}

	console.log(text.join(" "))
	return text.join(" ");
}

n00bify("Hi, how are you today?") // , "HI HOW R U 2DAY?????");

n00bify("I think it would be nice if we could all get along.") //, "OMG I think IT would B nice IF we COULD all GET along");

n00bify("Let's eat, Grandma!") //, "Letz EAT Grandma!1!");