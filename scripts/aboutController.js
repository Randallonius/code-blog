(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    repos.repoRequest(repoView.index);
    $('main > section').hide();
    $('#about').show();
  };

  module.aboutController = aboutController;
}) (window);
