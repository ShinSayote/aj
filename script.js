const cars = [
  { name: "Toyota Vios 2019", price: 450000, img: "vios.jpg" },
  { name: "Honda Civic 2018", price: 520000, img: "civic.jpg" },
  { name: "Ford Ranger 2020", price: 850000, img: "ranger.jpg" },
  { name: "Mitsubishi Montero Sport 2017", price: 730000, img: "montero.jpg" },
  { name: "Hyundai Accent 2021", price: 580000, img: "accent.jpg" },
  { name: "Toyota Fortuner 2019", price: 1100000, img: "fortuner.jpg" },
  { name: "Nissan Almera 2020", price: 450000, img: "almera.jpg" },
  { name: "Mazda 3 2019", price: 670000, img: "mazda3.jpg" },
  { name: "Chevrolet Trailblazer 2018", price: 740000, img: "trailblazer.jpg" }
];

const productList = document.getElementById("product-list");
if (productList) {
  cars.forEach(car => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <div class="product-image">
        <img src="${car.img}" alt="${car.name}" />
      </div>
      <div class="product-info">
        <h3>${car.name}</h3>
        <p>Price: ₱${car.price.toLocaleString()}</p>
        <button class="purchase-btn">Purchase</button>
      </div>
    `;
    productList.appendChild(div);
  });
}