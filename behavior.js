var total = 0;

var $entryForm = document.querySelector('#entryForm');


function handleSubmit(event) {

  event.preventDefault();
//  var entry = document.querySelector('#newEntry').value;
//  currency = currencyFormat(entry);
//  document.querySelector('#entries').innerHTML += '<tr><td></td><td>' + currency + '</td></tr>';
//  total += entry;
//  document.querySelector('#total').innerHTML = currencyFormat(total);
//
//  document.querySelector('#newEntry').value = '';

}

function currencyFormat(num) {
  var currency = parseFloat(num);
  currency = '$' + currency.toFixed(2);
  return currency;
}


$entryForm.addEventListener('submit', handleSubmit);
