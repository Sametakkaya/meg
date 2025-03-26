document.addEventListener("DOMContentLoaded", function() {
  const productData = [
    { imgSrc: "111.jpg", altText: "Ürün 1", description: "Ürün açıklaması burada yer alacak." },
    { imgSrc: "222.jpg", altText: "Ürün 2", description: "Ürün açıklaması burada yer alacak." },
    { imgSrc: "333.jpeg", altText: "Ürün 3", description: "Ürün açıklaması burada yer alacak." },
    { imgSrc: "222.jpg", altText: "Ürün 4", description: "Ürün açıklaması burada yer alacak." },
    { imgSrc: "111.jpg", altText: "Ürün 5", description: "Ürün açıklaması burada yer alacak." },
    { imgSrc: "333.jpeg", altText: "Ürün 6", description: "Ürün açıklaması burada yer alacak." },
    { imgSrc: "222.jpg", altText: "Ürün 7", description: "Ürün açıklaması burada yer alacak." },
    { imgSrc: "333.jpeg", altText: "Ürün 8", description: "Üün açıklaması burada yer alacak." },
  ];

  const container = document.getElementById("productCardsContainer");

  // Kartları dinamik olarak ekleyin
  productData.forEach((product, index) => {
    const cardHTML = `
      <div class="col-md-3 col-sm-6 mb-4">
        <div class="card shadow-sm">
          <img src="${product.imgSrc}" class="card-img-top" alt="${product.altText}">
          <div class="card-body">
            <p class="card-text">${product.description}</p>
            <a href="#contact" class="btn btn-warning">Bize Ulaşın</a>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += cardHTML;
  });

  // Kartları 4'erli gruplara ayır ve her grup için bir carousel-item oluştur
  const cards = container.children;
  let carouselItems = [];
  for (let i = 0; i < cards.length; i += 4) {
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");

    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    // 4 kartı bir arada yerleştir
    for (let j = i; j < i + 4 && j < cards.length; j++) {
      rowDiv.appendChild(cards[j]);
    }

    carouselItem.appendChild(rowDiv);
    carouselItems.push(carouselItem);
  }

  // İlk carousel-item'ı aktif yap
  carouselItems[0].classList.add("active");

  // Carousel item'ları ekle
  const carouselInner = document.querySelector(".carousel-inner");
  carouselItems.forEach(item => {
    carouselInner.appendChild(item);
  });
});
