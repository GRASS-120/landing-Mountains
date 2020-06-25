function scrollTo(el){
    window.scroll({
        left: 0,
        top: el.offsetTop - 100,
        behavior: "smooth"
    })
};

let topp = document.querySelector('.header__logo')
let journal = document.querySelector('#header__link-journal')
let work = document.querySelector('#header__link-work')
let travel = document.querySelector('#header__link-travel')
let gallery = document.querySelector('#header__link-gallery')
let clients = document.querySelector('#header__link-clients')

let top_block = document.querySelector('.header')
let journal_block = document.querySelector('.journal')
let work_block = document.querySelector('.scheme')
let travel_block = document.querySelector('.travel')
let gallery_block = document.querySelector('.gallery')
let clients_block = document.querySelector('.clients')

topp.addEventListener('click', () => {scrollTo(top_block)});
journal.addEventListener('click', () => {scrollTo(journal_block)});
work.addEventListener('click', () => {scrollTo(work_block)});
travel.addEventListener('click', () => {scrollTo(travel_block)});
gallery.addEventListener('click', () => {scrollTo(gallery_block)});
clients.addEventListener('click', () => {scrollTo(clients_block)});