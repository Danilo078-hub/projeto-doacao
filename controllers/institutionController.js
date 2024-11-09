const Institution = require('../models/Institution');

exports.addInstitution = async (req, res) => {
  const { name, description } = req.body;
  try {
    const institution = await Institution.create({ name, description });
    res.status(201).json(institution);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar instituição' });
  }
};

exports.getInstitutions = async (req, res) => {
  try {
    const institutions = await Institution.find();
    res.json(institutions);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar instituições' });
  }
};
