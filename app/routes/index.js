const router = require("express").Router();

const calculationRoutes = require("./calculation.routes");
const ruleRoutes = require("./rule.routes");
const accountRoutes = require("./account.routes");
const faqRoutes = require("./faq.routes");
const projectRoutes = require("./project.routes");

module.exports = router;

router.use("/accounts", accountRoutes);
router.use("/calculations", calculationRoutes);
router.use("/projects", projectRoutes);
router.use("/rules", ruleRoutes);
router.use("/faq", faqRoutes);
