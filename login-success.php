

<?php $deny = array("111.111.111", "222.222.222", "333.333.333");
if (in_array ($_SERVER['REMOTE_ADDR'], $deny)) {
   header("location: https://Access-Denied.webteamone.repl.co");
   exit();
} ?>
<?php
$line = date('Y-m-d H:i:s') . " - $_SERVER[REMOTE_ADDR]";
file_put_contents('visitors.log', $line . PHP_EOL, FILE_APPEND);
?>