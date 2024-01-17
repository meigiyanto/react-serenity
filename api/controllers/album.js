import { db } from "../config/db.config.js";
import jwt from "jsonwebtoken";

export const getAlbums = (req, res) => {
  db.query("SELECT * FROM albums", (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getAlbum = (req, res) => {
  const q =
    "SELECT * FROM `albums` WHERE `id`=?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addAlbum = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "INSERT INTO albums(`title`, `desc`, `img`, `cat`, `date`,`uid`) VALUES (?)";

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
      return res.json("Album has been created.");
    });
  });
};

export const deleteAlbum = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const AlbumId = req.params.id;
    const q = "DELETE FROM `albums` WHERE `id` = ? AND `uid` = ?";

    db.query(q, [AlbumId, userInfo.id], (err, data) => {
      if (err) return res.status(403).json("You can delete only your Album!");

      return res.json("Album has been deleted!");
    });
  });
};

export const updateAlbum = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const albumId = req.params.id;
    const q =
      "UPDATE `albums` SET `title`=?,`desc`=?,`img`=?,`cat`=? WHERE `id` = ? AND `uid` = ?";

    const values = [req.body.title, req.body.desc, req.body.img, req.body.cat];

    db.query(q, [...values, albumId, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Album has been updated.");
    });
  });
};
