window.onscroll = function showHeader () { 
    let header = document.querySelector('.navbar')
    let header_2 = document.querySelector(".navbar-2")

    if (window.pageYOffset > 85) {
        header.classList.add('navbar_fixed');
        header_2.classList.add('navbar-2_fixed');
    } else {
        header.classList.remove('navbar_fixed');
        header_2.classList.remove('navbar-2_fixed');
    }
}
