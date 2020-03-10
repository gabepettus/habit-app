const router = require("express").Router();
const habitRoutes = require("./habits");
const rewardRoutes = require("./rewards");
const userRoutes = require("./userRoutes");
const starRoutes = require("./stars");

router.use("/habits", habitRoutes);
router.use("/rewards", rewardRoutes);
router.use("/users", userRoutes);
router.use("/stars", starRoutes);

module.exports = router;