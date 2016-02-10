(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    repos.repoRequest(repoView.index);
    $('main > section').hide();
    $('#about').show();

    repos.requestRepos(repoView.index);
  };

  module.aboutController = aboutController;
}) (window);
