jQuery(document).ready(function ($){

  // dropdown categories*****************************
  if($('.bottom__in--text').length>0){
    $(document).click('',function(e){
    e.preventDefault();
    $(this).closest('.bottom__in--text').find('.menu-dropd').addClass('active');
      // $('.bottom__in--text').removeClass('active')
    });
    $(document).click(function(e){
      var elm = $(e.target);
        if(!elm.closest('.bottom__in--text').length){
          $('.menu-dropd').removeClass('active');
          $('.menu-dropd').find('.dropdown-list')
        };       
    })
  } 
   $('.dropdown-select').click(function(e) {
        $('.menu-dropd').toggleClass('active');
        e.preventDefault();
    });

  // dropdown con trong categories*************************
  if($('.sub-menu-event').length>0){
    $('body').on('click','.sub-menu-event',function (e) {
      e.preventDefault();
      $(this).closest('.sub-menu-event').find('.sub-menu-categories').toggleClass('active');
    });
  }

  // dropdown cart*************************************
  if($('#cart').length>0){
    $(document).on('click','#cart',function(e){
      $(this).closest('#cart').find('.product').addClass('product_active');
      e.preventDefault();
    })
  }
  $(document).click(function(e){
    var elm = $(e.target);
    if(!elm.closest('#cart').length){
      $('.product').removeClass('product_active')
    }
  })
      $('#cart').click(function(e){
          $('.product').toggleClass('product_active');
          e.preventDefault();
      })
  // dropdown gear-click******************************************
  if($('#gear').length>0){
    $(document).on('click','#gear',function(e){
      $(this).closest('gear').find('gear-click').addClass('gear-active');
      e.preventDefault();
    })
  }
  $(document).click(function(e){
    var clgear = $(e.target);
    if(!clgear.closest('#gear').length){
      $('.gear-click').removeClass('gear-active')
    }
  })
  $('#gear').click(function(e){
    $('.gear-click').toggleClass('gear-active');
    e.preventDefault();
  })
  //dropdown sub menu categories
      // $('.click-cosmetic').click(function(e){
      //   $('.cosmetic-in').toggleClass('cosmetic_in-active');
      //   e.preventDefault();
      // })
  // menu nhỏ trong categories ( sub menu)
    if($('.click-cosmetic').length>0){
      $(document).on('click','.click-cosmetic',function(e){
        $(this).closest('.click-cosmetic').find('.cosmetic-in').addClass('cosmetic_in-active');
        e.preventDefault();
      })
    }$(document).click(function(e){
      var elm = $(e.target);
      if(!elm.closest('.click-cosmetic').length){
        $('.cosmetic-in').removeClass('cosmetic_in-active')
      }
    })
        $('.click-cosmetic').click(function(e){
            $('.cosmetic-in').toggleClass('cosmetic_in-active');
            e.preventDefault();
        })  
//topselling item*****************
        $('.arrowleft').click(function(e){
          $('.topselling-item').toggleClass('active');
          e.preventDefault();
        })
        $('.arrowright').click(function(e){
          $('.topselling-item').toggleClass('active');
          e.preventDefault();
        })

        //  $(".arrowleft").click(function(){
        //   $(".topselling-item").slideToggle(1200)
        // });
        // $(".arrowright").click(function(){
        //   $(".topselling-item").slideToggle(1200)
        // });

        $(".arrowleft").click(function(){
          $(".topselling-item").animate({
            width:"0%",
            opacity:0,
          });
        });
        $(".arrowleft").click(function(){
          $(".topselling-item").animate({
            width: "100%",
            opacity:1,
          }, {
            duration: 1500,
            easing: "linear",
            complete: function(){;
            }
          });
        });
        $(".arrowright").click(function(){
          $(".topselling-item").animate({
            width:"0%",
            opacity:0,
          });
        });
        $(".arrowright").click(function(){
          $(".topselling-item").animate({
            width: "100%",
            opacity:1,
          }, {
            duration: 1500,
            easing: "linear",
            complete: function(){;
            }
          });
        });
       
// language**********************
  $(document).click(function () {
    $('.setting-lang, .more_lang').removeClass('active');
});
$('.setting-lang .current_lang').click(function(e){    
    e.stopPropagation();
    $(this).parent('.setting-lang').toggleClass('active');
    
    setTimeout(function(){
      $('.more_lang').toggleClass('active');
    }, 5);
});
translate(tnum);
});
  // 
    if($('.click-cosmetic').length>0){
      $(document).on('click','.click-cosmetic',function(e){
        $(this).closest('.click-cosmetic').find('.cosmetic-in').addClass('cosmetic_in-active');
        e.preventDefault();
      })
    }

//caurosel****************************
  let slidePosition = 0;
  const slides = document.getElementsByClassName('slider-item');
  const totalSlides = slides.length;
  const dots = document.getElementsByClassName('dots');
  const totalDot = dots.length;

  document.getElementById('caurosel_buton-prev').addEventListener("click",function () {
    movetoPrevSlide();
  });
  document.getElementById('caurosel_buton-next').addEventListener("click", function(){
    movetoNextSlide();
  });
  document.getElementById('dot-event').addEventListener("click",function () {
    moveDotSilde();
  });
  document.getElementById('dot-event').addEventListener("click",function(){
    moveDotSilde();
  })
  function updateSlidePosition() {
    for(let slide of slides){
      slide.classList.remove('active');
      slide.classList.add('caurosel-item--hidden');
    }
    for(let dot of dots){
      dot.classList.remove('active');
      dot.classList.add('dots-opacity');
    }
    slides[slidePosition].classList.add('active');
    dots[slidePosition].classList.add('active');
  }
  function moveDotSilde(){
    if(slidePosition === totalDot - 1){
      slidePosition = 0;
    }else{
      slidePosition++;
    }
    updateSlidePosition()
  }
  function movetoNextSlide() {
      if(slidePosition === totalSlides - 1){
          slidePosition = 0;
      }else{
          slidePosition++;
      }
      updateSlidePosition()
  }
  function movetoPrevSlide() {
      if(slidePosition === 0){
          slidePosition = totalSlides - 1;
      }else{
          slidePosition--;
      }
      updateSlidePosition()
  }
  // countdown*****************************************
  if($("#countdown").length>0){
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let birthday = "Sep 30, 2022 00:00:00",
      countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;

          document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          let countdown = document.getElementById("countdown")
          countdown.style.display = "none";
          clearInterval(x);
        }
        //seconds
      }, 0);
    }
  // topselling carousel*******************************
 
  // Phần js của các cỡ màn khác*************
  jQuery(document).ready(function ($){

    $('.fa-caret-square-down').click(function(e){
        $('.suppost').toggleClass('suppostactive');
        e.preventDefault();
        console.log('this')
    })
    $('.header-bottom .fa-ellipsis-h').click(function(e){
      $('.bottom__in--nav').toggleClass('bottom__in--nav-active');
      e.preventDefault();
      console.log('this')
  })
})