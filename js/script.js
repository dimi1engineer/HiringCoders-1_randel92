(function (){
  'use strict';

  var nome = document.getElementById('nome');
  var email = document.getElementById('email');
  
  document.getElementById('cadastrar').addEventListener('click', function() {
    localStorage.setItem('nome', nome.value);
    localStorage.setItem('email', email.value);

  }); 
}());
