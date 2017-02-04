function createPoopFactory() {
    const foods = [];

    return {
        add: function(food) {
            return foods.push(food);
        },

        poop: function() {
            if(foods.length > 1) {
                console.log('\u{1F4A9}', foods);
            }
        }
    };
}

const poopFactory = createPoopFactory();

poopFactory.add('fish');
poopFactory.add('meat');

poopFactory.poop();
