  
const showMenu= (toggleId, navId)=>
{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    //valid si variable existe
    if(toggle && nav )
    {
        toggle.addEventListener('click', ()=>
        {
            nav.classList.toggle('show-menu')
        })

    }
}

showMenu('nav-toggle','nav-menu')

/*Retirer le menu mobile*/

const navLink = document.querySelectorAll('.nav_link')

function linkAction()
{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// activer les liens lorsquon scroll

const sections = document.querySelectorAll('.section[id]')

function scrollActive()
{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectH = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;

        sectionId = current.getAttribute('id')
        if(scrollY > screenTop && scrollY <= screenTop + sectH)
        {
            document.querySelector('.nav_menu a[href*=' + sectionId+']').classList.add('active-link')
        }else
        {
            document.querySelector('.nav_menu a[href*=' + sectionId+']').classList.remove('active-link')
        }

    })
}
window.addEventListener('scroll', scrollActive)

/*===== changer arriere plan du header===*/
function scrollHeader()
{
    const nav = document.getElementById('header')
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll',scrollHeader)

function scrollTop()
{
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >= 200) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top')
}

window.addEventListener('scroll',scrollTop)

/*=======DARK THEME=======*/
const themeButton = document.getElementById('theme-button')
const darktheme = 'dark-theme'
const icontheme = 'bx-sun'


// actiation du theme manuellement

themeButton.addEventListener('click', ()=>{
    // ajout et retire le dark theme
    document.body.classList.toggle(darktheme)
    themeButton.classList.toggle(icontheme)
})

/*
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = ()=>document.body.classList.contains(darktheme) ? 'dark' : 'light'
const getCurrentIcon = ()=>themeButton.body.classList.contains(icontheme ) ? 'bx-moon' : 'bx-sun'
*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});
sr.reveal(`.home_data,.home_img,
.about_data,.about_img,.services_content,.menu_content
,.app_data,.app_img,.contact_data,.contact_button,.footer_content`,{
    interal: 200
})