import { DataTypes } from 'sequelize';
import db from './db';

const Users = db.define('users', {
	id: {
		type: DataTypes.BIGINT(20),
		autoIncrement: true,
		primaryKey: true,
		allowNull: false
	},
	name: {
		type: DataTypes.STRING
	},
	username: {
		type: DataTypes.STRING
	},
	email: {
		type: DataTypes.STRING
	},
	email_verified_at: {
		type: DataTypes.DATE(6)
	},
	password: {
		type: DataTypes.STRING
	},
 	picture: {
		type: DataTypes.STRING,
		defaultValue: 'avatar.jpg'
	},
	telp: {
		type: DataTypes.STRING
	},
	bio: {
		type: DataTypes.TEXT
	},
	remember_token: {
		type: DataTypes.STRING
	},
	active: {
		type: DataTypes.ENUM('Y','N'),
		defaultValue: 'Y',
		allowNull: true
	},
	block: {
		type: DataTypes.ENUM('Y','N'),
		defaultValue: 'N',
		allowNull: true
	},
	created_by: {
		type: DataTypes.BIGINT(20),
		defaultValue: 1,
		allowNull: false
	},
	updated_by: {
		type: DataTypes.BIGINT(20),
		defaultValue: 1,
		allowNull: false
	},
	created_at: {
		type: DataTypes.DATE(6)
	},
	updated_at: {
		type: DataTypes.DATE(6)
	}
}, {
	freezeTableName: true
})

export default Users;
