
  $(document).ready(function() {
            var current1, next1, prev;
            var opacity;
            $(".next").click(function() {
                current1 = $(this).parent();
                next1 = $(this).parent().next();
                $("#progressbar li").eq($("fieldset").index(next1)).addClass("active");
                next1.show();
                current1.animate({
                    opacity: 0
                }, {
                    step: function(now) {
                        opacity = 1 - now;
                        current1.css({
                            'display': 'none',
                            'position': 'relative'
                        });
                        next1.css({
                            'opacity': opacity
                        });
                    },
                    duration: 600
                });
            });
            $(".previous").click(function() {
                current1 = $(this).parent();
                prev = $(this).parent().prev();
                $("#progressbar li").eq($("fieldset").index(current)).removeClass("active");
                prev.show();
                current.animate({
                    opacity: 0
                }, {
                    step: function(now) {
                        opacity = 1 - now;
                        current.css({
                            'display': 'none',
                            'position': 'relative'
                        });
                        prev.css({
                            'opacity': opacity
                        });
                    },
                    duration: 600
                });
            });
            $(".radio-group .radio").click(function() {
                $(this).parent().find('.radio').removeClass('selected');
                $(this).addClass('selected');
            });
            $(".submit").click(function() {
                return false
            })
        });
