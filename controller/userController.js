const userService = require("../service/dbservice");

const userController = {};

userController.findAll = function (req, res) {
  userService.findAll(function (err, users) {
    if (err) res.send(err);
    console.log("res", users);
    res.send(users);
  });
};

userController.create = function (req, res) {
  const user = req.body;
  userService.create(user, function (err, result) {
    if (err) return res.send(err);
    return res.json({
      error: false,
      message: "User added successfully!",
      data: result,
    });
  });
};

userController.findById = function (req, res) {
  userService.findById(req.params.id, function (err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

userController.update = function (req, res) {
  userService.update(req.params.id, req.body, function (err, user) {
    if (err) res.send(err);
    res.json({ error: false, message: "user successfully updated" });
  });
};

userController.delete = function (req, res) {
  userService.delete(req.params.id, function (err, user) {
    if (err) res.send(err);
    res.json({ error: false, message: "user successfully deleted" });
  });
};


module.exports = userController