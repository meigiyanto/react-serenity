import { DataTypes } from 'sequelize';
import db from './db';

const Comments = db.define('comments', {
	id: {
		type: DataTypes.BIGINT(20),
		autoIncrement: true,
		primaryKey: true,
		allowNull: false
	},
	parent: {
		type: DataTypes.BIGINT(20),
		allowNull: false,
		defaultValue: 0
	},
	post_id: {
		type: DataTypes.BIGINT(20)
	},
	name: {
		type: DataTypes.STRING
	},
	email: {
		type: DataTypes.STRING
	},
	content: {
		type: DataTypes.TEXT
	},
	active: {
		type: DataTypes.ENUM('Y','N'),
		defaultValue: 'N',
		allowNull: true
	},
	status: {
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
	freezeTableName: true,
	indexes: {
		name: 'post_id_index',
		fields:['post_id']
	}
})

export default Comments;
