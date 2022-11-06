import {Express, Router} from 'express'
import DatabaseSQLite from 'src/applications/bases/database';


export default class Routes {
  constructor(
    private readonly app: Express, 
    private readonly routesList: Router[]
  ){}

  public launcher(): void {
    for(let routeController of this.routesList) {
      this.app.use(routeController, (req, res, next) => {
          next()
      })
    }
  }
}
