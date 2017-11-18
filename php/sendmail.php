<?php
	if (isset($_POST['submit'])) {
		$to			 = 'frankvaldez@outlook.com';
		$sendername  = $_POST['name'];
		$sendermail	 = $_POST['email'];
		$subject 	 = 'Correo recibido desde veronicavalenzuela.click';
		$message 	 = $sendername.'('.$sendermail.') ha enviado el siguiente mensaje a veronicavalenzuela.click:'."\r\n".$_POST['msg'];

		if(mail($to, $subject, $message, $header)) {
			echo "<script>alert('Mensaje enviado exitosamente');</script>";
		}
		else {
			echo "<script>alert('Hubo un error al enviar tu mensaje. Por favor verifica que los campos estén correctos');</script>";
		}

		header("Location: http://veronicavalenzuela.click");
		die();
	}
?>