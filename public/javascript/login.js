async function loginFormHandler(event) {
    event.preventDefault();
    console.log('click');

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            console.log(response.statusText);
            alert('Wrong Username or Password');
        }
    }else {
        alert('fill all fields')
    }
}

async function signupFormHandler(event) {
    event.preventDefault();
    console.log(event);

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const first_name = document.querySelector('#firstname-signup').value.trim();
    const last_name = document.querySelector('#lastname-signup').value.trim();
    const address = document.querySelector('#address-signup').value.trim();

    if (first_name && last_name && address && username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password,
                first_name,
                last_name,
                address
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            console.log(response.statusText);
        }
    } else {
        alert('fill all fields')
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);