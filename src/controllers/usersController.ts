import { Request, Response } from "express"

class UserController {
   async index(request: Request, response: Response) {
    return response.status(200).json({ok: true})
   }
}

export default new UserController()