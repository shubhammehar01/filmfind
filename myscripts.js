function fun(){
    alert("This website is created by Shubham Mehra")
  }
  function func(){
    alert("No contact available")
  }
  
    $(document).ready(function () {
  
      var apikey = "1286211d"
      $("#movieform").submit(function (event) {
        event.preventDefault()
  
        var movie = $("#movie").val();
        var result = ""
  
        var url = "http://www.omdbapi.com/?apikey=" + apikey
  
        $.ajax({
          method: 'GET',
          url: url + "&t=" + movie,
          success: function (data) {
            console.log(data)
            result += '<div class="c1"><img src=' + data.Poster + ' /></div>'
            result += '<div class="c2"> Title and Year : ' + data.Title + '  ( ' + data.Year + ' ) ' + ' </div>'
            result += '<div class="c3"> Rating : ' + data.imdbRating + '</div>'
            result += '<div class="c4">Language : ' + data.Language + '</div>'
            result += '<div class="c5">Stars : ' + data.Actors + ' </div>'
            result += '<div class="c6">BoxOffice : ' + data.BoxOffice + '</div>'
            result += '<div class="c7"> Movie Type : ' + data.Genre + '</div>'
            result += '<div class="c8">Release Date : ' + data.Released + ' </div>'
            result += '<div class="c9">Duration : ' + data.Runtime + ' </div>'
            result += '<div class="c10">Story : ' + data.Plot + '</div>'
  
            $("#result").html(result)
          }
        })
      })
    })