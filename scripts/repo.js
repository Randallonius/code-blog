(function(module) {
  var repos = {};

  repos.all = [];

  repos.repoRequest = function(callback) {
    $.ajax({
      url: 'https://api.github.com/users/randallonius/repos',
      type: 'GET',
      headers: {'Authorization': 'token ' + githubToken},
      success: function(data) {
        repos.all = data;
        callback();
      }
    });
  };
})(window);
