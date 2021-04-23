;(function ($) {
  // Need to replace mobile nav functionality
  $('.navbar-toggler').click(function () {
    $('body').toggleClass('nav-act')
  })

  $('.drop-close').click(function () {
    $(this).parent().parent().removeClass('act')
  })

  // need to replicate Quiz functionality, grecaptcha submit and custom upload buttons on /borker-training
  $('#step-two-submit').click(function (e) {
    e.preventDefault()
    if (!$('#step-two-form')[0].checkValidity()) {
      $('#step-two-invalid-feedback').fadeIn()
    } else {
      $('#step-two-invalid-feedback').hide()
      $('#quiz-section-three').fadeIn()
      $('html,body').animate(
        {
          scrollTop: $('#quiz-section-three').offset().top - 10,
        },
        500
      )
    }
  })

  $('.quiz-cbox input').click(function () {
    el = $(this)
    markAnswer(el)
  })

  const answers = {
    'question-1': '2',
    'question-2': '$60',
    'question-3': 'true',
    'question-4': 'true',
    'question-5': 'Silver & Fit',
    'question-6': '$999',
    'question-7': '$1000',
    'question-8': '24',
    'question-9': '$0',
    'question-10': '$125',
  }
  const answered = {
    'marked-1': 0,
    'marked-2': 0,
    'marked-3': 0,
    'marked-4': 0,
    'marked-5': 0,
    'marked-6': 0,
    'marked-7': 0,
    'marked-8': 0,
    'marked-9': 0,
    'marked-10': 0,
  }
  const ua = window.navigator.userAgent
  const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i)
  const webkit = !!ua.match(/WebKit/i)
  const iOSSafari = iOS && webkit && !ua.match(/CriOS/i)

  function markAnswer(el) {
    el.closest('.quiz-item').find('.answer').hide()
    let question = el[0].name
    let total = 0
    let marked = question.replace('question', 'marked')
    if (el.val() == answers[question]) {
      answered[marked] = 1
      el.closest('li').append(
        '<em class="correct answer">Correct! Move on to the next question.</em>'
      )
    } else {
      answered[marked] = 0
      el.closest('li').append(
        '<em class="wrong answer">Sorry, that answer is not correct, please try again by clicking on a different answer.</em>'
      )
    }

    for (var property in answered) {
      total += answered[property]
    }

    if (total == Object.keys(answered).length) {
      $('#final-submit-wrap').fadeIn()
      $('html,body').animate(
        {
          scrollTop: $('#final-submit-wrap').offset().top - 100,
        },
        500
      )
    }
  }

  $('#step-two-form').submit(function (e) {
    e.preventDefault()
    // if (grecaptcha.getResponse() == "") {
    //   alert('Please complete the reCAPTCHA checkbox');
    // } else {
    var action = $(this).attr('action')
    var name = $('#frmname').val()
    var agency = $('#frmagency').val()
    var formData = new FormData(this)
    if (
      typeof window.document.documentMode === 'undefined' &&
      typeof iOSSafari === 'undefined'
    ) {
      for (i = 1; i <= Object.keys(answered).length; i++) {
        formData.delete('question-' + i)
      }
    }

    grecaptcha.ready(function () {
      // do request for recaptcha token
      // response is promise with passed token
      grecaptcha
        .execute('6LdOhtYZAAAAAPU83iQ5OZZbnSJoy-oUAJTN8_7b', {
          action: 'contact',
        })
        .then(function (token) {
          // add token to form
          formData.append('g-recaptcha-response', token)
          $.ajax({
            type: 'POST',
            url: action,
            crossDomain: true,
            data: formData,
            dataType: 'json',
            contentType: 'multipart/form-data',
            processData: false,
            contentType: false,
            headers: {
              Accept: 'application/json',
            },
          })
            .done(function () {
              sessionStorage.setItem('crtName', name)
              sessionStorage.setItem('crtAgency', agency)
              window.location.replace('/broker-confirmation')
            })
            .fail(function (error) {
              console.log('An error occurred: ' + error)
            })
        })
    })
    // }
  })

  function customUploadButton() {
    $('.js-button-file-upload-input1').on('change', function () {
      var val = $(this)
        .val()
        .split(/(\\|\/)/g)
        .pop()
      if (val !== '') {
        $('.js-button-file-upload-text1')
          .text(val)
          .parent()
          .removeClass('not-selected1')
      } else {
        $('.js-button-file-upload-text1')
          .text('')
          .parent()
          .addClass('not-selected1')
      }
    })
  }
  customUploadButton()

  function customUploadButton2() {
    $('.js-button-file-upload-input2').on('change', function () {
      var val = $(this)
        .val()
        .split(/(\\|\/)/g)
        .pop()
      if (val !== '') {
        $('.js-button-file-upload-text2')
          .text(val)
          .parent()
          .removeClass('not-selected2')
      } else {
        $('.js-button-file-upload-text2')
          .text('')
          .parent()
          .addClass('not-selected2')
      }
    })
  }
  customUploadButton2()
})(jQuery)
