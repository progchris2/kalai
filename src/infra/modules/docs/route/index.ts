import { Router } from "express";
import RedocsController from "../controller/Redocs";


const router = Router()

const controller = new RedocsController()

export default [
    router.get("/", controller.convertToRedocs),
    router.get("/swagger", controller.swaggerDocument),
];