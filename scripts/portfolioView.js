(function (module) {

  var portfolioView = {};

  // portfolioView.handleMainMenu = function() {
  //   $('.menu').on('click', '.tab', function(e) { //places an on-click within the menu class that targets the tab class
  //     $('.tab-content').hide(); //hides all of the selectors that have tab-content class
  //     $('#' + $(this).data('content')).fadeIn(); //fades-in the data-content of the # attri that was clicked
  //   });
  //
  //   $('.menu .tab:first').click(); //first tab "clicks" when page loads
  // };

  Sites.htmlFrom = function (sites) {
    return sites.map(function(a){
      return a.toHtml();
    });
  };
//TODO: Check if #portfolio is populated if it is do nothing if not populate. Possible if else statement.
  portfolioView.initIndexPage = function() {
    var sites = Sites.htmlFrom(Sites.all);
    $('#portfolio').empty();
    $('#portfolio').append(sites);

  };





    // portfolioView.handleMainMenu();



  module.portfolioView = portfolioView;
}) (window);
