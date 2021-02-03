// Standard document.ready() function ensures the page has loaded and is ready to be manipulated
$(window).ready(function(){
    // Parallax
    $(function(){ 
        //Cache the window object
        var $window = $(window);
    
        //Paralax background effect
        $('section[data-type="background"]').each(function(){
    
            var $bgobj = $(this); //assigning the object
    
            $window.scroll(function(){
               //scroll the background at var speed
                //the yPos is a negative value because we're scrolling it UP!
    
                var yPos = -($window.scrollTop() / $bgobj.data('speed'));
    
                //Put togheter our final background position
                var coords = '50% ' + yPos + 'px';
    
                //Move the background
                $bgobj.css({backgroundPosition: coords});
            }); //end window scroll
        })
    })
});