import { db } from "../config/db.config.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
	const q = `select posts.*, categories.id as cid, categories.title as ctitle, users.id as uid, users.name from posts
	join categories on posts.category_id = categories.id
	join users on posts.created_by = users.id
	where categories.id = posts.category_id`

	db.query(q, (err, data) => {
		if (err) return res.status(500).send(err);

		return res.status(200).json(data);
	});
};

export const getPost = (req, res) => {
	const q = "SELECT * FROM `posts` WHERE `id`=?";

	db.query(q, [req.params.id], (err, data) => {
		if (err) return res.status(500).json(err);
		return res.status(200).json(data[0]);
	});
};

export const addPost = (req, res) => {
	console.log(req.body);
	/*
	const token = req.cookies.access_token;
	if (!token) return res.status(401).json("Not authenticated!");

	jwt.verify(token, "jwtkey", (err, userInfo) => {
		if (err) return res.status(403).json("Token is not valid!");

		const q =
		  "INSERT INTO posts(`title`, `content`, `picture`, `category_id`, `created_at`,`uid`) VALUES (?)";

		const values = [
		  req.body.title,
		  req.body.content,
		  req.body.picture,
		  req.body.category_id,
		  req.body.created_at,
		  userInfo.id,
		];

		db.query(q, [values], (err, data) => {
		  if (err) return res.status(500).json(err);
		  return res.json("Post has been created.");
		});
	});
	*/
};

export const deletePost = (req, res) => {
	const token = req.cookies.access_token;
	if (!token) return res.status(401).json("Not authenticated!");

	jwt.verify(token, "jwtkey", (err, userInfo) => {
		if (err) return res.status(403).json("Token is not valid!");

		const postId = req.params.id;
		const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?";

		db.query(q, [postId, userInfo.id], (err, data) => {
			if (err) return res.status(403).json("You can delete only your post!");

		  	return res.json("Post has been deleted!");
		});
	});
};

export const updatePost = (req, res) => {
	const token = req.cookies.access_token;
	if (!token) return res.status(401).json("Not authenticated!");

	jwt.verify(token, "jwtkey", (err, userInfo) => {
		if (err) return res.status(403).json("Token is not valid!");
		const postId = req.params.id;
		const q =
			  "UPDATE posts SET `title`=?,`content`=?,`picture`=?,`category_id`=? WHERE `id` = ? AND `uid` = ?";

		const values = [req.body.title, req.body.content, req.body.picture, req.body.category_id];

		db.query(q, [...values, postId, userInfo.id], (err, data) => {
			if (err) return res.status(500).json(err);
			return res.json("Post has been updated.");
		});
	});
};
