$(document).ready(function () {
    $('#skills').waypoint(function() {
        $('.progress .progress-bar').progressbar();       
    });

    // Back to top button
    var btt = $('.back-to-top');
    btt.click(function(e) {
        e.preventDefault();
        $('html,body').animate({
          scrollTop: 0
        }, 2000);
    });
    $(window).on('scroll', function() {
        var self = $(this),
            height = self.height(),
            top = self.scrollTop();

        if (top > height) {
          if (!btt.is(':visible')) {
            btt.show();
          }
        } else {
          btt.hide();
        }
    });
    


    // Smooth scroll
    $(document).on("scroll", onScroll);

    // Highlight active navigation link
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 700, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

         

});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#navbar-main ul li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#navbar-main ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

