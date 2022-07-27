const { Router } = require('express')


const CandidatesController = require('./controllers/candidates-controllers')
const router = Router()


router.get('/', (req, res) => res.json({ message: `Hello World!` }))

router.get('/candidates/:id', CandidatesController.getOneCandidate)
router.get('/candidates', CandidatesController.index)
router.post('/candidates', CandidatesController.createCandidate)
router.put('/candidates/:id', CandidatesController.updateCandidate)
router.delete('/candidates/:id', CandidatesController.deleteCandidate)

module.exports = router