const express = require('express');
const router = express.Router();
const Subject = require('../models/Subject');

// Get all subjects
router.get('/', async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.json(subjects);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// Create a new subject
router.post('/', async (req, res) => {
  const { name, description } = req.body;

  try {
    const newSubject = new Subject({ name, description });

    const subject = await newSubject.save();
    res.json(subject);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// Update a subject
router.put('/:id', async (req, res) => {
  const { name, description } = req.body;

  try {
    let subject = await Subject.findById(req.params.id);

    if (!subject) {
      return res.status(404).json({ msg: 'Subject not found' });
    }

    subject.name = name;
    subject.description = description;

    await subject.save();
    res.json(subject);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
