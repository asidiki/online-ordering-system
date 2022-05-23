
const orderSubmit = document.querySelector('#submit-order')


async function getUserInfo(userEmail) {
    console.log(userEmail)
    const response = await fetch(`api/users/${userEmail}`, {
        method: 'GET',
        headers: {'content-Type': 'application/json'}
    });
    if (!response.ok) {
        alert('Email not found in our system. Please sign up using the "Login" link before ordering.')
    }
    console.log('response:' + JSON.stringify(response)) 
}

function generateDriver() {
    return Math.floor(Math.random() * (5-1+1) + 1)
} 

async function postOrderInfo() {
    const order_info = sessionStorage.getItem('shoppingCart')
    const userEmail = document.querySelector('#userEmail').value.trim()
    driverID = generateDriver()
    const userID = await getUserInfo(userEmail)

    console.log('order_info:' + order_info)
    console.log('userEmail:' + userEmail)
    console.log('Driver:' + driverID)

    if (order_info & driverID & userID) {
        const response = await fetch('api/orders', {
            method: 'POST',
            body: JSON.stringify({
                user_id,
                order_info,
                driverID
            }),
            headers: { 'Content-Type': 'application/json'}
        });
        if (response.ok) {
            alert('Thank you for your order, it has been received. We will be in contact if anything is needed.')
        }
        else {
            alert(response.statusText)
        }
    }   
}


orderSubmit.addEventListener('submit', postOrderInfo());