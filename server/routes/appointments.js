const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// Get all appointments
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// Create a new appointment
router.post('/', async (req, res) => {
  const { studentId, teacherId, subject, date } = req.body;

  try {
    const newAppointment = new Appointment({
      studentId,
      teacherId,
      subject,
      date,
    });

    const appointment = await newAppointment.save();
    res.json(appointment);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// Update appointment status
router.put('/:id', async (req, res) => {
  const { status } = req.body;

  try {
    let appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({ msg: 'Appointment not found' });
    }

    appointment.status = status;

    await appointment.save();
    res.json(appointment);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
