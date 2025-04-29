/* 
    Add product
    1-write details
    2-read info
    3-store
    4-Display
    onclick()
*/
var productNameInput=document.getElementById("productName"); 
var productPriceInput=document.getElementById("productPrice"); 
var productCategoryInput=document.getElementById("productCategory"); 
var productDescriptionInput=document.getElementById("productDescription"); 
var productImageInput=document.getElementById("productImage"); 


var productShelf=[]; //shelf store for my products

function addProduct(){
    var product={
        productName:productNameInput.value,
        productPrice:productPriceInput.value,
        productCategory:productCategoryInput.value,
        productDescription:productDescriptionInput.value,
        productImage:productImageInput.value
    }
    productShelf.push(product);
    console.log(productShelf);    
}
//link between function and button
// top level run once