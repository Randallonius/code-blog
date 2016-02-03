(function(module) {
  var portfolioController = {};

  portfolioController.index = function() {
    Sites.fetchAll(portfolioView.initIndexPage);

    $('main > section').hide();
  };

  module.portfolioController = portfolioController;
}) (window);
