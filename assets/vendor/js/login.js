const passwordInput = document.getElementById('password');
const emailOrUsernameInput = document.getElementById('email');
const btn = document.getElementById("formBtn");


btn.addEventListener("click", (e) => {
    e.preventDefault();
    
    const password =passwordInput.value.trim()
    const userData = JSON.parse(localStorage.getItem('user'));
    const emailOrUsername =emailOrUsernameInput.value.trim()

console.log(password, emailOrUsername,  userData,"ne")

if (userData) {
    if (
        (userData.username === emailOrUsername || userData.email === emailOrUsername) &&
        userData.password === password
    ) {
        console.log(1)
        alert('Login successful!');
        document.cookie = `emailorusername=${encodeURIComponent(emailOrUsername)}; path=/; max-age=86400;`;
        document.cookie = `password=${encodeURIComponent(password)}; path=/; max-age=86400;`;
        localStorage.setItem('userStatus', 'loggedIn');
        actionUrl  = 'app-ecommerce-product-list.html';
    } else {
        console.log(2)
        alert('Invalid username/email or password.');
    }
} else {
    console.log(3)
    alert('No user found. Please sign up.');
    console
    actionUrl = 'auth-login-cover.html';
}

document.getElementById('formAuthentication').action = actionUrl;

if (actionUrl) {
    window.location.href = actionUrl;
}

});



// const form = document.getElementById('formAuthentication');
        

//     form.addEventListener('', function (e) {
//     e.preventDefault(); 

    // const password =passwordInput.value.trim()
    // const emailOrUsername =emailOrUsernameInput.value.trim()

    // const userData = JSON.parse(localStorage.getItem('user'));
//     let actionUrl = '';

// });