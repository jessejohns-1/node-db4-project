const router = require('express').Router()

router.use('*', (req,res,)=>{
    res.json({ api:'up' })
})



router.use((err,req,res,next)=>{ // eslint-disable-line
    res.status(500).json({
        customMessage: 'Something is incorrect check recipes router.',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router