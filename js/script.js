$(function() {
  var ulLi = $('nav ul > li'),
      fa = $('nav ul > li:last-of-type a .fa');
  
   $('nav ul').append('<ol></ol>');
  
   $('nav').each(function() {
     for (var i=0; i <= ulLi.length - 3; i++) {
       $('nav ul > ol').append("<li>"+ i +"</li>");
       $('nav ul > ol > li').eq(i).html(ulLi.eq(i).html());
     }
  });

  $('nav ul > li:last-of-type').on('click', function() {
    $('#bars_close').toggleClass('open');
    fa.toggleClass('fa-bars');
    fa.toggleClass('fa-times');
    $(this).parent().children('ol').slideToggle(500);
  });
});




  // subscription_box 

  $(document).ready(function(){
    $('.subscribe_box_container').waypoint(function(direction){
      $('.subscribe_box_container').addClass('animated fadeInUp')
    }, {
      offset: '530px'
    }) 
  });


  // about section

  $(document).ready(function(){
    $('.about_content_left').waypoint(function(direction){
      $('.about_content_left').addClass('animated fadeInLeft')
    }, {
      offset: '400px'
    }) 
  });

  $(document).ready(function(){
    $('.about_content_right').waypoint(function(direction){
      $('.about_content_right').addClass('animated fadeInRight')
    }, {
      offset: '400px'
    }) 
  });


  // features 

  $(document).ready(function(){
    $('#feature_1').waypoint(function(direction){
      $('#feature_1').addClass('animated fadeInRight')
    }, {
      offset: '400px'
    }) 
  });

  $(document).ready(function(){
    $('#feature_2').waypoint(function(direction){
      $('#feature_2').addClass('animated fadeInRight')
    }, {
      offset: '400px'
    }) 
  });

  $(document).ready(function(){
    $('#feature_3').waypoint(function(direction){
      $('#feature_3').addClass('animated fadeInRight')
    }, {
      offset: '400px'
    }) 
  });


  // Articles

  $(document).ready(function(){
    $('#article_left').waypoint(function(direction){
      $('#article_left').addClass('animated fadeInLeft')
    }, {
      offset: '400px'
    }) 
  });

  $(document).ready(function(){
    $('#article_right').waypoint(function(direction){
      $('#article_right').addClass('animated fadeInRight')
    }, {
      offset: '400px'
    }) 
  });


  // Grow

  $(document).ready(function(){
    $('#grow').waypoint(function(direction){
      $('#grow').addClass('animated fadeInUp')
    }, {
      offset: '400px'
    }) 
  });


  // Law Samples

  $(document).ready(function(){
    $('#law_samples').waypoint(function(direction){
      $('#law_samples').addClass('animated fadeInLeft')
    }, {
      offset: '400px'
    }) 
  });

  // design in a day samples

  $(document).ready(function(){
    $('#design_samples').waypoint(function(direction){
      $('#design_samples').addClass('animated fadeIn')
    }, {
      offset: '400px'
    }) 
  });



$('.img-parallax').each(function(){
  var img = $(this);
  var imgParent = $(this).parent();
  function parallaxImg () {
    var speed = img.data('speed');
    var imgY = imgParent.offset().top;
    var winY = $(this).scrollTop();
    var winH = $(this).height();
    var parentH = imgParent.innerHeight();


    // The next pixel to show on screen      
    var winBottom = winY + winH;

    // If block is shown on screen
    if (winBottom > imgY && winY < imgY + parentH) {
      // Number of pixels shown after block appear
      var imgBottom = ((winBottom - imgY) * speed);
      console.log('imgBottom'+imgBottom);
      // Max number of pixels until block disappear
      var imgTop = winH + parentH;
      console.log('imgTop'+imgTop);
      // Porcentage between start showing until disappearing
      var imgPercent = ((imgBottom / imgTop) * 200) + (50 - (speed * 100));
    }
    img.css({
      top: imgPercent + '%',
      transform: 'translate(-1%, -' + imgPercent + '%)'
    });
  }
  $(document).on({
    scroll: function () {
      parallaxImg();
    }, ready: function () {
      parallaxImg();
    }
  });
});


//  nav mega
 $('#nav_mega').mouseenter(function(){
     $('.mega_nav_container').show(); 
  });
 $('.mega_nav_container').mouseenter(function(){
     $('.mega_nav_container').show(); 
  });
 $('.mega_nav_container').mouseleave(function(){
     $('.mega_nav_container').hide(); 
  });
  $('#nav_mega').mouseleave(function(){
     $('.mega_nav_container').hide(); 
  });



  //  search mega

  $('#search_mega').mouseenter(function(){
     $('.mega_search_container').show(); 
  });
  $('.mega_search_container').mouseenter(function(){
     $('.mega_search_container').show(); 
  });
  $('.mega_search_container').mouseleave(function(){
     $('.mega_search_container').hide(); 
  });
  $('#search_mega').mouseleave(function(){
     $('.mega_search_container').hide(); 
  });