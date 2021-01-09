<?php
$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "loginpage";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
    // $sql = "INSERT INTO test ( username, name)
    //     VALUES ('".$_POST['username']."', '".$_POST['name']."')";
        $sql = "INSERT INTO signuppage (names, ages, dobs, email_id, phones, passwords, password1)VALUES ('".$_POST['names']."','".$_POST['ages']."','".$_POST['dobs']."','".$_POST['emailid']."','".$_POST['phones']."','".$_POST['passwords']."','".$_POST['password1']."')";
        if (mysqli_query($conn,$sql)) {
        $data = array("data" => "You Data added successfully");
            echo json_encode($data);
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
        if ($_POST["passwords"] === $_POST["password1"]) 
        { 
            $uppercase = preg_match('@[A-Z]@', $passwords);
            $lowercase = preg_match('@[a-z]@', $passwords);
            $number    = preg_match('@[0-9]@', $passwords);
            $specialChars = preg_match('@[^\w]@', $passwords);

            if(!$uppercase || !$lowercase || !$number || !$specialChars || strlen($passwords) < 8) {
                echo 'Password should be at least 8 characters in length and should include at least one upper case letter, one number, and one special character.';
            }else{
                echo 'Strong password.';
            }
        } else {
            die('password dont match');
        }

?>