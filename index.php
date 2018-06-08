<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="yahtzee.js"></script>
    <link href="yahtzee.css" type="text/css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
</head>
<body>
<div id="yahtzee">
    <div id="logo">
        <img src="img/Yahtzee_logo.png" alt="Yahtzee logo">
    </div>
    <div id="dicediv"></div>
    <div id="throw">
        <button id="throwDice">Throw</button>
    </div>
    <div id="middle">
        <div id="buttons_left">
            <button id="countBy1">Count ones</button>
            <input type="text" class="score" id="score_1" disabled>
            <button id="countBy2">Count twos</button>
            <input type="text" class="score" id="score_2" disabled>
            <button id="countBy3">Count threes</button>
            <input type="text" class="score" id="score_3" disabled>
            <button id="countBy4">Count fours</button>
            <input type="text" class="score" id="score_4" disabled>
            <button id="countBy5">Count fives</button>
            <input type="text" class="score" id="score_5" disabled>
            <button id="countBy6">Count sixes</button>
            <input type="text" class="score" id="score_6" disabled>
            <a>Bonus:</a>
            <input type="text" class="score" id="score_bonus" disabled>
        </div>
        <div id="buttons_right">
            <input type="text" class="score" id="score_3of" disabled>
            <button id="button_3of">3 of a kind</button>
            <input type="text" class="score" id="score_4of" disabled>
            <button id="button_4of">4 of a kind</button>
            <input type="text" class="score" id="score_fullhouse" disabled>
            <button id="button_fullhouse">Full House</button>
            <input type="text" class="score" id="score_small" disabled>
            <button id="button_small">Small straight</button>
            <input type="text" class="score" id="score_large" disabled>
            <button id="button_large">Large straight</button>
            <input type="text" class="score" id="score_yahtzee" disabled>
            <button id="button_yahtzee">Yahtzee</button>
            <input type="text" class="score" id="score_chance" disabled>
            <button id="button_chance">Chance</button>
        </div>
    </div>
    <div id="total">
        <a id="lblScore">Totaal:</a>
        <input type="text" class="score" id="score_total" disabled>
    </div>
    <div id="buttons_bottom">
        <button id="button_reset">Reset game</button>
    </div>
</div>
</body>
</html>