chrome.runtime.onInstalled.addListener(() => {
  console.log('Setting up interval')

  setInterval(async () => {
    const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    const rates = await response.json()
    const message = {name: 'rates', payload: {
        XAU: rates.find(x => x.cc == 'XAU'),
        XAG: rates.find(x => x.cc == 'XAG')
    }}
    chrome.storage.sync.set({ rates: message });
  }, 5000)
})
