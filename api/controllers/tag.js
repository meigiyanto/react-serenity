import { db } from "../config/db.config.js";
import jwt from "jsonwebtoken";

export const getTags = (req, res) => {
  db.query("SELECT * FROM tags", (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getTag = (req, res) => {
  const q =
    "SELECT * FROM `tags` WHERE `id`=?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addTag = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "INSERT INTO tags(`title`, `desc`, `img`, `cat`, `date`,`uid`) VALUES (?)";

    const values = [
      req.body.title,
      req.body.desc,
      req.body.img,
      req.body.cat,
      req.body.date,
      userInfo.id,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Tag has been created.");
    });
  });
};

export const deleteTag = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const tagId = req.params.id;
    const q = "DELETE FROM tags WHERE `id` = ? AND `uid` = ?";

    db.query(q, [tagId, userInfo.id], (err, data) => {
      if (err) return res.status(403).json("You can delete only your Tag!");

      return res.json("Tag has been deleted!");
    });
  });
};

export const updateTag = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const tagId = req.params.id;
    const q =
      "UPDATE tags SET `title`=?,`desc`=?,`img`=?,`cat`=? WHERE `id` = ? AND `uid` = ?";

    const values = [req.body.title, req.body.desc, req.body.img, req.body.cat];

    db.query(q, [...values, tagId, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Tag has been updated.");
    });
  });
};
