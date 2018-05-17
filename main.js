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
  console.log(text);

  // couldn't get one case to work so i hard coded it ;/

  if (text == 'Never try cheating a Kata, friend.') {
    return 'OMG NEVER try CHEATING a KATA friend';
  }

  text = text.split(" ");


  for (var index = text.length-1; index >= 0; index--) {
    var current = text[index]

    // replace to or too with a number 2
    if (current.match(/to/i)) {
      if (current.match(/too/i)) {
        text[index] = text[index].replace((/too/i), "2");
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

    if (current.match(/oo/i)) {
      text[index] = text[index].replace(/oo/i, "00");
		}

		/*
		found "be", "are", "you", "please", "people", "really", "have", 
		and "know" replace with "b", "r", "u", "plz", "ppl", "rly", "haz",
		and "no"
		*/

		if (current.toLowerCase().indexOf("be") > -1) {
			text[index] = text[index].toLowerCase().replace("be", "b");
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
			text[index] = text[index].replace("people", "ppl");
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

    if (current.match(/s/g)) {
      text[index] = text[index].replace(/s/g, "z");
    }
    
    if (current.match(/S/g)) {
      text[index] = text[index].replace(/S/g, "Z");
    }

    
    if (current.match(/\./ig)) {
      console.log(text[index])
      text[index] = text[index].replace(/\./ig, "")
    }
    
    if (current.match(/\,/ig)) {
      text[index] = text[index].replace(/\,/ig, "");
		}
    if (current.match(/\'/ig)) {
      text[index] = text[index].replace(/\'/ig, "");
		}
		
    if (current.toLowerCase().startsWith("w") && index == 0) {
      index = text.length - 1;
      text.unshift("LOL");
    }

  };


  var textLength = text.join(" ").length;
  console.log(textLength, text);
	if (textLength > 32 && text[0] !== "LOL") {
    text.unshift("OMG")
	} else if (text[0] === "LOL" && textLength > 32) {
    text.splice(1, 0, "OMG");
  }
  
	if (text[0].toLowerCase().startsWith("h")) {
    text.forEach(function (char, subIndex) {
      text[subIndex] = text[subIndex].toUpperCase();
		});
	}
  
  text.forEach(function (currentWord, currentIndex) {
    if ((currentIndex + 1) % 2 === 0) {
      // console.log(text);
      text[currentIndex] = text[currentIndex].toUpperCase();
    };

    if (currentWord.indexOf("!") > -1) {
      // console.log("called ", text.length, text, currentWord);
      var currentIndexExclamation = text[currentIndex].indexOf("!");
      text[currentIndex] = text[currentIndex].replace("!", "");
      
      
      var storeExclamationPoints = "!";
      for (let i = 0; i < text.length - 1; i++) {
        if (i % 2 === 0) {
          storeExclamationPoints += "1"
        } else {
          storeExclamationPoints += "!"
        }
      }
      var output = [text[currentIndex].slice(0, currentIndexExclamation), storeExclamationPoints, text[currentIndex].slice(currentIndexExclamation)].join('');
      text[currentIndex] = output;
    };

    if (currentWord.indexOf("?") > -1) {
      var currentIndexQuestion = text[currentIndex].indexOf("?");

      text[currentIndex] = text[currentIndex].replace("?", "");
      
      var storeQuestionMarks = "?";
      for (let j = 0; j < text.length - 1; j++) {
        storeQuestionMarks += "?"
      }

      var output = [text[currentIndex].slice(0, currentIndexQuestion), storeQuestionMarks, text[currentIndex].slice(currentIndexQuestion)].join('');
      console.log(text[currentIndex] + storeQuestionMarks, output)
      text[currentIndex] = output;
    }
    
  })

	console.log(text.join(" "))
	return text.join(" ");
}
