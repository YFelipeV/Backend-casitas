import {Router} from 'express'
import { CasasArrendadasCanceladas } from '../controllers/casas.js'
import { authUsuario, getUsuario, registerUsu, updateUsuario } from '../controllers/usuarios.js'

const router=Router()

router.post("/registerusuario",registerUsu)
router.post("/loginusuario",authUsuario)
router.get("/perfil/:id",getUsuario)
router.patch("/perfi/:id",updateUsuario)
router.patch("/estado/:id",CasasArrendadasCanceladas)

export default router;