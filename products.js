const products = [
    {
        id: 1,
        name: "예쁜 티셔츠",
        price: "₩19,900",
        image: "images/tshirt.jpg"
    },
    {
        id: 2,
        name: "데일리 가방",
        price: "₩34,500",
        image: "images/bag.jpg"
    },
    {
        id: 3,
        name: "여름 샌들",
        price: "₩27,000",
        image: "images/sandal.jpg"
    }
];

const container = document.getElementById("product-list");

products.forEach(product => {
    const a = document.createElement("a");
    a.className = "product";
    a.href = `product.html?id=${product.id}`;
    a.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="info">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
    </div>
  `;
    container.appendChild(a);
});
