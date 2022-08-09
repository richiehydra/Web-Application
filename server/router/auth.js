const express = require("express");

const Info = require("../UserSchema/UserSchema");
require("../UserSchema/UserSchema")
const router = express.Router();



//register with promises
router.post("/signup", (req, res) => {
    const { name, email, number, work, password, cpassword } = req.body;
    if (!name || !email || !number || !work || !password || !cpassword)
    {
        return res.json({ error: "Please Fill All detailes" });
    }
    if(password!=cpassword)
    {
        return res.json({Error:"Please Enter Valid Credentials"})
    }
    const info = new Info({ name, email, number, work, password, cpassword })
    info.save().then(() =>
     {
        res.json({ message: "SuccesFully Registred" })
    }).catch((err) => 
    {
        res.json("Failed to Register")
    })
})
//login with async and await
router.post("/login", async (req, res) =>
 {
    const { email, password } = req.body;
    if (!email || !password) 
    {
        res.json({ error: "Please Give Valid Credentiaals" });
    }
    const userLogin = await Info.findOne({ email: email })
    if (userLogin == null || userLogin.password!=password)
     {
        res.json({ error: "Please Give Valid Credentiaals" })
    }
 else
 {
     res.json({message:"successfully logged in"})
 }

})
module.exports = router;