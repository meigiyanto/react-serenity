import { db } from "../config/db.config.js";
import jwt from "jsonwebtoken";

export const getCategories = (req, res) => {
	db.query("SELECT * FROM categories", (err, data) => {
		if (err) return res.status(500).send(err);

		return res.status(200).json(data);
	});
};

export const getCategory = (req, res) => {
	const q = "SELECT * FROM `categories` WHERE `id`=?";

	db.query(q, [req.params.id], (err, data) => {
		if (err) return res.status(500).json(err);

		return res.status(200).json(data[0]);
	});
};

export const addCategory = (req, res) => {
	const token = req.cookies.access_token;
	if (!token) return res.status(401).json("Not authenticated!");

	jwt.verify(token, "jwtkey", (err, userInfo) => {
		if (err) return res.status(403).json("Token is not valid!");
		const q =
		"INSERT INTO categories (`parent`, `title`, `seotitle`, `picture`, `picture_description`, `active`, `created_by`, `updated_by`, `created_at, `updated_at`) VALUES (?)";
		/* const q = "INSERT INTO categories(`title`, `desc`, `img`, `cat`, `date`,`uid`) VALUES (?)"; */

		const values = [
		  req.body.parent,
		  req.body.title,
		  req.body.seotitle,
		  req.body.picture,
		  req.body.picture_description,
		  req.body.active,
		  req.body.created_by,
		  req.body.updated_by
		  // userInfo.id,
		];

	db.query(q, [values], (err, data) => {
		if (err) return res.status(500).json(err);
			return res.json("Category has been created.");
		});
	});
};

export const deleteCategory = (req, res) => {
	const token = req.cookies.access_token;
	if (!token) return res.status(401).json("Not authenticated!");

	jwt.verify(token, "jwtkey", (err, userInfo) => {
		if (err) return res.status(403).json("Token is not valid!");

		const CategoryId = req.params.id;
		const q = "DELETE FROM categories WHERE `id` = ? AND `uid` = ?";

		db.query(q, [categoryId, userInfo.id], (err, data) => {
			if (err) return res.status(403).json("You can delete only your Category!");

		    return res.json("Category has been deleted!");
		});
	});
};

export const updateCategory = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const categoryId = req.params.id;
    const q =
      "UPDATE categories SET `title`=?,`desc`=?,`img`=?,`cat`=? WHERE `id` = ? AND `uid` = ?";

    const values = [req.body.title, req.body.desc, req.body.img, req.body.cat];

    db.query(q, [...values, categoryId, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Category has been updated.");
    });
  });
};
