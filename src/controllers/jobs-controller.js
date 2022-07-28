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
  getOneJob: async (req, res) => {
    const { id } = req.params
    try {
      const jobs = await database.Jobs.findOne({ where: { id: Number(id) }, include: [{ model: database.Companies }] })
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
  },
  updateJob: async (req, res) => {
    const { id } = req.params
    const newInfo = req.body
    try {
      const newJob = await database.Jobs.update(newInfo, { where: { id: Number(id) } })
      return res.status(200).json(newJob)

    } catch (error) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },
  deleteJob: async (req, res) => {
    const { id } = req.params
    try {
      await database.Jobs.detroy({ where: { id: Number(id) } })
      return res.status(200).json({ message: `Job ${id} successfully deleted` })

    } catch (error) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }

    }

  }

}

module.exports = JobsController