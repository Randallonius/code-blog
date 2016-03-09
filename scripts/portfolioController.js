(function(module) {
  var portfolioController = {};

  portfolioController.index = function(ctx) {
    portfolioView.initIndexPage(ctx.sites);

    $('main > section').hide();
    $('#portfolio').show();

  };

  portfolioController.loadData = function(ctx, next) {
    Sites.fetchAll(function(sites) {
      ctx.sites = sites;
      next();
    });
  };


  module.portfolioController = portfolioController;
}) (window);
