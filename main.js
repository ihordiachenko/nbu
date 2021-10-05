const el = document.querySelector("[name=quantity]")
if (el) {
    const quantity = el.getAttribute('max')
    const props = document.querySelector('.prop_brief')
    const quantityLabel = document.createElement('div')
    quantityLabel.setAttribute('class', 'prop')
    quantityLabel.setAttribute('style', 'width: 100%;')
    quantityLabel.innerHTML = `<span>В наявності:</span>&nbsp;${quantity} шт`
    props.prepend(quantityLabel)
}
