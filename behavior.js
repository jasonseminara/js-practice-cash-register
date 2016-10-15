/* We need to store the global total price here */
var total = 0;

/* FUNCTION 1: currencyFormat*/
/* This will change a decimal value to a string $xx.xx*/
function currencyFormat(num) {
  var currency = Number.parseFloat(num);
  currency = '$' + currency.toFixed(2);
  return currency;
}


/* FUNCTION 2: updateSubtotalTable*/
/* this function updates the subtotal table */
/* note: the default value of the last formal argument (subtotalText) */
function updateSubtotalTable($table, subtotalPrice, subtotalText='') {
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/insertRow

  /* create a new row at the bottom */
  var $newRow = $table.insertRow(-1);

  // insert the two data cells
  $newRow.insertCell().innerHTML = subtotalText;
  $newRow.insertCell().innerHTML = currencyFormat(subtotalPrice);
  return $newRow;
}


/* FUNCTION 3: handleSubmit*/
/* When we user submits the form, the event Listener will
   automatically insert the triggered event (the submit) into this function */
function handleSubmit(event) {

  // The event remembers where it was triggred from
  // in this case, the form triggered the 'submit' event, so out event.target is the form

  // Our form has some elements. One of them is called 'newEntry'
  // This is a '$' variable name because it's pointing to a DOM element.
  var $entryField = event.target.elements.newEntry;

  // we don't actually want the form to trigger the page to reload.
  // Let's prevent the default behavior of page reload
  event.preventDefault();

  // our entryField has a value.
  // all form fields contain text-- we want a number.
  // Let's convert the text into a floating-point number
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat
  total += $entryField.value;


  // this is the subtotal table
  var $allItems = document.querySelector('#entries');

  updateSubtotalTable($allItems, total);

  // having the dollar amount as a number is great for the total,
  // but bad for the front-end. Let's print it out and make it pretty with a dollar-sign
  document.querySelector('#total').innerHTML = currencyFormat(total);
  $entryField.value = '';
}

//  ----------BEGIN PROGRAM----------

/* notice that we're going to wait until the DOM has loaded before we execute any javascript */
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#entryForm').addEventListener('submit', handleSubmit);
});
