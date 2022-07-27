const { Router } = require('express')


const CandidatesController = require('./controllers/candidates-controllers')
const CompaniesController = require('./controllers/companies-controllers')
const router = Router()

router.get('/companies', CompaniesController.index)
router.get('/companies/:id', CompaniesController.getOneCompany)
router.post('/companies', CompaniesController.createCompany)
router.put('/companies/:id', CompaniesController.updateCompany)
router.delete('companies/:id', CompaniesController.deleteCompany)

router.get('/candidates/:id', CandidatesController.getOneCandidate)
router.get('/candidates', CandidatesController.index)
router.post('/candidates', CandidatesController.createCandidate)
router.put('/candidates/:id', CandidatesController.updateCandidate)
router.delete('/candidates/:id', CandidatesController.deleteCandidate)

module.exports = router