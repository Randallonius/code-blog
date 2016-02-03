(function (module) {

  function Sites (opts) {
    this.title = opts.title;  //Title of the project
    this.category = opts.category;  //Category of project HTML, CSS, JavaScript or combo
    this.publishedOn = opts.publishedOn;  //Date that project was completed
    this.body = opts.body; //Short summary of project listed from drop down tab
    this.projectUrl = opts.projectUrl; //Web link to project Page
    this.projectImg = opts.projectImg; //Screen capture of project front page
  }
//populating the portfolio template
// Sites.prototype.toHtml = function() {
//   var appTemplate = $('#dynamic-content').html();
//   var compiledTemplate = Handlebars.compile(appTemplate);
//   var html = compiledTemplate(this);
//
//   return html;
// };
  Sites.all = [];

  Sites.prototype.toHtml = function() {
    var template = Handlebars.compile($('#dynamic-content').text());

    return template(this);
  };

  Sites.loadAll = function(rawData) {
    rawData.sort(function(a,b) {
      return(new Date(b.publishedOn)) - (new Date(a.publishedOn));
    });

    Sites.all = rawData.map(function(ele) {
      return new Sites(ele);
    });
  };
//writing the template to the #portfolio section
// portfolio.forEach(function(a){
//   $('#portfolio').append(a.toHtml());
// });

  Sites.fetchAll = function() {
    if (localStorage.rawData) {
      Sites.loadAll(JSON.parse(localStorage.rawData));
      portfolioView.initIndexPage();
    } else {
      $.get('data/portfolioEntries.json', function(data) {
        Sites.loadAll(data);
        var dataString = JSON.stringify(data);
        localStorage.setItem('rawData', dataString);
        projectView.initIndexPage();
      });
    }
  };
  function scrollToAnchor(aid){
    var aTag = $('a[name= '+ aid +']');
    $('html, body').animate({scrollTop: aTag.offset().top}, 'slow');
  }
//Adding moving directional arrow to show project body and to hide it.
  $(function() {
    $('.arrow i').on('click', function(e) {
      e.preventDefault();
      $(e.target).parent().parent().find('.project-body').slideToggle('slow');
      $(this).toggleClass('up');
      scrollToAnchor('bottom');
    });
  });

  module.Sites = Sites;
}) (window);
