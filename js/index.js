function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  console.log(price, quantity);

  let subtotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal;
  return subtotal;
}

document.querySelector('#calculate').onclick = function (event) {
  let rows = document.querySelectorAll('.product');

  let sum = 0;
  for (let row of rows) {
    sum += updateSubtotal(row);
    console.log(sum);
  }
  document.querySelector('#total-value span').innerText = sum;
};

function removeStuff () {
let allButton = document.querySelectorAll('.btn-remove');
for (let button of allButton) {
  button.onclick = function (e) {
    console.log(button);

    this.parentNode.parentNode.remove(); //e.target,button
  };
}
}


// document.querySelectorAll('.btn-remove').onclick = function (event) {
//   console.log('Tiger');
//   document.querySelector('.product').remove();
// };
removeStuff()

document.querySelector('#create').onclick = function (event) {
  const productName = document.querySelector('#productName').value
  const productPrice = document.querySelector('#productPrice').value

 document.querySelector('tbody').innerHTML += `  
 
 <tr class="product">
 <td class="name">
   <span>${productName}</span>
 </td>
 <td class="price">$<span>${productPrice}</span></td>
 <td class="quantity">
   <input type="number" value="0" min="0" placeholder="Quantity" />
 </td>
 <td class="subtotal">$<span>0</span></td>
 <td class="action">
   <button class="btn btn-remove">Remove</button>
 </td>
</tr>
`
removeStuff()
}

