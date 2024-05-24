<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $healing_post = htmlspecialchars($_POST['healing_post']);
  
  // Email configuration
  $to = "your-email@example.com"; // Replace with your email address
  $subject = "Healing Post Submission";
  $headers = "From: no-reply@yourdomain.com\r\n";
  $headers .= "Content-type: text/plain; charset=UTF-8\r\n";

  // Send the email
  mail($to, $subject, $healing_post, $headers);
  
  // Redirect to a thank you page (create thank_you.html)
  header("Location: thank_you.html");
  exit();
}
?>
