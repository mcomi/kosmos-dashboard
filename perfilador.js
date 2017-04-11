function goStep2(){
  $('#step1').hide();
  $('#step2').removeClass('hide');
  $('.step1').removeClass('active');
  $('.step1').addClass('completed');
  $('.step2').addClass('active');
}

function goStep3(){
  $('#step2').hide();
  $('#step3').removeClass('hide');
  $('.step2').removeClass('active');
  $('.step2').addClass('completed');
  $('.step3').addClass('active');
}


$(".mat-input").focus(function(){
  $(this).parent().addClass("is-active is-completed");
});

$(".mat-input").focusout(function(){
  if($(this).val() === "")
    $(this).parent().removeClass("is-completed");
  $(this).parent().removeClass("is-active");
})
