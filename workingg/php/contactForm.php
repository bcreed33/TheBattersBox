<?php
//php script for the contact form
if(isset($_POST['datepicker']) && isset($_POST['name']) && isset ($_POST['email']) && isset($_POST['message'])  ){
$dateP=$_POST['datepicker'];
$name=$_POST['name'];
$email=$_POST['email'];
$message= $_POST['message'];
$to='bcreedesign@gmail.com';
$from = $email;
$subject = 'Message from The Batter Box - Portfolio';
$message= 'Date Interested In:'.$dateP.'-  Name:'.$name.'-  Email:'.$email.'-  Message'.$message;
$headers= "From: $from\n";
$headers= "MIME-Version:1.0\n";
$headers=" Content-type: text/html; charset=iso-8859-1\n";
if(mail($to, $subject, $message, $headers) ){
echo "success";
}else{
echo "the server failed failed to send the messgae";
}
}
?>
