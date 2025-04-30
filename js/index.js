var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productDescriptionInput = document.getElementById("productDescription");
var productImageInput = document.getElementById("productImage");

var productShelf = []; //shelf store for my products -Store in local storage
if (localStorage.getItem("products") !== null) {
  productShelf = JSON.parse(localStorage.getItem("products")); //
  viewProducts(); // view for products in local storage
}

function addProduct() {
    //Static file
  var product = {
    productName: productNameInput.value,
    productPrice: productPriceInput.value,
    productCategory: productCategoryInput.value,
    productDescription: productDescriptionInput.value,
    productImage: `images/${productImage.files[0].name}`,
  };
  productShelf.push(product);
  localStorage.setItem("products", JSON.stringify(productShelf));
  viewProducts(); 
  console.log(productImage.files[0].name);
}
function viewProducts() {
  var box = "";
  for (var i = 0; i < productShelf.length; i++) {
    box += `<tr>
                <td>${i + 1}</td>
                <td>${productShelf[i].productName}</td>
                <td>${productShelf[i].productPrice}</td>
                <td>${productShelf[i].productCategory}</td>
                <td>${productShelf[i].productDescription}</td>
                <td><img width="100px" height="50px" src="${productShelf[i].productImage}"
                   alt="this is mobile"></td>
                   <td>
                      <button class="btn btn-warning">Update</button>
                      <button class="btn btn-danger">Delete</button>
                   </td>
              </tr>`;
  }
  document.getElementById("tableData").innerHTML = box;
}
