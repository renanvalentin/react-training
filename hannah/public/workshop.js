const addButton = document.querySelector('#add-food');
addButton.addEventListener('click', createFood, false);

const cat = document.querySelector('.cat');
cat.addEventListener('click', displayPoop, false);

function displayPoop() {
    if (poopFactory.poop()) {
        const $poop = document.querySelector('.cat__poop__icon');
        $poop.classList.remove('cat__poop__icon--animate');

        setTimeout(function() {
            $poop.classList.add('cat__poop__icon--animate');
        }, 0);
    }
}

function createFood() {
    const $food = document.querySelector('#food');

    if (!$food.value) {
        return false;
    }

    const $item = document.createElement('li');
    $item.textContent = $food.value;
    poopFactory.add($food.value);

    $food.value = '';

    document.querySelector('#poop-factory').appendChild($item);
}

function createPoopFactory() {
    const foods = [];
    const minFood = 1;

    return {
        add: function(food) {
            return foods.push(food);
        },
        remove: function() {
            return foods.pop();
        },
        poop: function() {
            return foods.length > minFood;
        }
    }
}

const poopFactory = createPoopFactory();
