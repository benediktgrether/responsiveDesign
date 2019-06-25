

   $( document ).ready(function() {

       var $horizontal = $('.section1 .col-xl-6 #hori ');
       var $horizontal2 = $('#hori2 ');

       var position = $horizontal.position();
       var percentLeft = (position.left / $(window).width() * 100*2);
       //if ($(window).width()>1024) {
           $(window).scroll(function () {
        /*   $horizontal.addClass('handlinks');
           $horizontal2.addClass('handrechts');
            circle.addClass('circleanimate');

       });

       });*/

      /*  var s = $(this).scrollTop(),
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


        }
        if (position3<=0){*/

               setTimeout( function() { $('#hori svg path').each(function (i, value) {
                   $(this).attr('class', 'cls-' + i)
               });
                   },500);


               setTimeout( function() { $('#hori2 svg path').each(function (i, value) {
                   $(this).attr('class', 'cls-' + i)
               });
               },500);
               $('#heart').fadeIn(1000);

            $horizontal.css({
                'left': '0',
                'transition': '500ms all',

            });




            $horizontal2.css({
                'right': '0',
                'transition': '500ms all',
            });

        });



    });
//}



     //  });


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

   /* nachladen*/
   var addEvent = function(obj, type, callback, eventReturn)
   {
       if(obj == null || typeof obj === 'undefined')
           return;

       if(obj.addEventListener)
           obj.addEventListener(type, callback, eventReturn ? true : false);
       else if(obj.attachEvent)
           obj.attachEvent("on" + type, callback);
       else
           obj["on" + type] = callback;
   };

   /**
    * see http://nimius.net/de/blog/artikel/javascript-debounce-throttle/
    * debouncing, executes the function if there was no new event in $wait milliseconds
    * @param func
    * @param wait
    * @param scope
    * @returns {Function}
    */
   var debounce = function(func, wait, scope) {
       var timeout;
       return function() {
           var context = scope || this, args = arguments;
           var later = function() {
               timeout = null;
               func.apply(context, args);
           };
           clearTimeout(timeout);
           timeout = setTimeout(later, wait);
       };
   };

   var hasClass = function(ele, className) {
       return (' ' + ele.className + ' ').indexOf(' ' + className + ' ') !== -1;
   };

   var watch = function(evt)
   {
       /*
        Older browser versions may return evt.srcElement
        Newer browser versions should return evt.currentTarget
        */
       // var dimensions = {
       //     height: (evt.srcElement || evt.currentTarget).innerHeight,
       //     width: (evt.srcElement || evt.currentTarget).innerWidth
       // };

       var aFocuhilaImg = document.getElementsByClassName('b-lazy');
       if (aFocuhilaImg.length > 0) {
           for(var i = 0; i < aFocuhilaImg.length; i++) {
               var parent = aFocuhilaImg[i].parentNode;
               /**
                * Add height from parent .focuhila element
                */
               if (hasClass(parent, 'focuhila')) {
                   if (hive_cfg_typoscript_sStage == "prototype" || hive_cfg_typoscript_sStage == "development") {
                       console.info("Parent height: " + parent.clientHeight);
                   }
                   aFocuhilaImg[i].style.height = parent.clientHeight + "px";
               }
           }
       }


   };

   var hive_thm_blazy_addons__interval = setInterval(function () {
       if (typeof hive_cfg_typoscript__windowLoad == 'undefined') {
       } else {
           clearInterval(hive_thm_blazy_addons__interval);
           if (hive_cfg_typoscript_sStage == "prototype" || hive_cfg_typoscript_sStage == "development") {
               console.info('blazy addons initialize');
           }

           /**
            * Set height of images on resize and orientation change
            */
           addEvent(window, 'resize', debounce(watch,1000), true);
           addEvent(window, 'orientationchange', debounce(watch,1000), true);

       }
   }, 250);