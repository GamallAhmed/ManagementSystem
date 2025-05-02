var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productDescriptionInput = document.getElementById("productDescription");
var productImageInput = document.getElementById("productImage");
var productShelf = [];
if (localStorage.getItem("products") !== null) {
  productShelf = JSON.parse(localStorage.getItem("products"));
  viewProducts();
}

function addProduct() {
      //  True or false
    if(validateProductName ()){
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
    else{
      alert("Please add valid product name");
    }
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
                <td><img width="100px" height="50px"
                 src="${productShelf[i].productImage}" alt="this is mobile">
                </td>
                <td>
                    <button class="btn btn-warning">Update</button>
                    <button class="btn btn-danger">Delete</button>
                </td>
              </tr>`;
  }
  document.getElementById("tableData").innerHTML = box;
}

/* 
  Regex (Regular Expression) pattern frontend validation
  real time validation
*/

// var x=/^[A-Z][a-z]{3,5}[0-9]{2}$/;

// var word="Ibdaa5"; //match regex or not

// if(x.test(word)== true){
//     alert("Matching");
// }
// else{
//   alert("Regex not match")
// }

function validateProductName() {
  var regex = /^[A-Z][a-z]{4,8}$/; //pattern for product name
  var userInput = productNameInput.value; //Store user input
  if (regex.test(userInput) == true) {
    productNameInput.classList.add("is-valid"); //True Green 
    productNameInput.classList.remove("is-invalid")
    console.log("Matching");
    return true;
    
  } else {
    productNameInput.classList.add("is-invalid"); //Error
    productNameInput.classList.remove("is-valid")
    console.log("Not Matching");
    return false;
  }
}
