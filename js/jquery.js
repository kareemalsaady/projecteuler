function main() {
             $('.hero').hide();
             $('.hero').fadeIn(1000);
             $('.problemtitle').hide();
             $('.problemtitle').fadeIn(1250);
             $('.problemtext').hide();
             $('.problemtext').fadeIn(1500);
             $('.reveal').hide();
             $('.reveal').fadeIn(1500);

             $('.reveal').on('click', function() {
               $(this).next().slideToggle(400);
               $(this).hide();
});

            }
$(document).ready(main);
