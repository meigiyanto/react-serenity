import { db } from "../config/db.config.js";
import jwt from "jsonwebtoken";

export const getGalleries = (req, res) => {
  db.query("SELECT * FROM galleries", (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getGallery = (req, res) => {
  const q =
    "SELECT * FROM `galleries` WHERE `id`=?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addGallery = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "INSERT INTO galleries(`title`, `desc`, `img`, `cat`, `date`,`uid`) VALUES (?)";

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
      return res.json("Gallery has been created.");
    });
  });
};

export const deleteGallery = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const galleryId = req.params.id;
    const q = "DELETE FROM galleries WHERE `id` = ? AND `uid` = ?";

    db.query(q, [galleryId, userInfo.id], (err, data) => {
      if (err) return res.status(403).json("You can delete only your Gallery!");

      return res.json("Gallery has been deleted!");
    });
  });
};

export const updateGallery = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const GalleryId = req.params.id;
    const q =
      "UPDATE galleries SET `title`=?,`desc`=?,`img`=?,`cat`=? WHERE `id` = ? AND `uid` = ?";

    const values = [req.body.title, req.body.desc, req.body.img, req.body.cat];

    db.query(q, [...values, GalleryId, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Gallery has been updated.");
    });
  });
};
