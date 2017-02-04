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

var app =  app || {};

const validations = {
    validateFields: validateFields
};