// app/controllers/userController.js
const User = require('../models/userModel');
exports.home = (req, res) => {
  res.render('index');
};
exports.listUsers = (req, res) => {
  const users = User.findAll();
  res.render('users', { users });
};
exports.createUser = (req, res) => {
  const { name, email, linkImg, numero, prezzo } = req.body;
  User.create(name, email, linkImg, numero, prezzo);
  res.redirect('/users');
};
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  User.delete(id);
  res.redirect('/users');
};
exports.incrementa = (req, res) => {
  User.incrementa(req.params.id);
  res.redirect('/users');
};
exports.decrementa = (req, res) => {
  User.decrementa(req.params.id);
  res.redirect('/users');
};