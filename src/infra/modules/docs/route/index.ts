import { Router } from "express";
import RedocsController from "../controller/Redocs";


const router = Router()

export default [
    router.get("/", RedocsController.convertToRedocs),
    router.get("/swagger", RedocsController.swaggerDocument),
];