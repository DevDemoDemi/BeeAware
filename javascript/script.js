$(document).ready(function () {

  $('#hexa_bee').hide()
  $('#clickme').hide()
  $('#hexa_bee4').hide()
  $('#clickme2').hide()
  $('#header_bee').hide()
  $('#header_bee2').hide()


  $(window).scroll(function () {

    if ($(document).scrollTop() > 300) {
      $('#logo').hide()
      $('#hexa_bee4').fadeIn(2000)
    } else {
      $('#logo').show()
      $('#hexa_bee4').hide()
    }

    if ($(document).scrollTop() > 700) {
      $('#hexa_bee').fadeIn(2000)
    } else {
      $('#hexa_bee').hide()
    }

    if ($(document).scrollTop() < 900 || $(document).scrollTop() > 1900) {
      $('#header_bee').hide()
    } else {
      $('#header_bee').show()
    }

    if ($(document).scrollTop() < 400 || $(document).scrollTop() > 2700) {
      $('#header_bee2').hide()
    } else {
      $('#header_bee2').show()
    }

  })


  $('#menu').hover(function () {
    $('#overlay').css('display', 'block')
  }, function () {
    $('#overlay').css('display', 'none')
  })

  $('#hexa_bee').hover(function () {
    $(this).css('transform', 'scale(1.1)')
    $('#clickme').show()
  }, function () {
    $(this).css('transform', 'none')
    $('#clickme').hide()
  })

  $('#hexa_bee4').hover(function () {
    $(this).css('transform', 'scale(1.1)')
    $('#clickme2').show()
  }, function () {
    $(this).css('transform', 'none')
    $('#clickme2').hide()
  })

  $('.buzz_img').hover(function () {
    $(this).css('transform', 'scale(1.1)')
  }, function () {
    $(this).css('transform', 'none')
  })


})



function media() {

  let w = window.outerWidth
  document.getElementById('navbar').hidden = true

  if (w <= 1200) {
    let i = 1;

    document.getElementById('menu')
      .addEventListener('click', function () {
        let count = i++
        if (count == 1 || count % 2 == 1) {
          document.getElementById('navbar').hidden = false
        } else {
          document.getElementById('navbar').hidden = true
        }
      })
      
  }

}