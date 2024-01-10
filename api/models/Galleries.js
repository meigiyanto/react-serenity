import { DataType } from 'sequelize';
import db from './db';

const Galleries = db.define('galleries', {
	id: {
		type: DataTypes.BIGINT(20),
		autoIncrement: true,
		primaryKey: true,
		allowNull: false
	},
	album_id: {
		type: DataTypes.BIGINT(20)
	},
	title: {
		type: DataTypes.STRING
	},
	content: {
		type: DataTypes.TEXT
	},
	picture: {
		type: DataTypes.STRING
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
		name: 'album_id_index',
		fields: ['album_id']
	}
})

export default Galleries;
