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
  return knex("comments as c")
  .join("users as u", "u.user_id", "c.commenter_id")
  .join("posts as p", "p.post_id", "c.post_id")
  .select("c.comment_id", "c.comment","p.post_body as commmented_post", "u.user_email as commenter_email")
  .where({ "c.comment_id": commentId })
  .first()  
}

module.exports = {
  list,
  listCommenterCount,
  read,
};
