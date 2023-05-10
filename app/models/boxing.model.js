module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define("boxing", {
		email: {
			type: Sequelize.STRING,
		},
		name: {
			type: Sequelize.STRING,
		},
		amount: {
			type: Sequelize.STRING,
		},
	});

	return User;
};
