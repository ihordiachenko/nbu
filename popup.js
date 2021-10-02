let exchangeRates = document.querySelector('.popup')

chrome.storage.sync.get("rates", ({ rates }) => {
  const payload = rates.payload

  exchangeRates.innerHTML = `
    <h1 class="popup__title">Облікова ціна банківських металів</h1>
    <p class="popup__line">на дату ${payload.XAU.exchangedate}</p>
    <p class="popup__line">
        <a class="popup__link" target="_blank" href="https://bank.gov.ua/markets/exchangerate-metal-chart?cn[]=XAU">Золото(XAU)</a>: ${payload.XAU.rate} грн за 1 тройську унцію </br>
        <a class="popup__link" target="_blank" href="https://bank.gov.ua/markets/exchangerate-metal-chart?cn[]=XAG">Срібло(XAG)</a>: ${payload.XAG.rate} грн за 1 тройську унцію
    </p>
  `;
});


