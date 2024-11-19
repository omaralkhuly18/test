document.getElementById('logoutLink').addEventListener('click', function (e) {
    e.preventDefault(); 

    localStorage.setItem('userStatus', 'loggedOut');

    document.cookie = "username=; path=/; max-age=0;";
    document.cookie = "email=; path=/; max-age=0;";
    document.cookie = "password=; path=/; max-age=0;";

    console.log('Cookies and Local Storage cleared.');

    alert('You have been logged out!');

    window.location.href = "auth-login-cover.html";
});