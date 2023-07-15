const buttons = document.querySelectorAll('.btn-price');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const price = this.dataset.price;
    alert(`The price of this book is $${price}`);
  });
});
