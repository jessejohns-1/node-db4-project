const recipes = [
    { recipe_name: 'Pastaaaa'},
    { recipe_name: 'chicken'},
    { recipe_name: 'fishy'},
    ]
    
    const ingredients = [
        {ingredient_name: 'Broccoli', ingredient_unit: 'lbs'},
        {ingredient_name: 'Pesto', ingredient_unit: 'lbs'},
        {ingredient_name: 'Pasta', ingredient_unit: 'lbs'},
        {ingredient_name: 'Lemon', ingredient_unit: 'sliced'},
        {ingredient_name: 'Chicken', ingredient_unit: 'oz'},
        {ingredient_name: 'Salmon', ingredient_unit: 'lbs'},

    ]

    const step_ingredients = [
        //pasta
        {step_id:2, ingredient_id:1, quanitity:1},
        {step_id:3, ingredient_id:2, quanitity:1},
        {step_id:3, ingredient_id:3, quanitity:1},
        //chicken
        {step_id:5, ingredient_id:4, quanitity:1},
        {step_id:5, ingredient_id:5, quanitity:1},
        //salmon
        {step_id:7, ingredient_id:6, quanitity:1},

        
    ]
    
    const steps = [
        //pasta 
        {step_text: 'heat pan', step_number:1, recipe_id: 1},
        {step_text: 'add broccoli', step_number:2, recipe_id: 1},
        {step_text: 'add pesto mixed with pasta', step_number:3, recipe_id: 1},
        //chicken 
        {step_text: 'heat oven', step_number:1, recipe_id: 2},
        {step_text: 'put chicken and lemon in oven', step_number:2, recipe_id: 2},
        {step_text: 'put in oven at 500 degress', step_number:3, recipe_id: 2},
        //salmon
        {step_text: 'fish a salmon in the bidasoa river', step_number:1, recipe_id: 3},
        {step_text: 'cook salmon', step_number:2, recipe_id: 3},
    ]
    
    exports.seed = async function (knex) {
        await knex('recipes').insert(recipes)
        await knex('ingredients').insert(ingredients)
        await knex('steps').insert(steps)
        await knex('step_ingredients').insert(step_ingredients)
    }