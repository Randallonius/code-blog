(function(module) {
  var portfolioController = {};

  portfolioController.index = function() {
    Sites.fetchAll(portfolioView.initIndexPage);

    $('main > section').hide();
    $('#portfolio').show();

  };

  module.portfolioController = portfolioController;
}) (window);
