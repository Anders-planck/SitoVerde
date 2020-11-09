$('.about_link a').click(function(e) {
    e.preventDefault()
    if ($(this).hasClass('active')) return false
    let actif = $('.about_link a.active').attr('href')
    $('.about_link a.active').removeClass('active')

    $(this).addClass('active')
    $($(this).attr('href')).show('slow');
    // $($(this).attr('href')).addClass('visible')
    // $(actif).removeClass('visible')
    $(actif).hide('slow');
})