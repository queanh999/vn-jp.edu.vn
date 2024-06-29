<!-- <?php

require './PHPMailer-master/src/Exception.php';
require './PHPMailer-master/src/PHPMailer.php';
require './PHPMailer-master/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

if ($_POST) {
    try {
        $mail = new PHPMailer(true);

        // Cấu hình SMTP
        $mail->SMTPDebug = 0; // Tắt debug khi không cần thiết
        $mail->isSMTP();
        $mail->SMTPAuth = true;
        $mail->Host = "smtp.gmail.com";
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;
        $mail->Username = "dmon70998@gmail.com";
        $mail->Password = "fllg sjue mayg fpwb";
        $mail->setFrom("dmon70998@gmail.com", "VN-JP Landing Pages");
        $mail->addAddress("cie@ptit.edu.vn", "CIE-PTIT");
        $mail->isHTML(true);

        // Kiểm tra hành động gửi thông tin cá nhân
        if (isset($_POST['action']) && $_POST['action'] == 'Submit Info') {
            $name = $_POST["name"];
            $phone = $_POST["phone"];
            $message = "Name: $name<br>Phone: $phone";
            $subject = "Register for consultation";
            $mail->Body = $message;
            $mail->Subject = $subject;
            $mail->send();
            // echo "Information has been sent";
        }

        // Kiểm tra hành động gửi email
        if (isset($_POST['action']) && $_POST['action'] == 'Submit Email') {
            $userEmail = $_POST["user_email"];
            $message = "User Email: $userEmail";
            $subject = "New Email Registration";
            $mail->Body = $message;
            $mail->Subject = $subject;
            $mail->send();
            // echo "Email has been sent";
        }

    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}

?> -->