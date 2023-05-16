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
					code: 1,
					message: "Record was updated successfully.",
				});
			} else {
				Boxing.create(req.body).then((data) => {
					res.send(data);
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: "Error updating Record with id=" + id,
			});
		});
};

exports.find = (req, res) => {
	const email = req.query.email;
	Boxing.findOne({
		where: { email: email },
	})
		.then((data) => {
			console.log("find-data", data);
			if (data) {
				res.send({
					code: 1,
					data: data,
				});
			} else {
				res.send({
					code: 1,
					data: {},
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: "find Error" + err,
				email,
			});
		});
};

exports.all = (req, res) => {
	Boxing.findAll()
		.then((data) => {
			res.send({
				code: 1,
				data: data || [],
			});
		})
		.catch((err) => {
			res.status(500).send({
				message: "find Error",
			});
		});
};
