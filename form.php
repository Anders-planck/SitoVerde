<?php

//echo json_encode($_POST);


$success = 0;

$msg = "erreur survenue dans (index.php)";


if (!empty($_POST['speudo']) and !empty($_POST['email']) and !empty($_POST['password'])) {

    $speudo = htmlspecialchars(strip_tags($_POST['speudo']));
    $email = htmlspecialchars(strip_tags($_POST['email']));
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    if (strlen($speudo) < 10) {

        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {

            if (strlen($_POST['password']) > 7) {
                //inserer l utilisateur dans la base de donner  
                $success = 1;
                $msg = " ";
            } else {
                $msg = "password trop court";
            }
        } else {
            $msg = "veullez renseignez une email chi fontione";
        }
    } else {
        $msg = "veullez entrer un speudo de moin de 10 carratere";
    }
} else {
    $msg = "veullez renseignez tout les champs";
}

$result = ["success" => $success, "msg" => $msg];

echo json_encode($result);
