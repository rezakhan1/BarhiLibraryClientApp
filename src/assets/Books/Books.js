//Add Book
$(document).ready(function() {   
  loadBooks();
     $('#addBook').click(function(){
    $('#bookModal').modal('show');
    })
    $('#btnCloseBookModl').click(function(){
      $('#bookModal').modal('hide');
    })


    $('#btnDonateBook').click(function(){
      // const fs = require('fs');
      // var fs = require('fs');
      // var data = [{'ssss':"ssss"}]
      // readJsonFile(data, function(data)
      // {
      //     console.log(data[0].home.icon); // f015
      // });
      //  // donarForm
      //  document.getElementById('donarForm').elements['name'].value;
      // alert($('donar').elements[0].value)
      alert($('#txtDonarName').text(),$('#email').text(),$('#txtMobNumber').text()) 
     return false; 
    }) 
    $('#btnShowBook').click(function(){
    
    });
    $('#btnSeachBook').click(function(){
      $('#tblBooks tbody').empty();
     var a=$('#txtSearchBook').val();
     $.get('https://barhilibrarayapi.azurewebsites.net/books/'+a, function(data, status){
      console.log(data); //json output 
      debugger; 
       
      data.forEach((element ,i)=> {
        var trHTML='';
              trHTML += '<tr> <th scope="row">'+i+'</th><td>' + element.title + 
                        '</td><td>' + element.author + '</td><td>' + element.language + 
                        '</td><td>' + element.categories + '</td></tr>';         
             $('#tblBooks').append(trHTML);
      });
    }); 

    })
});


function loadBooks(){

  $.get('https://barhilibrarayapi.azurewebsites.net/books', function(data, status){
    console.log(data); //json output 
    debugger; 
     
    data.forEach((element ,i)=> {
      var trHTML='';
            trHTML += '<tr> <th scope="row">'+i+'</th><td>' + element.title + 
                      '</td><td>' + element.author + '</td><td>' + element.language + 
                      '</td><td>' + element.categories + '</td></tr>';         
           $('#tblBooks').append(trHTML);
    });
  }); 
}


function addData(){
  $.ajax({
    url: "https://localhost:44381/api/webinars",
    type: 'POST',
    headers: {
        contentType: "application/json",
    },
    body: JSON.stringify(body),
    success: function (data) {
        console.log(data);
    },
    failure: function (err) {
        console.log(err);
    }

});
}
