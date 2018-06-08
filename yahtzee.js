$(function () {
    addDice();
    hideAllDice();
    $(".dice").click(function () {
        if (allowHide) {
            hideDice($(this).parent().attr("array_nr"));
            $(this).hide();
        }
    });
    $("#throwDice").click(function () {
        if (throws < 3) {
            rollDice();
            throws++;
            if (throws === 3) {
                $(this).prop("disabled", true);
                allowHide = false;
            }
        } else {
            allowHide = true;
        }
    });
    $("#button_3of").click(function () {
        var score = $("#score_3of");
        if (checkSame(3)) {
            var addscore = countDiceSum();
            score.val(addscore);
            updateTotal(addscore);
        } else {
            score.val(0);
        }
        $(this).prop("disabled", true);
        hideAllDice();
    });
    $("#button_4of").click(function () {
        var score = $("#score_4of");
        if (checkSame(4)) {
            var addscore = countDiceSum();
            score.val(addscore);
            updateTotal(addscore);
        } else {
            score.val(0);
        }
        $(this).prop("disabled", true);
        hideAllDice();
    });
    $("#button_chance").click((function () {
        var addscore = countDiceSum();
        $(this).prop("disabled", true);
        $("#score_chance").val(addscore);
        updateTotal(addscore);
        hideAllDice();
    }));
    $("#button_fullhouse").click(function () {
        var score = $("#score_fullhouse");
        if (fullhouseCheck()) {
            var addscore = countDiceSum();
            score.val(addscore);
            updateTotal(addscore);
        } else {
            score.val(0);
        }
        $(this).prop("disabled", true);
        hideAllDice();
    });
    $("#button_small").click(function () {
        var score = $("#score_small");
        if (checkStraight(4)) {
            score.val(30);
            updateTotal(30);
        } else {
            score.val(0);
        }
        $(this).prop("disabled", true);
        hideAllDice();
    });
    $("#button_large").click(function () {
        var score = $("#score_large");
        if (checkStraight(5)) {
            score.val(40);
            updateTotal(40);
        } else {
            score.val(0);
        }
        $(this).prop("disabled", true);
        hideAllDice();
    });
    $("#button_yahtzee").click(function () {
        var score = $("#score_yahtzee");
        if (checkSame(5)) {
            score.val(50);
            updateTotal(50);
        } else {
            score.val(0);
        }
        $(this).prop("disabled", true);
        hideAllDice();
    });
    $("#button_reset").click(function () {
        resetGame();
    });

    for (var i = 1; i < 7; i++) {
        (function (i) {
            $("#countBy" + i).click(function () {
                var result = countDiceByValue(i);
                var score = $("#score_" + i);
                score.val(result);
                updateTotal(result);
                $(this).prop("disabled", true);
                hideAllDice();
                if (countBonus() === 63) {
                    $("#score_bonus").val(63);
                    updateTotal(63);
                }
            });
        })(i);
    }
});
var allowHide = true;
var throws = 0;
var total = 0;
var dice = [];
var diceImages = ["Placeholder", "Dice-1.png", "Dice-2.png", "Dice-3.png", "Dice-4.png", "Dice-5.png", "Dice-6.png"];

function hideDice(number) {
    dice[number] = 0;
}

function rollDice() {
    $(".dice[style='display: none;']").each(function (index) {
        random = Math.floor(Math.random() * 6) + 1;
        dice[$(this).parent().attr("array_nr")] = random;
        $(this).attr("src", "dice/" + diceImages[random]);
        $(this).show();
    });
}

function addDice() {
    for (var i = 0; i < 5; i++) {
        $("#dicediv").append("<div class='diceholder' id='dice_number_" + i + "' array_nr='" + i + "'><img class='dice' src=''></div>");
    }
}

function countDice(number) {
    var count = 0;
    for (var i = 0; i < dice.length; i++) {
        if (dice[i] === number) {
            count++;
        }
    }
    return count;
}

function fullhouseCheck() {
    var first = false;
    var second = false;
    for (var v = 0; v <= 6; v++) {
        if (countDice(v) === 3) {
            first = true;
        } else if (countDice(v) === 2) {
            second = true;
        }
    }
    if (first && second) {
        return true;
    }
    return false;
}

function checkSame(times) {
    for (var i = 1; i <= 6; i++) {
        if (countDice(i) >= times) {
            return true;
        }
    }
    return false;
}

function hideAllDice() {
    throws = 0;
    allowHide = true;
    dice = [];
    $(".dice").hide();
    $("#throwDice").prop("disabled", false);
}

function countDiceSum() {
    var total = 0;
    dice.forEach(function (t) {
        total += t;
    });
    return total;
}

function countDiceByValue(value) {
    var total = 0;
    dice.forEach(function (t) {
        if (t === value) {
            total += t;
        }
    });
    return total;
}

function resetGame() {
    hideAllDice();
    total = 0;
    $(".score").val("");
    $("button").prop("disabled", false);
}

function checkStraight(value) {
    var count = 1;
    var diceUN = [];
    $.each(dice, function (i, el) {
        if ($.inArray(el, diceUN) === -1) diceUN.push(el);
    });
    diceUN.sort();
    for (var i = 0; i < diceUN.length - 1; i++) {
        if (diceUN[i] + 1 === diceUN[i + 1]) {
            count++;
        }
    }

    if (count >= value) {
        return true;
    }
    return false;
}

function checkDisabled() {
    $("#buttons_left .score").each(function (index) {
        if ($(this).isDisabled) {
            return false;
        }
    });
    return true;
}

function countBonus() {
    var count = 0;
    var total = 0;
    if (checkDisabled()) {
        $("#buttons_left .score").each(function (index) {
            if ($(this).val()) {
                count++;
                total += parseInt($(this).val());
            }
        });
    }
    if (count === 6) {
        return total;
    } else {
        return 0;
    }
    return total;
}

function updateTotal(amount) {
    total += amount;
    $("#score_total").val(total);
}