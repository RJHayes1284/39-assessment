const knex = require("../db/connection");

function list() {
  return knex("comments").select("*")
}

function listCommenterCount() {
  return knex("comments as c")
  .join("users as u", "u.user_id", "c.commenter_id")
  .select("c.comment")
  .count("c.comment")
  .groupBy("u.user_email as commenter_email")
  .orderBy("commenter_email")
}

function read(commentId) {
  // your solution here
}

module.exports = {
  list,
  listCommenterCount,
  read,
};
