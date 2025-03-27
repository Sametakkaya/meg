document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const formData = new FormData(this);
  
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  fetch('https://formspree.io/f/xgvazgzg', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => {
    if (response.ok) {
      alert("Mesajınız başarıyla gönderildi!");
    } else {
      alert("Mesaj gönderilemedi, lütfen tekrar deneyin.");
    }
  })
  .catch(error => {
    console.error('Hata:', error);
    alert("Mesaj gönderilemedi.");
  });
});
