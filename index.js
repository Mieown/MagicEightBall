// Skapar en slumpmässig nummerfunktion
function GenerateRandom(max_number) {

    return Math.round(Math.random()*max_number);
    
}

function GetQuestionAnalysis(questionText) {

    // 'dictionary' är en array som innehåller arrayer. 
    // de inre arrayerna innehåller ett ord man vill jämföra mot samt svarstexten för det ordet
    let dictionary = [['tired', 'Take a nap and have a snack'], ['sad', 'We\'re sending you<br> a big hug!'], ['nervous', 'You can do it! Believe <br> in yourself.'], ['anxiety', 'Breathe! It will pass'], ['anxious', 'Breathe! It will pass'], ['insecure', 'Everyone has that feeling <br> from time to time.'], ['shit', 'Tomorrow will be better'], ['javascript', 'Because you\'re a noob. <br> You will learn. '], ['learned', 'Variables, functions, arrays, nested arrays, for loops <br>and if/else statement.']];

    // frågan man får in, meningen, delas upp i ord som man sparar i en array. 
    // uppdelningen från mening till ord sker genom att man delar på meningen vid alla mellanslag
    let questionArray = questionText.split(' ');

    // den första for-loopen går igenom varje ord i arrayen som man skapade från fråge-meningen
    for (i = 0; i < questionArray.length; i++) {

        // varje hopp som for-loopen gör innebär att 'word' blir nästa ord i fråge-meningen
        var word = questionArray[i];

        // den andra for-loopen går igenom varje ord i arrayen som innehåller min ordbok och ordens specifika svarstext
        for (j = 0; j < dictionary.length; j++) {

            // varje hopp som den andra for-loopen gör innebär att 'dictionaryWord' blir nästa inre array i min ordbok 
            var dictionaryWord = dictionary[j];

            // här kontrollerar man om det aktuella frågeordet från första for-loopen är det samma som det aktuella ordboksordet i den andra for-loopen
            // 'dictionaryWord' är den inre arrayen i min 'dictionaryArray' och har på plats 0 ordet vi vill kontrollera mot och på plats 1 svarstexten som man vill returnera

            // för att inte '?', ',' eller '!' ska ge negativ matchning, trots att ordet som kontrolleras är det aktuella ordboksordet, så ersätter man de tecknen med ingenting
            if (word.replace('?', '').replace(',', '').replace('!', '') === dictionaryWord[0]) {

                //när man har hittat en match och returnerar ett objekt med vårt specialsvar
                return {
                    matchedDictionary: true,
                    customizedAnswer: dictionaryWord[1]
                };        
            }
        }
    }

    // när man har loopat igenom alla ord i min fråga och jämfört dem mot alla ord i min ordbok, men hittade ingen matchning
    // när man returnerar ett objekt som visar att ingen matchning har gjorts och därför heller inget specialsvar
    return {
        matchedDictionary: false,
        customizedAnswer: ''
    };
} 

// addera saker som ska vara interaktiva
let button = document.querySelector("button");
let answer = document.querySelector("#answer");

// addera effekt på knappen
button.addEventListener("click", function() {

// spara frågan som skrevs in i variabel
let questionText = document.querySelector("#questionArea").value;

// skicka in frågan till en funktion analyserar och kolla om vissa specifika ord finns med. 
// Returnerar ett objekt - 'question' som vi kan använda vidare i koden
let question = GetQuestionAnalysis(questionText);

// Genererar ett random nummer
let randomNumber = GenerateRandom(3);

//Får de randoma numren till svar
let answerText = "";

if (question.matchedDictionary) {
    answerText = question.customizedAnswer;
}
else {

    if (randomNumber == 0) {
        answerText = "Just remember to believe <br> in yourself";
    }
    else if (randomNumber == 1) {
        answerText = "Concentrate and try again";
    }

    else if (randomNumber == 2) {
        answerText = "Google some kittens!";
    }

    else {
        answerText = "Find the answer <br> within yourself";
    }
}

answer.innerHTML = answerText;

});
