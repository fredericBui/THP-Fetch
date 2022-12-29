divProduct = document.getElementById("product");
previousButton = document.getElementById("previousButton");
productNumber = 1;

function fetchAPI() {
  fetch(`https://fakestoreapi.com/products/${productNumber}`)
    .then((res) => res.json())
    .then((json) => loadData(json));
}

function loadData(json) {
  divProduct.children[0].innerHTML = json.title;
  divProduct.children[1].innerHTML = json.price;
}

function nextProduct() {
  productNumber += 1;
  previousButton.disabled = false;
  fetchAPI();
}

function previousProduct() {
  if (productNumber > 1) {
    productNumber -= 1;
  } else {
    console.log("You reach the first product");
    previousButton.disabled = true;
  }
  fetchAPI();
}

fetchAPI();
