module.exports = (app) => {
	const boxing = require("../controllers/boxing.controller.js");

	var router = require("express").Router();

	// Create a new Tutorial
	router.post("/record", boxing.update);

	app.use("/api/boxing", router);
};
