import { Router } from "express";

import shortUrlRoute from '../../infra/modules/urlShortener/route'
import docsRoute from '../../infra/modules/docs/route'

// map app routes
export default [
    ...shortUrlRoute,
    ...docsRoute
]