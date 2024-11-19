// Button to save and redirect
const publishButton = document.getElementById("publishButton");

publishButton.addEventListener("click", async (e) => {
  e.preventDefault();

  // Collect inputs
  const productName = document.getElementById("ecommerce-product-name").value;
  const sku = document.getElementById("ecommerce-product-sku").value;
  const barcode = document.getElementById("ecommerce-product-barcode").value;
  const price = document.getElementById("ecommerce-product-price").value;
  const discountedPrice = document.getElementById("ecommerce-product-discount-price").value;
  const vendor = document.getElementById("vendor").value;
  const category = document.getElementById("category-org").value;
  const collection = document.getElementById("collection").value;
  const status = document.getElementById("status-org").value;
  const tags = document.getElementById("ecommerce-product-tags").value;

  // Image file
  const imageInput = document.getElementById("img");
  const imageFile = imageInput.files[0];
  let imageBase64 = "";

  // Convert image to Base64 if a file is selected
  if (imageFile) {
    imageBase64 = await convertFileToBase64(imageFile);
  }

  // Validation: Check if all required fields are filled
  if (!productName || !sku || !price || !vendor || !category || !status) {
    alert("Please fill out all required fields.");
    return;
  }

  // Prepare product data
  const newProduct = {
    productName,
    sku,
    barcode,
    price,
    discountedPrice,
    vendor,
    category,
    collection,
    status,
    tags,
    image: imageBase64, // Add the Base64 image
  };

  // Get existing Local Storage data
  const existingData = JSON.parse(localStorage.getItem("productData")) || [];
  const updatedData = Array.isArray(existingData)
    ? [...existingData, newProduct]
    : [existingData, newProduct];

  // Save updated data back to Local Storage
  localStorage.setItem("productData", JSON.stringify(updatedData));

  // Redirect to another page
  window.location.href = "app-ecommerce-product-list.html";
});

// Function to convert file to Base64
function convertFileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}
