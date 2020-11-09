let modal = null

const openModal = function(e) {
    e.preventDefault()


    modal = document.querySelector('#' + e.target.getAttribute('class'))

    modal.style.display = null
    modal.removeAttribute('aria-hidden')
    modal.setAttribute('aria-modal', 'true')
    modal.addEventListener('click', closeModal)
    modal.querySelector(".js-modal-close").addEventListener('click', closeModal)
    modal.querySelector(".js-modal-stop").addEventListener('click', stopPropagation)
}

const closeModal = function(e) {
    e.preventDefault()
    if (modal === null) return
    window.setTimeout(function() {
        modal.style.display = 'none'
        modal = null
    }, 500)
    modal.setAttribute('aria-hidden', 'true')
    modal.removeAttribute('aria-modal')
    modal.removeEventListener('click', closeModal)
    modal.querySelector(".js-modal-close").removeEventListener('click', closeModal)
    modal.querySelector(".js-modal-stop").removeEventListener('click', stopPropagation)

}

const stopPropagation = function(e) {
    e.stopPropagation()
}
document.querySelectorAll('.js_modal').forEach(a => {

    a.addEventListener('click', openModal)

})


//onglet menu

$('.menu_burger').click(function(e) {
    e.preventDefault()
    $('.menu_links').toggle('slow')

})

//onglet menu
// Scroll to top button appear
$(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
        $('.sale').fadeIn();
    } else {
        $('.sale').fadeOut();
    }
});

document.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', function(e) {

    })
})


var navbarCollapse = function() {
    if ($(".navbar").offset().top > 100) {
        $(".navbar").addClass("navbar_sup");
        $('.container_navbar').addClass('container_navSup')

    } else {
        $(".navbar").removeClass("navbar_sup");
        $('.container_navbar').removeClass('container_navSup')
    }
};

// Collapse now if page is not at top
navbarCollapse();
// Collapse the navbar when page is scrolled
$(window).scroll(navbarCollapse);