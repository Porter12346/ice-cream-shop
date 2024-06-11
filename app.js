
const iceCream = [{
    name: 'Cookie Dough',
    price: 2.25,
    quantity: 0
},
{
    name: 'Vanilla',
    price: 1.50,
    quantity: 0
},
{
    name: 'Chocolate',
    price: 2.00,
    quantity: 0
}]

const toppings = [{
    name: 'Sprinkles',
    quantity: 0,
    price: .25
},
{
    name: 'Chocolate Chips',
    price: .25,
    quantity: 0
},
{
    name: 'Cookie Chunks',
    price: .5,
    quantity: 0
}]

const cones = [{
    name: 'Sugar Cone',
    quantity: 0,
    price: .5
},
{
    name: 'Waffle Cone',
    price: 1.0,
    quantity: 0
},
{
    name: 'Cake Cone',
    price: .25,
    quantity: 0
}]

const menu = [iceCream, toppings, cones]

function addToOrder(itemName) {
    for (let i = 0; i < menu.length; i++) {
        let subMenu = menu[i]
        console.log(`checking: ${subMenu}`)
        for (let j = 0; j < subMenu.length; j++) {
            let itemIndex = subMenu[j]
            console.log(`checking: ${itemIndex}`)
            console.log(`itemName: ${itemIndex.name}`)
            if (itemIndex.name == itemName) {
                console.log(`item added ${itemIndex.name}`)
                itemIndex.quantity++
                drawOrder()
                return
            }
        }
    }
    console.log(`item not found: ${itemName}`)
}

function calculateTotal() {
    let total = 0
    for (let i = 0; i < menu.length; i++) {
        let subMenu = menu[i]
        for (let j = 0; j < subMenu.length; j++) {
            let itemIndex = subMenu[j]
            total += itemIndex.price * itemIndex.quantity
        }
    }
    return (total);
}

function drawOrder() {
    let order = 0
    let orderTab = document.getElementById('order-list')
    let htmlInject = ''
    for (let i = 0; i < menu.length; i++) {
        let subMenu = menu[i]
        for (let j = 0; j < subMenu.length; j++) {
            let itemIndex = subMenu[j]
            if (itemIndex.quantity > 0) {
                let itemTotal = itemIndex.price * itemIndex.quantity
                htmlInject += `<p>Item: ${itemIndex.name} Quantity: ${itemIndex.quantity} Total: $${itemTotal.toFixed(2)}</p>`
                console.log(htmlInject)
            }
        }
    }
    orderTab.innerHTML = htmlInject
    let total = calculateTotal()
    orderTab.innerHTML += `<p class="fs-5 fw-bold">Total: $${total.toFixed(2)}</p>`

}