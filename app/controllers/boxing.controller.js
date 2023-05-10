const db = require("../models");
const Boxing = db.boxing;

// Create and Save a new boxing record
exports.create = (req, res) => {
	const boxingData = {
		email: req.body.email,
		name: req.body.name,
		amount: req.body.amount,
	};

	Boxing.create(boxingData)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Some error occurred while save data",
			});
		});
};

exports.update = (req, res) => {
	const email = req.body.email;
	Boxing.update(req.body, {
		where: { email },
	})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: "Tutorial was updated successfully.",
				});
			} else {
				Boxing.create(req.body).then((data) => {
					res.send(data);
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: "Error updating Tutorial with id=" + id,
			});
		});
};
