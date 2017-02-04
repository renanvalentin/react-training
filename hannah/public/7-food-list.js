function createPoopFactory() {
    const foods = [];

    return {
        add: function(food) {
            return foods.push(food);
        },

        poop: function() {
            return foods.length > 1;
        }
    };
}

const poopFactory = createPoopFactory();

document.querySelector('#add-food').addEventListener('click', createFood, false);
document.querySelector('.cat').addEventListener('click', displayPoop, false);

function createFood() {
    // var x = 1000000000;
    // while(--x > 0) {
    //
    // }

    const $food = document.querySelector('#food');

    if (!$food.value) {
        return;
    }

    const $item = document.createElement('li');
    $item.textContent = $food.value;
    $food.value = '';

    poopFactory.add($food.value);

    document.querySelector('#poop-factory').appendChild($item);
}

function displayPoop() {
    if (!poopFactory.poop()) {
        return false;
    }

    const $poop = document.querySelector('.cat__poop__icon');
    $poop.classList.remove('cat__poop_icon--animate');

    setTimeout(function() {
        $poop.classList.add('cat__poop_icon--animate');
    }, 0);
}