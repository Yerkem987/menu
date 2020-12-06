$("#basy").mouseover(function () {
	$(this).css({'color': 'rgb(255, 151, 211)'})
});
$("#basy").mouseout(function () {
	$(this).css({'color': 'rgb(255, 151, 211)'})
});
$("#products").mouseover(function () {
	$(this).css({'color': 'rgb(255, 151, 211)'})
});
$("#products").mouseout(function () {
	$(this).css({'color': 'black'})
});
$("#delivery").mouseover(function () {
	$(this).css({'color': 'rgb(255, 151, 211)'})
});
$("#delivery").mouseout(function () {
	$(this).css({'color': 'black'})
});
$("#about_us").mouseover(function () {
	$(this).css({'color': 'rgb(255, 151, 211)'})
});
$("#about_us").mouseout(function () {
	$(this).css({'color': 'black'})
});


function big(element){
	element.style.fontSize="59px";
}
function small(element){
	element.style.fontSize="40px";
}
$(document).ready(function(){
  $("#flip").click(function(){
    $("#adress").slideToggle("slow");
  });
});