

   $( document ).ready(function() {

       var $horizontal = $('.section1 .col-xl-6 #hori ');
       var $horizontal2 = $('#hori2 ');
       var circle= $('.circle');

       var position = $horizontal.position();
       var percentLeft = (position.left / $(window).width() * 100*2);
       //if ($(window).width()>1024) {
           $(window).scroll(function () {
        /*   $horizontal.addClass('handlinks');
           $horizontal2.addClass('handrechts');
            circle.addClass('circleanimate');

           $('#heart').fadeIn(1000);
       });

       });*/

        var s = $(this).scrollTop(),
            d = $(document).height(),
            c = $(this).height();
        scrollPercent = (s / (d - c))*5;


//               var position1 = (scrollPercent * ( - percentLeft)+'%');
        //var position1 = ($(document).width() * (  scrollPercent-percentLeft)+'%');
        var position1= parseFloat(scrollPercent*($(window).width() - percentLeft)+'%');
        var position2 =  percentLeft+position1 +'%';
        var position3 =parseFloat( percentLeft+position1 +'%');

        if (position3>=0) {
            $('#heart').fadeIn(1000);

            $('#hori svg path').each(function (i, value){

                        $(this).attr('class', 'cls-'+i);

                });


            $('#hori2 svg path').each(function (i, value){

                    $(this).attr('class', 'cls-' + i);

            });
        }
        if (position3<=0){

            $horizontal.css({
                'left': position2,
            });




            $horizontal2.css({
                'right': position2,

            });

        }



    });
//}



       });


/*

   $.fn.followTo = function (pos) {
       var $this = this,
           $window = $(window);

       $window.scroll(function (e) {
           if ($window.scrollTop() > pos) {
               $this.css({
                   position: 'absolute',
                   top: pos
               });
           } else {
               $this.css({
                   position: 'fixed',
                   top: 0
               });
           }
       });
   };

   $('.glitch,.glitch2').followTo(250);*/


   /*smooth scroll*/
   $(function(){
       $('.smooth').stop().click(function(){
           if (location.pathname.replace(/^\//,'')=== this.pathname.replace(/^\//,'') && location.hostname===this.hostname){
               var UD_HASH= this.hash;
               var UD_ZIEL=$(this.hash);
               if(UD_ZIEL.length){
                   var UD_ABSTAND_TOP = UD_ZIEL.offset().top;
                   UD_ABSTAND_TOP= UD_ABSTAND_TOP;
                   $('html,body').animate({scrollTop:UD_ABSTAND_TOP},1000,function () {
                       window.location.hash=UD_HASH;
                   });
                   return false;
               }
           }
       });
   });



   $(document).ready(function() {

       var UD_MENU_ELEMENTS = $('.smooth');

       var UD_AKTUELL = 0;
       var UD_OBJEKT_TOP;

       var UD_OBJEKT = $(UD_MENU_ELEMENTS[0]);
       UD_OBJEKT.addClass('ud_menu_aktive');

       $(window).scroll(function(){

           for(var i = 0; i < UD_MENU_ELEMENTS.length;i++) {

               var UD_LINK = $(UD_MENU_ELEMENTS[i]).attr('href');

               if($(UD_LINK).length){
                   UD_OBJEKT_TOP = $(UD_LINK).offset().top;
               }

               var UD_SCROLL_TOP = $(window).scrollTop();
               var UD_DIF = Math.abs(UD_SCROLL_TOP - UD_OBJEKT_TOP);

               if(i === 0) {
                   UD_AKTUELL = UD_DIF;
                   UD_OBJEKT = $(UD_MENU_ELEMENTS[i]);
                   $('.smooth').removeClass('ud_menu_aktive');
                   UD_OBJEKT.addClass('ud_menu_aktive');
               } else {
                   if(UD_DIF < UD_AKTUELL || UD_DIF === UD_AKTUELL) {
                       UD_AKTUELL = UD_DIF;
                       UD_OBJEKT = $(UD_MENU_ELEMENTS[i]);
                       $('  .smooth').removeClass('ud_menu_aktive');
                       UD_OBJEKT.addClass('ud_menu_aktive');
                   }
               }
           }
       });

   });

