
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
 // API Routes
router.use("/api", apiRoutes);

 // If no API routes are hit, send the React app
router.use("/",(req, res) => {
  console.log('Hitting default path')
  res.sendFile(path.join(__dirname, "../app/public/index.html"));
});

 module.exports = router;


