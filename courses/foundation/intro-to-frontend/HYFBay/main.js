console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

// This should create the ul and the li's with the individual products details
function renderProducts(products) {
  
  // your code goes here
  
  const ul = document.querySelector("ul"); 
  ul.innerHTML = ""; 

  products.forEach(product => {
    const li = document.createElement("li");

    li.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Rating: ${product.rating}</p>
    `;

    ul.appendChild(li);
  });

  }


renderProducts(products); 
