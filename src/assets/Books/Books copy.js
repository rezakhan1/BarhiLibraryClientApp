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
      var fs = require('fs');
       // donarForm
       document.getElementById('donarForm').elements['name'].value;
      alert($('donar').elements[0].value)
      alert($('#txtDonarName').text(),$('#email').text(),$('#txtMobNumber').text()) 
     return false; 
    }) 
    $('#btnShowBook').click(function(){
    
});
    
});

function loadBooks(){
  $.getJSON("Books.json", function( data ) {  
    console.log(data); //json output 
    debugger; 
    data.books.forEach((element ,i)=> {
      var trHTML='';
            trHTML += '<tr> <th scope="row">'+i+'</th><td>' + element.title + 
                      '</td><td>' + element.author + '</td><td>' + element.language + 
                      '</td><td>' + element.categories + '</td></tr>';         
           $('#tblBooks').append(trHTML);
    });
});     
}

