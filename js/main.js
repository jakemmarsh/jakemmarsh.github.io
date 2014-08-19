var tooltip = $('.tooltip');

var enterIcon = function() {
    var text = $(this).data('destination');

    tooltip.html(text);
    tooltip.fadeIn();
};

var exitIcon = function() {
    tooltip.html('');
    tooltip.fadeOut();
};

$('.icon').hover(enterIcon, exitIcon);