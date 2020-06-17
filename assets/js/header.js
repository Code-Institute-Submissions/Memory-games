const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')


    const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if(scrollPos > 10){
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})

    
    burger.addEventListener('click',()=>{
        //toggle nav
        nav.classList.toggle('nav-active');

        ///animate links
    navLinks.forEach((link, index)=> {
        if(link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
        }
    });
    //burger animation
    burger.classList.toggle('burger-toggle')
    });
};

navSlide()

//turn into larger call function

//const app = ()=>{
//    navSlide();
//    scroll()
//}