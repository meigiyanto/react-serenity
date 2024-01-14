import { DataTypes } from 'sequelize';
import db from './db';

const Tags = db.define('tags', {
	id: {
		type: DataTypes.BIGINT(20),
		autoIncrement: true,
		primaryKey: true,
		allowNull: false
	},
	title: {
		type: DataTypes.STRING
	},
	seotitle: {
		type: DataTypes.STRING
	},
	count: {
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
		name: 'tags_index',
		fields: ['title','seotitle']
	}
})

export default Tags;
