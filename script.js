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
    const closeIcon = document.getElementById('close-icon');
    const navbar = document.getElementById('navbar');

    closeIcon.style.display = 'none';

    menuIcon.addEventListener('click', function() {
        menuIcon.classList.toggle('active');
        if (navbar.style.display === 'block') {
            navbar.style.display = 'none';
            closeIcon.style.display = 'none'; 
            menuIcon.style.display = 'block'; 
        } else {
            navbar.style.display = 'block';
            closeIcon.style.display = 'block'; 
            menuIcon.style.display = 'none'; 
        }
    });

    closeIcon.addEventListener('click', function() {
        navbar.style.display = 'none';
        closeIcon.style.display = 'none'; 
        menuIcon.style.display = 'block'; 
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 767.98) {
            navbar.style.display = 'flex';
            if (menuIcon.classList.contains('active')) {
                closeIcon.style.display = 'block'; 
                menuIcon.style.display = 'none'; 
            } else {
                closeIcon.style.display = 'none'; 
                menuIcon.style.display = 'block'; 
            }
        } else {
            navbar.style.display = 'none'; 
            closeIcon.style.display = 'none'; 
            menuIcon.style.display = 'block'; 
        }
    });
});


