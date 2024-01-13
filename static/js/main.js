document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('close-button');
    const navClasses =document.getElementById('nav').classList;

  
    mobileMenuButton.addEventListener('click', function () {
        navClasses.toggle("close");
    });
    mobileMenuClose.addEventListener('click', function () {
        navClasses.toggle("close");
      });




  var submitButton = document.getElementById('submit-btn');

  submitButton.addEventListener('click', function () {

    var formData = new FormData(document.getElementById('contact-form'));

    // Envoyer les données en utilisant AJAX
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'mail.php', true);

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 400) {
        // La requête a réussi
        document.getElementById('result').innerHTML = xhr.responseText;
      } else {
        // La requête a échoué
        document.getElementById('result').innerHTML = 'Une erreur s\'est produite lors de l\'envoi du formulaire.';
      }
    };

    xhr.onerror = function () {
      // Gérer les erreurs ici
      document.getElementById('result').innerHTML = 'Une erreur s\'est produite lors de l\'envoi du formulaire.';
    };

    xhr.send(formData);
  });
  });