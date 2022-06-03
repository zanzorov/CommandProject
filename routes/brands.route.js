const { Router } = require("express");
const brandController = require("../controllers/brands.controller.js");

const router = Router();

router.post("/brands", brandController.postBrand);
router.patch("/brands/:id", brandController.patchBrand);
router.delete("/brands/:id", brandController.deleteBrand);

module.exports = router;
