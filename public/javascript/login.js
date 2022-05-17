function signupFormHandler(event) {
    event.preventDefault();
    console.log(event);
    const username = document.querySelector('#username-signup').value;
    const email = document.querySelector('#email-signup').value;
    const password = document.querySelector('#password-signup').value;
    const first_name = document.querySelector('#firstname-signup').value;
    const last_name = document.querySelector('#lastname-signup').value;
    const address = document.querySelector('#address-signup').value;

    if (first_name && last_name && address && username && email && password ) {
        const response = fetch('/api/users', {
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

      // check the response status
        if (response.ok) {
            console.log('success');
        } else {
            alert(response.statusText);
        }
    } else {
        alert('fill all fields')
    }
}


function loginFormHandler(event) {
    event.preventDefault();
    console.log('click');

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = fetch('/api/users/login', {
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
            alert(response.statusText);
        }
    }
}

