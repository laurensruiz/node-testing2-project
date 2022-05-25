const router = require('express').Router()
const dbConfig = require('../../data/db-config')
const Joke = require('./jokes-model')

router.delete('/:id', async (req,res)=>{
  const id = req.params.id
  const delJoke = await Joke.deleteJoke(id)
  res.status(200).json(delJoke)
})

// error handling
router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
      devAdvice: 'the code broke somewhere in the recipes router',
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = router