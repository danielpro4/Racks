<?php

// Start session
session_start();

// Include Framework
include 'latte/latte.php';

// Load app
LatteModule::loadMain('app');

// Use this index for including latte.element library elements
error_reporting(-1);

// Create document
$doc = new LatteDocument('Racks App');

$viewport = tag("meta")
    ->attr("name", "viewport")
    ->attr("content", "width=device-width, initial-scale=1");

$viewport->addTo($doc->head);

// Stylesheet
$doc->addCss('/design/css/bootstrap.css');
$doc->addCss('/design/css/app.css');

tag('div.root')->id('root')->addTo($doc->body);