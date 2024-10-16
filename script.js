document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('message').innerText = data;
        document.getElementById('registerForm').reset(); // Reset form
    })
    .catch(error => {
        document.getElementById('message').innerText = 'Error: ' + error.message;
    });
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => {
        if (response.ok) {
            return response.text();
        } else {
            throw new Error('Invalid credentials');
        }
    })
    .then(data => {
        document.getElementById('message').innerText = data;
        document.getElementById('loginForm').reset(); // Reset form
    })
    .catch(error => {
        document.getElementById('message').innerText = 'Error: ' + error.message;
    });
});
