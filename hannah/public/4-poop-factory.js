const poopFactory = [];

function add(food) {
    return poopFactory.push(food);
}

add('fish');
add('meat');

if(poopFactory.length > 1) {
    console.log('\u{1F4A9}', poopFactory);
}