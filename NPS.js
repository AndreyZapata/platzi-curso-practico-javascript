function showValue(event)
{
    event.preventDefault();
    const checked_square = document.querySelector('input[name = "square"]:checked').value;
    console.log("checked",checked_square);

}

const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", showValue);


// if(checked_square != null){  //Test if something was checked
// alert(checked_square.value); //Alert the value of the checked.
// } else {
// alert('Nothing checked'); //Alert, nothing was checked.
// }