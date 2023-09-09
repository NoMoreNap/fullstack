import { validateAuth, createUser } from "./controllers"

import Router from 'express'

const router = Router.Router()


router.post('/auth', validateAuth)
router.post('/sigup', createUser)



export const userRouter = router
