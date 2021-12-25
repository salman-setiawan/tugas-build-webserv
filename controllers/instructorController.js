const { Instructor } = require("../models/");

class InstructorController {
  static async createNewInstructor(req, res) {
    try {
      const body = req.body;
      const name = body.name;
      const dateOfBirth = body.dateOfBirth;
      const location = body.location;
      const instructor = new Instructor({
        name: name,
        dateOfBirth: dateOfBirth,
        location: location,
      });
      const saved = await instructor.save();
      res.status(201).send({
        message: "new instructor created!",
        instructor: saved,
      });
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async getAllInstructor(req, res) {
    try {
      const instructorList = await Instructor.find();
      res.status(200).send(instructorList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async getInstructorByID(req, res) {
    try {
      const id = req.params.id;
      const instructorList = await Instructor.findOne({ _id: id });
      res.status(200).send(instructorList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async updateInstructor(req, res) {
    try {
      // Ambil ID dari parameter
      const id = req.params.id;
      // Ambil data dari body
      const body = req.body;
      const name = body.name;
      const dateOfBirth = body.dateOfBirth;
      const location = body.location;
      const instructor = new Instructor({
        name: name,
        dateOfBirth: dateOfBirth,
        location: location,
      });
      await Instructor.updateOne({
        name: name,
        dateOfBirth: dateOfBirth,
        location: location,
      });
      res.status(200).send({
        message: "instructor data updated",
        instructor: instructor,
      });
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async deleteInstructor(req, res) {
    try {
      // Ambil ID dari parameter
      const id = req.params.id;
      await Instructor.deleteOne({ _id: id });
      res
        .status(200)
        .send({ message: `instructor with id ${id} has been deleted ` });
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }
}
module.exports = InstructorController;