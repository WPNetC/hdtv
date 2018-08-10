<?php

if (!isset($_GET["c"])) {
    echo "no command";
    die();
}

class ClientTime {
    public $id;
    public $name;
    public $timeBank;
    public $timeUsed;
    public $timeRemaining;
    public $percentLeft;
}

function getTimeRemaining($client){
    return $client->timeBank - $client->timeUsed;
}

function getPercentLeft($client){
     return number_format((100 - (($client->timeUsed / $client->timeBank) * 100)), 2);
}
/* Start Test Data */
$client1 = new ClientTime();
$client1->id = com_create_guid();
$client1->name = "Client 1";
$client1->timeBank = 50;
$client1->timeUsed = 25;
$client1->timeRemaining = getTimeRemaining($client1);
$client1->percentLeft = getPercentLeft($client1);

$client2 = new ClientTime();
$client2->id = com_create_guid();
$client2->name = "Client 2";
$client2->timeBank = 40;
$client2->timeUsed = 27;
$client2->timeRemaining = getTimeRemaining($client2);
$client2->percentLeft = getPercentLeft($client2);

$client3 = new ClientTime();
$client3->id = com_create_guid();
$client3->name = "Client 3";
$client3->timeBank = 20;
$client3->timeUsed = 19;
$client3->timeRemaining = getTimeRemaining($client3);
$client3->percentLeft = getPercentLeft($client3);

$client4 = new ClientTime();
$client4->id = com_create_guid();
$client4->name = "Client 4";
$client4->timeBank = 20;
$client4->timeUsed = 19.5;
$client4->timeRemaining = getTimeRemaining($client4);
$client4->percentLeft = getPercentLeft($client4);

$client5 = new ClientTime();
$client5->id = com_create_guid();
$client5->name = "Client 5";
$client5->timeBank = 20;
$client5->timeUsed = 20.5;
$client5->timeRemaining = getTimeRemaining($client5);
$client5->percentLeft = getPercentLeft($client5);

$testData = array(
    $client1, $client2, $client3, $client4, $client5
);
/* End Test Data */

$c = $_GET["c"];

if ($c == "all") {
    echo json_encode($testData);
} elseif ($c == "ltr") {
    echo json_encode($testData);
} elseif ($c == "mtr") {
    echo json_encode($testData);
} else {
    echo "command not recognised: " . $c;
}
