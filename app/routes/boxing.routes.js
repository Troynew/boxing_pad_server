module.exports = (app) => {
	const boxing = require("../controllers/boxing.controller.js");

	var router = require("express").Router();

	// Create a new Tutorial
	router.post("/record", boxing.update);
	router.get("/record/find", boxing.find);
	router.get("/record", boxing.all);

	app.use("/api/boxing", router);
};
