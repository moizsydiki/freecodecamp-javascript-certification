let inventory = [];

function findProductIndex(productName) {
  const productNameLower = productName.toLowerCase();
  const productIndex = inventory.findIndex(
    (item) => item.name === productNameLower,
  );
  if (productName) {
    return productIndex;
  } else {
    return -1;
  }
}
function addProduct(productObj) {
  const productName = productObj.name.toLowerCase();
  const product = inventory.find((item) => item.name === productName);

  if (product) {
    product.quantity += productObj.quantity;
    console.log(`${product.name} quantity updated`);
  } else {
    inventory.push({ name: productName, quantity: productObj.quantity });
    console.log(`${productName} added to inventory`);
  }
}

function removeProduct(productName, productQuantity) {
  const productNameLower = productName.toLowerCase();
  const product = inventory.find((item) => item.name === productNameLower);

  if (product) {
    product.quantity -= productQuantity;
    if (product.quantity === 0) {
      inventory = inventory.filter((item) => item.name !== productNameLower);
      return;
    } else if (product.quantity < 0) {
      return console.log(
        `Not enough ${productNameLower} available, remaining pieces: ${(product.quantity += productQuantity)}`,
      );
    }
    console.log(`Remaining ${productNameLower} pieces: ${product.quantity}`);
  } else if (!product) {
    console.log(`${productNameLower} not found`);
  }
}

// console.log(addProduct({ name: "FLOUR", quantity: 5 }));
// console.log(removeProduct("CHICKEN", 3));
// console.log(findProductIndex("FloUr"));
