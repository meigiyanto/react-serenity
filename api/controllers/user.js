import { db } from '../config/db.config.js';
import jwt from 'jsonwebtoken';

export const getUsers = (req,res) => {
	db.query("SELECT `id`,`name`,`username`,`picture`,`email`,`telp`,`bio` FROM `users`;", (error, result) => {

		if(error) return res.status(500).send(error);
		return res.status(200).json(result);
	});
}

export const getUser = (req,res) => {
	const q = "SELECT `id`,`name`,`username`,`picture`,`email`,`telp`,`bio` FROM `users` WHERE `id`=?;";

	db.query(q, [req.params.id], (error, result) => {
		if(error) return res.status(500).send(error);
		return res.status(200).json(result[0]);
	});
}

export const addUser = (req,res) => {
	const token = req.cookies.access_token;
	if (!token) return res.status(401).json("Not authenticated!");

	jwt.verify(token, "jwtkey", (err, userInfo) => {
		if (err) return res.status(403).json("Token is not valid!");

		const q = "INSERT INTO `users` (`name`, `username`, `email`, `email_verified_at`, `password`, `telp`, `bio`, `block`, `picture`, `remember_token`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES (?);"

		const values = [
		  req.body.name,
		  req.body.username,
		  req.body.email,
		  req.body.email_verified_at,
		  req.body.password,
		  req.body.block,
		  req.body.picture,
		  req.body.remember_token,
		  req.body.created_by,
		  req.body.updated_by,
		  req.body.created_at,
		  req.body.updated_at,
		  userInfo.id,
		];

		db.query(q, [values], (error, result) => {
		  if (error) return res.status(500).json(error);
		  return res.json("User has been created successfully.");
		});
	});
}

export const updateUser = (req,res) => {
	const token = req.cookies.access_token;
	if (!token) return res.status(401).json("Not authenticated!");

	jwt.verify(token, "jwtkey", (err, userInfo) => {
		if (err) return res.status(403).json("Token is not valid!");

		const userId = req.params.id;
		const q = "UPDATE `users` SET `name`=?, `usermame`=? `email`=?,`picture`=?,`email_verified_at`=? `password`=? `bio`=? `block`=? `updated_at`=? `remember_token`=? `created_by`=? `updated_by`=? `created_at`=? WHERE `id`=?";

	    const values = [
	    	req.body.name,
	    	req.body.username,
	    	req.body.email,
	    	req.body.picture,
	    	req.body.email_vedified_at,
	    	req.body.password,
	    	req.body.bio,
	    	req.body.block,
	    	req.body.created_at,
	    	req.body.created_by,
	    	req.body.updated_at,
	     	req.body.updated_by,
	    	req.body.cat
	    ];

	    db.query(q, [...values, userId, userInfo.id], (error, result) => {
	    	if (error) return res.status(500).json(error);
	    	return res.json("User has been updated successfully.");
	    });
	});
}

export const deleteUser = (req,res) => {
	const token = req.cookies.access_token;
	if (!token) return res.status(401).json("Not authenticated!");

	jwt.verify(token, "jwtkey", (err, userInfo) => {
		if (err) return res.status(403).json("Token is not valid!");

		const postId = req.params.id;
		const q = "DELETE FROM `users` WHERE `id`=?";

		db.query(q, [postId, userInfo.id], (error, result) => {
			if (err) return res.status(403).json("Forbidden action!");
			return res.json("User has been deleted successfully");
		});
	});
}
