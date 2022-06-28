function showRatingScore(event)
{
    event.preventDefault();
    const checked_square = document.querySelector('input[name = "square"]:checked').value;
    console.log("checked",checked_square);

}

const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", showRatingScore);

const detractorQuickEntries = [
    "some text",
    "Mal servicio",
    "No cumple con lo prometido",
    "example",
    "another text",
    "another one",
    "lorem",
    "test text",
];

function insertQuickEntries(event) {
    let cards = document.getElementById("cards");
    let textHTML;
    
    for (let i=0; i < detractorQuickEntries.length; i++ ) {
        textHTML += '<input type="checkbox" id="card'+i+'" name="card'+i+'" value="'+detractorQuickEntries[i]+'"> <label class="cards" for="card'+i+'">'+detractorQuickEntries[i]+'</label>';
        cards.insertAdjacentHTML('afterend', 
        '<input type="checkbox" id="card'+i+'" name="card'+i+'" value="'+detractorQuickEntries[i]+'"> <label for="card'+i+'">'+detractorQuickEntries[i]+'</label>');
    }

    cards.innerHTML = textHTML;
    console.log(textHTML);

}

const optionSquares = document.getElementById("squares");

optionSquares.addEventListener("click", insertQuickEntries);