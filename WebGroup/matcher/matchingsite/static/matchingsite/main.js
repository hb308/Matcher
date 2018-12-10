

//AJAX TO FILTER GENDER
 $('#gender').change(function(){
  event.preventDefault();
  var $myForm = $('.form');
    var val = $('#gender option:selected').val()

$.ajax({
      type:"POST",
      url: "/gender/",
      data:{'search_text':val, 'csrfmiddlewaretoken' : $('input[name=csrfmiddlewaretoken]').val()},
      success:handleSuccess,
      error:handleError,
    });


    function handleSuccess(data){
  $('#search-results').html(data)
 $('#page').hide();

} 

function handleError(ThrowError){
            console.log(ThrowError);
        }
});


//AJAX TO FILTER AGE
 $('#age').change(function(){
  event.preventDefault();
  var $myForm = $('.form');
    var val = $('#age option:selected').val()

$.ajax({
      type:"POST",
      url: "/agerange/",
      data:{'age':val, 'csrfmiddlewaretoken' : $('input[name=csrfmiddlewaretoken]').val()},
      success:handleSuccess,
      error:handleError,
    });


    function handleSuccess(data){
  $('#search-results').html(data)
  //$('#gender').prop('selectedIndex',0);
 $('#page').hide();

} 

function handleError(ThrowError){
            console.log(ThrowError);
        }
});

 //AJAX TO FILTER AGE AND GENDER

 $('#but').click(function() {
  event.preventDefault();
  var $myForm = $('.form');
  var age = $('#age option:selected').val()
  var gen = $('#gender option:selected').val()

  $.ajax({
      type:"POST",
      url: "/ageandg/",
      data:{'age':age, 'search_text': gen, 'csrfmiddlewaretoken' : $('input[name=csrfmiddlewaretoken]').val()},
      success:handleSuccess,
      error:handleError,
    });


    function handleSuccess(data){
  $('#search-results').html(data)
  $myForm[0].reset();
 $('#page').hide();

} 

function handleError(ThrowError){
            console.log(ThrowError);
        }  
});

//AJAX TO FILTER BY FIRST NAME
$('#search').keyup(function() {
  event.preventDefault();

  $.ajax({
      type:"POST",
      url: "/search/",
      data:{'search':$('#search').val(), 'csrfmiddlewaretoken' : $('input[name=csrfmiddlewaretoken]').val()},
      success:handleSuccess,
      error:handleError,
    });


    function handleSuccess(data){
  $('#search-results').html(data)
 $('#page').hide();

} 

function handleError(ThrowError){
            console.log(ThrowError);
        }  
});


$(document).ready(function(){
    $(".members").click(function() {
      var id = $(this).parent().attr('id');
      console.log(id)
      $.ajax({
        method:'GET',
        url:"viewprofilepk/" + id,
        success: handleSuccess,
        error:handleError,
    })

        function handleSuccess(data){
          console.log(data.user)
          console.log(data.email)
          console.log(data.gender)
          console.log(data.dob)

          var user = '<div class="row"><div class="col-md-2"><label>User:</label></div><div class="col-md-6"><p>' + data.user + '</p> </div></div>'
          var email = '<div class="row"><div class="col-md-2"><label>Email:</label></div><div class="col-md-6"><p>' + data.email + '</p> </div></div>'
          var gender = '<div class="row"><div class="col-md-2"><label>Gender:</label></div><div class="col-md-6"><p>' + data.gender + '</p> </div></div>'
          var dob = '<div class="row"><div class="col-md-2"><label>D.O.B:</label></div><div class="col-md-6"><p>' + data.dob + '</p> </div></div>'
          $('.modal').modal('show');
          $('.modal-body').html(user + email + gender + dob);
            
        }

        function handleError(ThrowError){
            console.log(ThrowError);
        }
           
  });  
});

