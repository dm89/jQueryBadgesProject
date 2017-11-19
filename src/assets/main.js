$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/2448501.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      console.log(response);
      addCourses(response.courses.completed);
    }
  });

  function addCourses(data) {
  	$badges = $('#badges');

  	data.forEach(function(course) {

  		$div = $('<div />', {
  			'class' : 'course'
  		}).appendTo($badges);

  		$('<h3 />', {
  			'text': course.title
  		}).appendTo($div);

  		$('<img />', {
  			'src': course.badge
  		}).appendTo($div);

  		$('<a />', {
  			'href': course.url,
  			'target': '_blank',
  			'class': 'btn btn-primary',
  			'text': 'See Course'
  		}).appendTo($div);
  	});
  }


});
