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
  $newProject.find('#project-image').attr('src', this.projectImg);
  $newProject.find('.project-body').html(this.body);
  $newProject.removeClass('template');

  return $newProject;
};

portfolio.sort(function(a,b) {
  return(new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

projects.forEach(function(ele) {
  portfolio.push(new Sites(ele));
});

portfolio.forEach(function(a){
  $('#portfolio').append(a.toHtml());
});

$(function() {
  $('.arrow i').on('click', function(e) {
    e.preventDefault();
    $(e.target).parent().parent().find('.project-body').slideToggle('slow');
    $(this).toggleClass('up');
  });
});

// $(document).ready(function() {
//   $('i').click(function() {
//     $('.project-body').slideToggle('slow');
//   });
// });