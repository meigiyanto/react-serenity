import { DataTypes } from 'sequelize';
import db from './db';

const Roles = db.define('roles', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false
	},
	name: {
		type: DataTypes.STRING
	},
	guard_name: {
		type: DataTypes.STRING
	},
	created_at: {
		type: DataTypes.DATE(6)
	},
	updated_at: {
		type: DataTypes.DATE(6)
	}
}, {
	freezeTableName: true,
})

export default Roles;
