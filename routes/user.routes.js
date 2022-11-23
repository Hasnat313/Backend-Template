
import { Router } from "express";
const route = Router();
import {
    login,
    add,
    // update,
    // updatePassword,
    get,
    // del,
    // block,
    // unblock,
    // verifyOtp,
    // getAll,
    // getByEmail,
    // changePassword,
    uploadPfp,
} from "../controllers/userController.js";

import imageUploader from "../utils/profilePictureUploader.js";
// import auth from "../middleware/auth.js";

// route.get("/getAll", getAll);
// route.get("/get/:id", get);
route.put("/add", add);
route.post("/login", login);
route.get("/get/:id", get);


route.put(
    "/uploadPfp",
    [(...rest) => imageUploader("profile-photo", ...rest)],
    uploadPfp
);

export default route;
