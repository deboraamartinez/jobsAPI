const database = require('../models')


const CandidatesController = {
  index: async (req, res) => {
    try {
      const candidates = await database.Candidates.findAll()
      return res.json(candidates)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  createCandidate: async (req, res) => {
    const newCandidate = req.body
    try {
      const candidate = await database.Candidates.create(newCandidate)
      return res.status(201).json(candidate)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  getOneCandidate: async (req, res) => {
    const { id } = req.params
    try {
      const candidate = await database.Candidates.findOne({ where: { id: Number(id) } })
      if (candidate === null) {
        return res.status(404).json({ message: 'Candidate not found' })
      }
      return res.status(200).json(candidate)
    } catch (error) {
      if (err instanceof Error) {
        return res.status(400).json({ message: `No` })
      }
    }
  },

  updateCandidate: async (req, res) => {
    const { id } = req.params
    const newInfo = req.body
    try {
      await database.Candidates.update(newInfo, { where: { id: Number(id) } })
      const updatedCandidate = await database.Candidates.findOne({ where: { id: Number(id) } })
      return res.status(200).json(updatedCandidate)

    } catch (error) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },
  deleteCandidate: async (req, res) => {
    const { id } = req.params
    try {
      await database.Candidates.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ message: `Candidate ${id} successfully deleted` })
    } catch (error) {

    }
  }
}




module.exports = CandidatesController