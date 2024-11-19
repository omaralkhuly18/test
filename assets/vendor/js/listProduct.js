// Fetch data from JSON file and Local Storage
async function loadTableData() {
  try {
    // Fetch JSON data
    const response = await fetch('assets/data.json'); // ضع مسار الملف الصحيح هنا
    const jsonData = await response.json();

    // Fetch Local Storage data
    const localStorageData = JSON.parse(localStorage.getItem("productData")) || [];

    // Combine both data sources
    const combinedData = Array.isArray(localStorageData)
      ? [...jsonData, ...localStorageData]
      : [...jsonData, localStorageData];

    // Display data in table
    populateTable(combinedData);
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

// Function to populate the table
function populateTable(data) {
  const tableBody = document.querySelector(".datatables-products tbody");
  tableBody.innerHTML = ""; // Clear existing rows

  data.forEach((item) => {
    const newRow = `
      <tr>
        <td><img src="${item.image || 'default.jpg'}" alt="Product Image" style="width: 50px; height: 50px;" /></td>
        <td></td>
        <td>${item.productName || 'N/A'}</td>
        <td>${item.category || 'N/A'}</td>
        <td>${item.stock || 'In Stock'}</td>
        <td>${item.sku || 'N/A'}</td>
        <td>${item.price || 'N/A'}</td>
        <td>${item.qty || 1}</td>
        <td>${item.status || 'N/A'}</td>
        <td>
          <button class="btn btn-sm btn-primary">Edit</button>
          <button class="btn btn-sm btn-danger">Delete</button>
        </td>
      </tr>
    `;
    tableBody.innerHTML += newRow;
  });
}

// Call the function to load data
loadTableData();
