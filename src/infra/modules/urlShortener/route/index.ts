import { Router } from "express";
import UrlShortenerController from "../controller/UrlShortener";


const router = Router()

/*

const urlGenerator = new URLGenerator()
console.log(urlGenerator)
const repository = new ShortRepository(DatabaseSQLite.instance)
const controller = new UrlShortenerController(repository, urlGenerator)
*/



export default [
    router.get("/short/:id", UrlShortenerController.redirectUrl),
    router.post("/short_url", UrlShortenerController.generateUrl)
];