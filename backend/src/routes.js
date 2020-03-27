const express = require('express')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')


const routes = express.Router()

//Rotas de Controlo de Sessão
routes.post('/sessions', SessionController.create)
//Rotas para Funcionalidades das ONG's
routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)
//Rotas para Funcionalidades dos Casos/Incidents
routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)
//Rotas para Funcionalidades de Perfil(ong, casos)
routes.get('/profile', ProfileController.index)



module.exports = routes