var imp = impress();
imp.init();
hljs.initHighlightingOnLoad();
var nbSlides = $(".step.slide").length;
var showPopover = new URL(window.location).searchParams.get("showPopover");

var rootElement = document.getElementById( "impress" );

rootElement.addEventListener( "impress:stepenter", function(event) {

  var currentStep = event.target;
  var numeroSlide = $(currentStep).attr("data-nb");
  var percentageSlide = Math.round(numeroSlide * 100 / nbSlides);
  $("#progress").attr("style", "width: " + percentageSlide + "%;");
  $("#progress").attr("aria-valuenow", percentageSlide);

  if(showPopover === "true") {
  	setTimeout(function(){
	  	$('#' + currentStep.id + ' [data-toggle="popover"]').popover('show', {
		    container: 'body'
		  });
	}, 1000);
  } else {
  	$('#' + currentStep.id + ' [data-toggle="popover"]').popover({
	    container: 'body'
	  });
  }

  
});

rootElement.addEventListener( "impress:stepleave", function(event) {

  var currentStep = event.target;
  $('#' + currentStep.id + ' [data-toggle="popover"]').popover('dispose');
});

$(window).on('hashchange', function(e){
    //Gérer dropdown-toggle
    var origEvent = e.originalEvent;
    oldHash = origEvent.oldURL.substring(origEvent.oldURL.lastIndexOf("#")).replace("/","");
    newHash = origEvent.newURL.substring(origEvent.newURL.lastIndexOf("#")).replace("/","");
    $('#my-navbar li a').removeClass("active");
    $('#my-navbar li a[href="' + newHash.substring(0,newHash.indexOf("-")) + '"]').addClass("active");
    $('#my-navbar li a[href="' + newHash.substring(0,newHash.lastIndexOf("-")) + '"]').addClass("active");
    $('#my-navbar li a[href="' + newHash + '"]').addClass("active");
    
});

$(window).on('contextmenu', function(e){
  e.preventDefault();
  imp.prev();
});

$(window).on('click', function(e){
  if( (e.which == 2) ) {
      e.preventDefault();
      imp.next();
   }
});

$(window).on('click', function(e){
  if( (e.which == 2) ) {
      e.preventDefault();
      imp.next();
   }
});

$("#ArrayIndexOutOfBoundsException").click(function(event) {
  $(event.target).toggleClass('btn-primary').toggleClass('btn-success');
  $("#ArrayIndexOutOfBoundsException > i").toggleClass('fa-times-circle ');
  $("#ArrayIndexOutOfBoundsException > i").toggleClass('fa-check-circle');

  $("#ArrayIndexOutOfBoundsExceptionText").toggle();
  $("#ArrayIndexOutOfBoundsExceptionErreur").toggleClass('text-danger').toggleClass('text-success')
  var html = $("#ArrayIndexOutOfBoundsExceptionErreur").html();
  $("#ArrayIndexOutOfBoundsExceptionErreur").html(html === '<span class="hljs-number">6</span>' ? 'tableauFibonacci.length' : '<span class="hljs-number">6</span>');
});

$("#ArithmeticException").click(function(event) {
  $(event.target).toggleClass('btn-primary').toggleClass('btn-success');
  $("#ArithmeticException > i").toggleClass('fa-times-circle ');
  $("#ArithmeticException > i").toggleClass('fa-check-circle');

  $("#ArithmeticExceptionText").toggle();
  $("#ArithmeticExceptionErreur").toggle();
  $("#ArithmeticExceptionOK").toggle();
});