<?php

if (!isset($_GET["c"])) {
    echo "no command";
    die();
}

$testData = array(
    "{
        logo: '',
        name: 'Comapny 1',
        timeBank: 32,
        timeUsed: 16,
        timeRemaining: 16,
        percentLeft: 50
    }",
    "{
        logo: '',
        name: 'Comapny 2',
        timeBank: 50,
        timeUsed: 55,
        timeRemaining: -5,
        percentLeft: -10
    }",
    "{
        logo: '',
        name: 'Comapny 3',
        timeBank: 16,
        timeUsed: 4,
        timeRemaining: 12,
        percentLeft: 75
    }",
    "{
        logo: '',
        name: 'Comapny 4',
        timeBank: 50,
        timeUsed: 49,
        timeRemaining: 1,
        percentLeft: 2
    }",
    "{
        logo: '',
        name: 'Comapny 5',
        timeBank: 8,
        timeUsed: 6,
        timeRemaining: 2,
        percentLeft: 25
    }",
    "{
        logo: '',
        name: 'Comapny 6',
        timeBank: 8,
        timeUsed: 7.5,
        timeRemaining: 0.5,
        percentLeft: 25
    }"
);


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
