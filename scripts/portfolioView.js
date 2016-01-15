var portfolioView = {};

portfolioView.handleMainMenu = function() {
  $('.menu').on('click', '.tab', function(e) { //places an on-click within the menu class that targets the tab class
    $('.tab-content').hide(); //hides all of the selectors that have tab-content class
    $('#' + $(this).data('content')).fadeIn(); //fades-in the data-content of the # attri that was clicked
  });

  $('.menu .tab:first').click(); //first tab "clicks" when page loads
};

$(document).ready(function() {
  portfolioView.handleMainMenu(); //runs the function upon browser load
});
