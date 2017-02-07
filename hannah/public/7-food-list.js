const $input = document.querySelector('input');
$input.addEventListener('keydown', logaValorUsuario, false);

function logaValorUsuario(e) {
    console.log('***', e.target.value)
}

const $button = document.querySelector('button');
$button.addEventListener('click', removeInput, false);

function removeInput() {
    $input.removeEventListener('keydown', logaValorUsuario, false)

    document.querySelector('.food').removeChild($input)
}