const database = require('../models')


const CompaniesControllers = {

  index: async (req, res) => {
    try {
      const companies = await database.Companies.findAll()
      return res.status(200).json(companies)

    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  getOneCompany: async (req, res) => {
    const { id } = req.params
    try {
      const company = await database.Companies.findOne({ where: { id: Number(id) } })
      return res.status(200).json(company)

    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  createCompany: async (req, res) => {
    const newCompany = req.body
    try {
      const createdCompany = await database.Companies.create(newCompany)
      return res.status(201).json(createdCompany)

    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  updateCompany: async (req, res) => {
    const newInfo = req.body
    const { id } = req.params
    try {
      await database.Companies.update(newInfo, { where: { id: Number(id) } })
      const updatedCompany = await database.Companies.findOne({ where: { id: Number(id) } })
      return res.status(200).json(updatedCompany)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },
  deleteCompany: async (req, res) => {
    const { id } = req.params
    try {
      await database.Companies.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ message: `Company ${id} successfully deleted` })
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  jobsByCompany: async (req, res) => {
    const { id } = req.params
    try {
      const company = await database.Jobs.findAll({ where: { companyId: Number(id) } })
      return res.json(company)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  }
}




module.exports = CompaniesControllers