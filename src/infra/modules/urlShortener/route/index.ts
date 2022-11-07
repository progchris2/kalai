import { Router } from "express";
import UrlShortFactory from "../../../../config/factory/UrlShortFactory";
import DatabaseSQLite from "../../../../applications/bases/database";
import URLGenerator from "../../../../domains/generator/URLGenerator";
import UrlShortenerController from "../controller/UrlShortener";
import ShortRepository from "../repository/ShortRepository";

const controller = new UrlShortFactory().getController
const router = Router()

export default [
    router.get("/api/shorturl/:id", controller.redirectUrl),
    router.post("/api/short_url", controller.generateUrl)
];