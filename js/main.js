 //loading page
 $(window).ready(function () {
	$('.loading-page').fadeOut(400);
	$('body').css('overflow', 'auto')
});
//rangeSlider fire
$('input[type="range"]').rangeslider();
var x=$('#inpDistance').val();
$("#outputDist").text('المساحة بالمتر : '+x);
var y=$('#inpPrice').val();
$("#outputPrice").text('السعر بالجنيه: '+y);
$('input[type="range"]').mousemove(function (e) { 
  // values: e.clientX, e.clientY, e.pageX, e.page
  var x=$('input[type="range"]').val();
  $("#outputDist").text('المساحة بالمتر : '+x);
});
$('#inpPrice').mousemove(function (e) { 
  // values: e.clientX, e.clientY, e.pageX, e.page
  var y=$('#inpPrice').val();
  $("#outputPrice").text('المساحة بالمتر : '+y);
  
});