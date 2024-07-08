import express from "express";
const router=express.Router();

import { handleCreateTasks,
    handleGetTasks,
 } from "../controllers/controllers.tasks.js";


router.post("/",handleCreateTasks)
router.get("/",handleGetTasks)

export  {
    router,
};
