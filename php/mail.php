<?php

//Script Foreach
$c = true;

// For POST method only!

$project_name = "arseniy.com";
$admin_email = "arseniy.cimbris@gmail.com";
// почтовый ящик, привязанный к хостингу
$email_from = "pivnenkowebdev@pivnenko-anton.pro";
$message = "";

// Serialize form fields - that filled-in by User
foreach ($_POST as $key => $value) {
	if ($value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" && $key != "email_from") {
		$message .= "
		" . (($c = !$c) ? '<tr>' : '<tr style="background-color: #f8f8f8;">') . "
		<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
	</tr>
	";
	}
}

// Create message text for sending on email
$message = "<table style='width: 100%;'>$message</table>";



// Adjusting text encoding
function adopt($text)
{
	return '=?UTF-8?B?' . base64_encode($text) . '?=';
}

$form_subject = 'Заявка с сайта Portfolio';

// Preparing header
$headers = "MIME-Version: 1.0" . PHP_EOL .
	"Content-Type: text/html; charset=utf-8" . PHP_EOL .
	'From: ' . adopt($project_name) . ' <' . $email_from . '>' . PHP_EOL .
	'Reply-To: ' . $admin_email . '' . PHP_EOL;

// Sending email to admin
mail($admin_email, $form_subject, $message, $headers, $email_from);



echo "<div class='success'>
		<h2>Application accepted!<br>
		We will contact you as soon as possible!
		</h2>
	  </div> ";
