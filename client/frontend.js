let checkoutForm = document.getElementById('checkout-form')
let checkoutIsb = document.getElementById('checkout-isb')
let checkoutName = document.getElementById('checkout-name')
let checkoutLcId = document.getElementById('checkout-lc-id')
let returnForm = document.getElementById('return-form')
let returnIsb = document.getElementById('return-isb')
let returnName = document.getElementById('return-name')
let returnLcId = document.getElementById('return-lc-id')

checkoutForm.addEventListener('submit', (event) => {
    event.preventDefault()

    let maBod = {
        isb: +checkoutIsb.value,
        name: checkoutName.value,
        lcId: checkoutLcId.value
    }

    axios.post('http://localhost:9001/checkout', maBod).then((result) => {
        console.log(result.data)
    })
})

returnForm.addEventListener('submit', (event) => {
    event.preventDefault()
    axios.post('http://localhost:9001/return').then(() => {})
})
