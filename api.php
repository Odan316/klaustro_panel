<?php
/**
 * Created by PhpStorm.
 * User: onag
 * Date: 22.11.14
 * Time: 19:12
 */

$data = [
    [
        "type" => "string",
        "name" => "timer1",
        "value" => "01:10:12:44"
    ],
    [
        "type" => "door",
        "name" => "door1",
        "value" => 1
    ],
    [
        "type" => "diode",
        "name" => "diode1_1",
        "value" => 1
    ],
    [
        "type" => "diode",
        "name" => "diode1_2",
        "value" => 0
    ],
    [
        "type" => "figures",
        "name" => "figures1",
        "value" => 0
    ],
    [
        "type" => "button",
        "name" => "button1",
        "value" => 1
    ],
    [
        "type" => "dates",
        "name" => "dates2",
        "value" => [
            "2014",
            "11",
            "04",
            "14:50"
        ]
    ],
    [
        "type" => "string",
        "name" => "counter2",
        "value" => "0/1"
    ],
    [
        "type" => "display",
        "name" => "display2",
        "value" => 0
    ],
    [
        "type" => "battery",
        "name" => "battery2",
        "value" => 0.25
    ],
    [
        "type" => "battery",
        "name" => "battery3",
        "value" => 0.75
    ],
    [
        "type" => "string",
        "name" => "code3",
        "value" => "12"
    ],
    [
        "type" => "key",
        "name" => "key3",
        "value" => 1
    ],
    [
        "type" => "key",
        "name" => "key4",
        "value" => 0
    ],
    [
        "type" => "door",
        "name" => "door5",
        "value" => 0
    ]
];

echo json_encode($data);