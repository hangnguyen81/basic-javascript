// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let errorMess = document.getElementById('error')

function message(){
    errorMess.textContent = 'Something went wrong, please try again'
}