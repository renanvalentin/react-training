function done() {
    const name = document.getElementById('name');
    const salary = document.getElementById('salary');
    const month = document.getElementById('month');
    const vacation = document.getElementById("vacation");

    const validations = [{
        field: name,
        msg: 'Invalid name!'
    }, {
        field: salary,
        msg: 'Invalid salary!'
    }, {
        field: month,
        msg: 'Invalid month!',
        customValidation: function(value) {
            return isMonthValid(value);
        }
    }];

    if (!validateFields(validations)) {
        return false;
    }

    const bonus = calcBonus(salary.value, month.value, vacation.checked);
    const total = calcTotal(salary.value, month.value, bonus);

    document.getElementById("bonus").value = bonus;
    document.getElementById("total").value = total;

    alertOk();
}

function validateFields(fields) {
    return fields.every(function(item) {
        if (isRequired(item) || !validateCustomValidation(item)) {
            validate(item.field, item.msg);
            return false;
        } else {
            removeInvalidClass(item.field);
        }

        return true;
    });
}

function isRequired(item) {
    if (item.required != undefined) {
        if (item.required) {
            const wasFilled = isEmpty(item.field.value);
            return wasFilled;
        }

        return false;
    }

    return isEmpty(item.field.value);
}

function validateCustomValidation(item) {
    if (item.customValidation) {
        const isValid = item.customValidation(item.field.value);
        return isValid;
    }

    return true;
}

function validate(field, msg) {
    addInvalidClass(field);
    focusInvalidField(field);
}

function isEmpty(value) {
    return value == '';
}

function isMonthValid(value) {
    return value >= 1 && value <= 12;
}

function addInvalidClass(field) {
    field.classList.add('alert');
}

function removeInvalidClass(field) {
    field.classList.remove('alert');
}

function toggleValidateFieldStyle(field) {
    field.classList.toggle('alert');
}

function focusInvalidField(field) {
    field.focus();
}

function alertOk() {
    alert('Hello' + ' ' + document.getElementById("name").value + ' Finished!');
    return true;
}

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