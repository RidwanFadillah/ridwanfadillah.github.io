const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const url = e.target.action;
    const formData = new FormData(contactForm);

    fetch(url, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
    }).then(() => {
        //url
        window.location.href = "/thankyou.html";
    })
    .catch((e) => alert("Error occured"));
})