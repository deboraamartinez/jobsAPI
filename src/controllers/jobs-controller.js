const database = require('../models')



const JobsController = {
  index: async (req, res) => {
    try {
      const jobs = await database.Jobs.findAll()
      return res.status(200).json(jobs)

    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },
  createJob: async (req, res) => {
    const newInfo = req.body
    try {
      const job = await database.Jobs.create(newInfo)
      return res.status(200).json(job)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  }

}

module.exports = JobsController