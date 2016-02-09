(function(module) {
  var repoView = {};

  var cashe = function () {
    var $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  var render = function(repo) {
    return $('<li><a href=' + repo.htmlurl + '>' + repo.name + '</a></li>');
  };

  repoView.index = function() {
    cashe();

    $('#about ul').append(
      repos.all.map(render)
    );
  };

  module.repoView = repoView;
})(window);
