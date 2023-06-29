


// When the user scrolls down 50px from the top of the document, slide down the navbar

window.onscroll = function () { scrollFunction() };

function scrollFunction() {

  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("topnav").style.background = "linear-gradient(to top, rgba(255, 255, 255, 0.61), rgba(255, 255, 255, 0.79), rgba(255, 255, 255, 0.97))";
  } else {
    document.getElementById("topnav").style.backgroundColor = "#ffffff";
  }


}




var $animation_elements = $('.animate__animated');
var $anime_element1 = $('.anime_1');
var $anime_element2 = $('.anime_2');
var $anime_element3 = $('.anime_3');
var $window = $(window);






// scroll animation for view 1
function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function () {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}


// The second animation function

function check_if_anime_one() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($anime_element1, function () {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view1');
    } else {
      $element.removeClass('in-view1');
    }
  });
}


// The third animation function

function check_if_anime_two() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($anime_element2, function () {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view2');
    } else {
      $element.removeClass('in-view2');
    } 
  });
}

// The fourth animation function

function check_if_anime_three() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($anime_element3, function () {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view3');
    } else {
      $element.removeClass('in-view3');
    }
  });
}


$window.on('scroll resize', check_if_in_view);
$window.on('scroll resize', check_if_anime_one);
$window.on('scroll resize', check_if_anime_two);
$window.on('scroll resize', check_if_anime_three);
$window.trigger('scroll');