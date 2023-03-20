const usercontroller = require("../controllers/usercontroller")
const ordercontroller = require("../controllers/ordercontroller")
const paymentcontroller =require("../controllers/paymentcontroller")

const router = require ("express").Router()

router.post("/addUser",usercontroller.addUser)
router.get("/allUser",usercontroller.getallUser)
router.get("/oneUser",usercontroller.getoneUser)
router.put("/updateUser",usercontroller.updateUser)
router.delete("/deleteUser",usercontroller.deleteUser)
router.get("/loginUser",usercontroller.loginUser)
router.post("/addorder",ordercontroller.addorder)
router.get("/allorder",ordercontroller.getallorder)
router.get("/oneorder",ordercontroller.getoneorder)
router.put("/updateorder",ordercontroller.updateorder)
router.delete("/deleteorder",ordercontroller.deleteorder)
router.post("/payments",paymentcontroller.createpayment)

module.exports = router;