const poopFactory = [];

function add(food) {
    return poopFactory.push(food);
}

add('fish');
poopFactory.pop();

if(poopFactory.length > 1) {
    console.log('\u{1F4A9}', poopFactory);
}

