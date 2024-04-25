function copyEmail() {
    const email = document.getElementById('email').innerText;
    const textarea = document.createElement('textarea');
    textarea.value = email;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Email copié : ' + email); 
}

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');

    menuIcon.addEventListener('click', function() {
        if (navbar.style.display === 'block') {
            navbar.style.display = 'none';
        } else {
            navbar.style.display = 'block';
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 767.98) {
            navbar.style.display = 'flex'; 
        } else if (!menuIcon.contains(event.target)) {
            navbar.style.display = 'none'; 
        }
    });
});
