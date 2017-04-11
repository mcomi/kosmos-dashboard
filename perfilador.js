function goStep2(){
  $('#step1').hide();
  $('#step2').removeClass('hide');
  $('.step1 .step').removeClass('active');
  $('.step1').removeClass('active');
  $('#menuComprobante').removeClass('active');
  $('#menuComprobante').addClass('completed');
  $('.step1').addClass('completed');
  $('.step2').addClass('active');
  $('.step2 .step').addClass('active');
  $('#menuPersonales').addClass('active');
}

function goStep3(){
  $('#step2').hide();
  $('#step3').removeClass('hide');
  $('#menuPersonales').removeClass('active');
  $('#menuVivienda').addClass('active');
}

function goStep4(){
  $('#step3').hide();
  $('#step4').removeClass('hide');
  $('#menuVivienda').removeClass('active');
  $('#menuFamilia').addClass('active');
}

function goStep5(){
  $('#step4').hide();
  $('#step5').removeClass('hide');
  $('#menuFamilia').removeClass('active');
  $('#menuEmpleo').addClass('active');
}

function verOfertas () {
  $('#step5').hide()
  $('#ofertas').removeClass('hide');
  $('.step2').removeClass('active');
  $('.step2').addClass('completed');
  $('.step3').addClass('active');
  $('#menuEmpleo').removeClass('active');
}


$(".mat-input").focus(function(){
  $(this).parent().addClass("is-active is-completed");
});

$(".mat-input").focusout(function(){
  if($(this).val() === "")
    $(this).parent().removeClass("is-completed");
  $(this).parent().removeClass("is-active");
})
