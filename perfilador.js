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

function goConsultaBuro () {
  $('#step5').hide()
  $('#buro').removeClass('hide');
  $('.step2').removeClass('active');
  $('.step2 .step').removeClass('active');
  $('.step2').addClass('completed');
  $('.step3').addClass('active');
  $('.step3 .step').addClass('active');
  $('#menuEmpleo').removeClass('active');
}

function verOfertas () {
  $('#buro').hide()
  $('#ofertas').removeClass('hide');
  $('.step3').addClass('completed');
}

$('#cliente_si').on('click', function() {
  $('#inputNoCliente').removeClass('hide');
});



$(".mat-input").focus(function(){
  $(this).parent().addClass("is-active is-completed");
});

$(".mat-input").focusout(function(){
  if($(this).val() === "")
    $(this).parent().removeClass("is-completed");
  $(this).parent().removeClass("is-active");
})

var swiper = new Swiper('.swiper-container');

$( "select" )
  .each(function() {
    $( this ).change(function(){
      $(this).parent().parent().siblings().css({'display':'block'})
    });
  });

  var Conclave=(function(){
      var buArr =[],arlen;
      var numPromos = $('.promo').length;
      return {
        init:function(){
          this.addCN();this.clickReg();
        },
        addCN:function(){
          var buarr=["holder_bu_awayL2","holder_bu_awayL1","holder_bu_center","holder_bu_awayR1","holder_bu_awayR2"];
          for(var i=1;i<=buarr.length;++i){
            $("#bu"+i).removeClass().addClass(buarr[i-1]+" holder_bu");
          }
          if(buarr.length<numPromos){
            var dif = numPromos-buarr.length;
            var firstIndexBeforeArrLength = buarr.length+1;
            while (dif>0) {
                $("#bu"+firstIndexBeforeArrLength).removeClass().addClass("holder_bu_no_display holder_bu");
                dif--;
                firstIndexBeforeArrLength++;
            }
          }
        },
        clickReg:function(){
          $(".holder_bu").each(function(){
            buArr.push($(this).attr('class'))
          });
          arlen=buArr.length;
          for(var i=0;i<arlen;++i){
            buArr[i]=buArr[i].replace(" holder_bu","")
          };
          $(".holder_bu").click(function(buid){
            var me=this,id=this.id||buid,joId=$("#"+id),joCN=joId.attr("class").replace(" holder_bu","");
            var cpos=buArr.indexOf(joCN),mpos=buArr.indexOf("holder_bu_center");
            if(cpos!=mpos){
                tomove=cpos>mpos?arlen-cpos+mpos:mpos-cpos;
                while(tomove){
                  var t=buArr.shift();
                  buArr.push(t);
                  for(var i=1;i<=arlen;++i){
                    $("#bu"+i).removeClass().addClass(buArr[i-1]+" holder_bu");
                  }
                  --tomove;
                }
            }
          })
        },
        auto:function(){
          for(i=1;i<=1;++i){
            $(".holder_bu").delay(4000).trigger('click',"bu"+i).delay(4000);
            console.log("called");
          }
        }
      };
  })();

  $(document).ready(function(){
      window['conclave']=Conclave;
      Conclave.init();

      $(".js-example-basic-single").select2({
          placeholder: "Tipo de comprobante de Ingresos"
      });

      $('.flat-slider').slider({
        orientation: 'horizontal',
        range:       false,
        value:      100
      });
  })
