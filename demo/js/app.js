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

    if (!validations.validateFields(validations)) {
        return false;
    }

    const bonus = calcBonus(salary.value, month.value, vacation.checked);
    const total = calcTotal(salary.value, month.value, bonus);

    document.getElementById("bonus").value = bonus;
    document.getElementById("total").value = total;

    alertOk();
}

function alertOk() {
    alert('Hello' + ' ' + document.getElementById("name").value + ' Finished!');
    return true;
}

