import { Router } from "express";

import { TYPES } from "../../../../core/container/types";
import { container } from "../../../../core/container/inversify.config";
import UrlShortenerController from "../controller/UrlShortener";

const router = Router()
const controller = container.get<UrlShortenerController>(TYPES.UrlShortenerController);


export default [
    router.get("/api/shorturl/:id", controller.redirectUrl),
    router.post("/api/short_url", controller.generateUrl)
];