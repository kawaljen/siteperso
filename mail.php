<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
            define('MAIL_DESTINATAIRE','persiliealexandra@gmail.com');
            define('MAIL_SUJET','mail du site perso');

            $mail_entete = "MIME-Version: 1.0". "\r\n";
            $mail_entete .= "From: webmaster@education-environnement-64.org" . "\r\n";
            $mail_entete .= 'Content-Type: text/HTML; charset=utf-8' . "\r\n";
            $mail_entete .= 'Content-Transfer-Encoding: 8bit'. "\n\r\n";


            // préparation du corps du mail
            $mail_corps = htmlspecialchars($_POST["name"]).' '.htmlspecialchars($_POST["email"]).' '.htmlspecialchars($_POST["message"]);


            // envoi du mail
            if (mail(MAIL_DESTINATAIRE,MAIL_SUJET,$mail_corps,$mail_entete)) {
            //Le mail est bien expédié
            echo '<p><b>// Le mail a bien &eacute;t&eacute; exp&eacute;di&eacute; !</p>';
            } else {
            //Le mail n'a pas été expédié
            echo '<p>!! Une erreur est survenue lors de l\'envoi du formulaire par email, vous pouvez m\'<ahref="mailto:persiliealexandra@gmail.com"> envoyer un mail directement</a></p></p>';
            }

} else {
    // Si la requête n'est pas de type POST, renvoyer une erreur
    http_response_code(405);
    echo "Méthode non autorisée.";
}
?>