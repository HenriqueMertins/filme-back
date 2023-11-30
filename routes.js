import { Router } from "express"
import { clienteCreate, clienteIndex, clienteLogin } from "./controllers/clienteController.js"
import { filmeCreate, filmeDestaca, filmeDestaques, filmeIndex, filmeShow } from "./controllers/filmeController.js"
import { avaliacaoCreate, avaliacaoDestroy, avaliacaoFilme, avaliacaoGraphDias, avaliacaoGraphEstrelas, avaliacaoIndex, dadosGerais } from "./controllers/avaliacaoController.js"

const router = Router()

router.get('/clientes', clienteIndex)
      .post('/clientes', clienteCreate)
      .post('/login', clienteLogin)

router.get('/filmes', filmeIndex)
      .get('/filmes/destaques', filmeDestaques)
      .post('/filmes', filmeCreate)
      .get('/filmes/:id', filmeShow)
      .patch('/filmes/destaca/:id', filmeDestaca)

router.get('/avaliacoes', avaliacaoIndex)
      .post('/avaliacoes', avaliacaoCreate)
      .delete('/avaliacoes/:id', avaliacaoDestroy)
      .get('/avaliacoes/graph', avaliacaoGraphEstrelas)
      .get('/avaliacoes/graph_dias', avaliacaoGraphDias)
      .get('/avaliacoes/filme/:filme_id', avaliacaoFilme)

router.get('/dados_gerais', dadosGerais)

export default router