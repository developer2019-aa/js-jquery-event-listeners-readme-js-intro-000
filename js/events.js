function getIt() {
  $('p').on ('click', function() {
    alert('Hey!');
  })
};

function pressIt() {
  $(document).on('keydown', function(key) {
    if(key.which === 71) {
        alert ('G was pressed!');
    }
  })
};


$(document).ready(function(){

// call functions here

});
