const router = require('express').Router()
const Recipe = require('./recipes-model')

router.get('/:recipe_id', (req,res,next) => {
    Recipe.getRecipeById(req.params.recipe_id)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(next)
})








router.use((err,req,res,next)=>{ // eslint-disable-line
    res.status(500).json({
        customMessage: 'Something is incorrect check recipes router.',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router