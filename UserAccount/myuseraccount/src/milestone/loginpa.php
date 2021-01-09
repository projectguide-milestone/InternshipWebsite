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
        $sql = "INSERT INTO homepage (email_id, pass)VALUES ('".$_POST['emailid']."','".$_POST['passwords']."')";
        if (mysqli_query($conn,$sql)) {
        $data = array("data" => "You Data added successfully");
            echo json_encode($data);
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
        if((!isset($_POST['email_id'])) && (!isset($_POST['pass'])))
        {
            echo "0"; 
            exit();
        }

        $myemail = $_POST['email_id'];
        $mypassword= $_POST['pass'];


        $email = "SELECT * FROM signuppage WHERE email_id='$emailid' ";
        $pass = "SELECT * FROM signuppage WHERE pass='$passwords' ";

        $myemail = stripslashes($emailid);
        $mypassword = stripslashes($passwords);

        $res_e = mysqli_query($conn,$emailid);
        $res_p = mysqli_query($conn,$passwords);

        if(mysqli_num_rows($res_p) > 0 && mysqli_num_rows($res_e) > 0)
        {
        echo "1";
        }
        else
        {
        echo "0";
        }


        

?>