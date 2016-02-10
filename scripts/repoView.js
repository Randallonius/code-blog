(function(module) {
  var repoView = {};

  var cache = function () {
    var $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  var render = function(repo) {
    // return $('<p>Im Working!!</p>');
    return $('<li class="repo"><a href=' + repo.html_url + '>' + repo.name + '</a></li>');
  };

  repoView.index = function() {
    cache();

    $('#about ul').append(
      repos.all.map(render)
    );
  };

  module.repoView = repoView;
})(window);
