function calcBonus(salary, month, vacation) {
    var bonus = 0;
    const bonusPercentage = 0.275;

    if (vacation) {
        bonus = ((salary * (month - 1)) * bonusPercentage);
    } else {
        bonus = ((salary * month) * bonusPercentage);
    }

    return parseFloat(bonus).toFixed(2);
}

function calcTotal(salary, month, bonus) {
    return parseFloat(((salary * month) + bonus)).toFixed(2);
}