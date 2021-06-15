
function updateSubtotal(product) {
  const price = document.querySelector('.price span').innerHTML;
  const quantity = document.querySelector('.quantity input').value;
  console.log(price, quantity);

  let subtotal = price * quantity;
  document.querySelector('.subtotal span').innerHTML = subtotal;
}

document.querySelector('#calculate').onclick = function (event) {
  let rows = document.querySelectorAll('.product');

  for (let row of rows) {
    updateSubtotal(row);
  }
}
