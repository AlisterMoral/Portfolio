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
