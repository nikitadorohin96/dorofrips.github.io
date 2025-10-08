// 🌿 Dorofrips — функционал

const products = [
  {name: "Фрипсы яблочные 🍏", price: 150, img: "images/photo_1.jpg"},
  {name: "Фрипсы киви 🥝", price: 250, img: "images/photo_2.jpg"},
  {name: "Чай «Тёплый вечер» 🍵", price: 180, img: "images/photo_3.jpg"},
  {name: "Подарочный набор 🎁", price: 500, img: "images/photo_4.jpg"}
];

const main = document.getElementById("products");
products.forEach(p => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${p.img}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>${p.price} ₽</p>
    <button onclick="openModal('${p.name}')">Купить</button>
  `;
  main.appendChild(card);
});

function openModal(name) {
  const modal = document.getElementById("modal");
  modal.classList.add("active");
  modal.querySelector("h2").innerText = `Оформление заказа: ${name}`;
}

function closeModal() {
  document.getElementById("modal").classList.remove("active");
  alert("💚 Спасибо за заказ! Ваши фрипсы уже готовятся!");
}

// Тема
const toggle = document.createElement("div");
toggle.className = "theme-toggle";
toggle.innerText = "🌗";
document.body.appendChild(toggle);
toggle.onclick = () => {
  document.body.classList.toggle("dark");
};
