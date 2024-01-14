import { Datatypes } from "sequelize";
import db from './db';

const Posts = db.define('posts', {
	id: {
		type: DataTypes.BIGINT(20),
		allowNull: false,
		autoIncrement: true,
		primaryKey: true
	},
	category_id: {
		type: DataTypes.BIGINT(20),
		allowNull: false,
		defaultValue: 1
	},
	title: {
		type: DataTypes.STRING
	},
	seotitle: {
		type: DataTypes.STRING
	},
	content: {
		type: DataTypes.TEXT
	},
	meta_description: {
		type: DataTypes.STRING
	},
	picture: {
		type: DataTypes.STRING
	},
	picture_description: {
		type: DataTypes.STRING
	},
	tag: {
		type: DataTypes.STRING
	},
	type: {
		type: DataTypes.ENUM('general','pagination','video','audio'),
		allowNull: false,
		defaultValue: 'general'
	},
	active: {
		type: DataTypes.ENUM('Y','N'),
		allowNull: false,
		defaultValue: 'Y'
	},
	headline: {
		type: DataTypes.ENUM('Y','N'),
		allowNull: false,
		defaultValue: 'Y'
	},
	comment: {
		type: DataTypes.ENUM('Y','N'),
		allowNull: false,
		defaultValue: 'Y'
	},
	hits: {
		type: DataTypes.BIGINT(20)
	},
	updated_at: {
		type: DataTypes.DATE(6)
	},
	updated_at: {
		type: DataTypes.DATE(6)
	},
	created_by: {
		type: DataTypes.BIGINT(20),
		allowNull: false,
		defaultValue: 1
	},
	created_by: {
		type: DataTypes.BIGINT(20),
		allowNull: false,
		defaultValue: 1
	},
},{
    freezeTableName: true,
    indexes: {
    	name: 'posts_index',
    	fields:['title', 'seotitle']
    }
})


export default Posts;
