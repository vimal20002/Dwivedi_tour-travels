import { UserModal } from "../modals/userSchema.js"
import { adminModal } from "../modals/adminModal.js"
import bcrypt from "bcryptjs"
export const register = async (req, res) => {
    try {
        let user = await UserModal.findOne({ email: req.body.email })
        // console.log(user)
        if (user !== null) {
            res.send("User Already Exists");
        }
        else {
            const salt = await bcrypt.genSalt(10)
            const hpass = await bcrypt.hash(req.body.password, salt);
            // console.log(req.body)
            const nuser = new UserModal({ ...req.body, password: hpass });
            console.log(nuser)
            await nuser.save();
            res.json(nuser);
        }

    } catch (error) {
        res.send(error)
    }

}
