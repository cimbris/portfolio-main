window.addEventListener('DOMContentLoaded',()=>{

    gsap.registerPlugin(ScrollTrigger)
const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.header__mobile-menu-list');

// анимация на карточки
const btn = document.querySelectorAll('.my-skills .context-btn');
const blur = document.querySelector('.background-blur');

btn.forEach(function(item){
    item.addEventListener('click', function(event){
        document.body.classList.add('active')
        event.target.closest('.skill-card').classList.add('active');
        blur.classList.add('active');
    })
})


let krestik = document.querySelectorAll('.skill-card__krestik');

krestik.forEach(function(k){
    k.addEventListener('click',function(krest){
        document.body.classList.remove('active')
        krest.target.closest('.skill-card').classList.remove('active');
        blur.classList.remove('active');

    })
})

burger.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('active');
    burger.classList.toggle('active');
    document.body.classList.toggle('active')
})

mobileMenu.querySelectorAll('.header__menu-link').forEach((item)=>{
    item.addEventListener('click',() => {
        mobileMenu.classList.remove('active');
        burger.classList.remove('active');
        document.body.classList.remove('active')
    })
})

// smooth scroll to anchor-link
document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const id = link.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.header').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// -----------------review-slider
// init slider
$('.reviews-slider').slick({
    draggable: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    speed: 1000,
    infinite: true,
    touchThreshold: 100,
    prevArrow:
    `
    <svg width="31" height="60" viewBox="0 0 31 60" fill="none" xmlns="http://www.w3.org/2000/svg" class='slick-prev'>
    <path d="M30.5 60L30.5 45L15.5 30L30.5 15V0L0.5 30L30.5 60Z" fill="#2EAF84"/>
    </svg>
    `,
    nextArrow:
    `
    <svg width="31" height="60" viewBox="0 0 31 60" fill="none" xmlns="http://www.w3.org/2000/svg" class='slick-next'>
    <path d="M0.5 0V15L15.5 30L0.5 45V60L30.5 30L0.5 0Z" fill="#2EAF84"/>
    </svg>
    `,
    })

// -----------------green sock
const animation = gsap.timeline({});

    animation.from('.autor',{
        x:-500,
        duration: 1,
        opacity: 0,
    })
})

gsap.from('.project-card',{
    stagger:0.3,
    opacity:0,
    y:200,
    scrollTrigger:{
        // markers:true,
        trigger: '#works',
        start: 'top 80%',
        end:'30% 60%',
        scrub:1.5,
        toggleActions: 'play none none reverse',
    }
})

gsap.from('.skill-card',{
    stagger:0.3,
    opacity:0,
    y:200,
    scrollTrigger:{
        // markers:true,
        trigger: '#skills',
        start: 'top 80%',
        end:'30% 45%',
        scrub:1.5,
        toggleActions: 'play none none reverse',
    }
})

// ------------parallax
function parallax(){

    if (window.innerWidth >= 1245) {

        const preview = document.querySelector('.preview');
        const initialX = preview.offsetLeft + preview.offsetWidth / 2;
        const initialY = preview.offsetTop + preview.offsetHeight / 2;
    
        document.addEventListener('mousemove', function(event) {

        const mouseX = event.clientX - initialX;
        const mouseY = event.clientY - initialY;
    
        // preview
        gsap.to(
            '#parallax', 
            {
        x: mouseX * 0.04, 
        y: mouseY * 0.04, 
        ease: 'power2.out' 
        },)

        gsap.to(
            '#parallax-second', 
            {
            x: mouseX * 0.03, 
            y: mouseY * 0.03, 
            ease: 'power2.out' 
            },)
        
        gsap.to(
                    '#avatar-parallax', 
                    {
                    x: mouseX * 0.02, 
                    y: mouseY * 0.02, 
                    ease: 'power2.out' 
                    },)
        gsap.to(
            '#parallax-code', 
            {
            x: mouseX * 0.01, 
            y: mouseY * 0.01, 
            ease: 'power2.out' 
            },)

        }
        
    )
    }
}

parallax()
