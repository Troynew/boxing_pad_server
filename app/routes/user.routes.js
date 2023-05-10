module.exports = (app) => {
	const user = require("../controllers/user.controller.js");

	var router = require("express").Router();

	// Create a new Tutorial
	router.post("/sign-up", user.signUp);
	router.post("/sign-in", user.signIn);

	app.use("/api/user", router);
};
