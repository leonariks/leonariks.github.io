<?php
if (isset ($_POST['contactFF'])) {
  $to = "selyutin85@gmail.com";
  $from = "selyutin85@gmail.com";
  $subject = "LinguaLab Новый пользователь".$_SERVER['HTTP_REFERER'];
  $message = "Имя пользователя: ".$_POST['nameFF']."\nEmail пользователя ".$_POST['contactFF']."\nАдрес сайта: ".$_SERVER['HTTP_REFERER'];
 
  $boundary = md5(date('r', time()));
  $filesize = '';
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "From: " . $from . "\r\n";
  $headers .= "Reply-To: " . $from . "\r\n";
  $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
  $message="
Content-Type: multipart/mixed; boundary=\"$boundary\"
 
--$boundary
Content-Type: text/plain; charset=\"utf-8\"
Content-Transfer-Encoding: 7bit
 
$message";
     if(is_uploaded_file($_FILES['fileFF']['tmp_name'])) {
         $attachment = chunk_split(base64_encode(file_get_contents($_FILES['fileFF']['tmp_name'])));
         $filename = $_FILES['fileFF']['name'];
         $filetype = $_FILES['fileFF']['type'];
         $filesize = $_FILES['fileFF']['size'];
         $message.="
 
--$boundary
Content-Type: \"$filetype\"; name=\"$filename\"
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename=\"$filename\"
 
$attachment";
     }
   $message.="
--$boundary--";
 
  if ($filesize < 10000000) { // проверка на общий размер всех файлов. Многие почтовые сервисы не принимают вложения больше 10 МБ
    mail($to, $subject, $message, $headers);
    echo $_POST['nameFF'].', Ваше письмо отправлено, спасибо!';
  } else {
    echo 'Что-то пошло не так!';
  }
}
?>
