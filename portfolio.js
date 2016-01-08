var portfolio = [];

function Sites (opts) {
  this.title = opts.title;  //Title of the project
  this.category = opts.category;  //Category of project HTML, CSS, JavaScript or combo
  this.publishedOn = opts.publishedOn;  //Date that project was completed
  this.body = opts.body; //Short summary of project listed from drop down tab
  this.projectUrl = opts.projectUrl; //Web link to project Page
  this.projectImg = opts.projectImg; //Screen capture of project front page
}

Sites.prototype.toHtml = function() {
  var $newProject = $('div.template').clone();
  $newProject.find('h1').text(this.title);
  $newProject.find('a').attr('href', this.projectUrl);
  $newProject.find('.project-body').html(this.body);

  $newProject.removeClass('template');
  return $newProject;
};

projects.forEach(function(ele) {
  portfolio.push(new Sites(ele));
});

portfolio.forEach(function(a){
  $('#portfolio').append(a.toHtml());
});
