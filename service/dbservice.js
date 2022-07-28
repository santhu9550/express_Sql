const connection = require("../config");

const User = {};

User.create = (user, cb) => {
  const query = connection.query(
    "INSERT INTO users SET ?",
    user,
    function (error, cbs, fields) {
      if (error) return cb(error, null);
      return cb(null, cbs);
    }
  );
  console.log(query.sql);
};

User.findById = function (id, cb) {
  connection.query(
    "Select * from users where id = ? ",
    id,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        cb(err, null);
      } else {
        cb(null, res);
      }
    }
  );
};

User.findAll = function (cb) {
  connection.query("Select * from users", function (err, res) {
    if (err) {
      console.log("error: ", err);
      cb(null, err);
    } else {
      console.log("users : ", res);
      cb(null, res);
    }
  });
};

User.update = function (id, user, cb) {
  connection.query(
    "UPDATE users SET id=?,LastName=?,FirstName=?,City=?,Age=?,Passw=?,Phone=?,Email=? WHERE id = ?",
    [
      user.id,
      user.LastName,
      user.FirstName,
      user.City,
      user.Age,
      user.Passw,
      user.Phone,
      user.Email,
      id,
    ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        cb(null, err);
      } else {
        cb(null, res);
      }
    }
  );
};

User.delete = function (id, cb) {
  connection.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      cb(null, err);
    } else {
      cb(null, res);
    }
  });
};

module.exports = User;
