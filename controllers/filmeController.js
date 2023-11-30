import { Filme } from '../models/Filme.js'

export const filmeIndex = async (req, res) => {
  try {
    const filmes = await Filme.findAll()
    res.status(200).json(filmes)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const filmeDestaques = async (req, res) => {
  try {
    const filmes = await Filme.findAll({ where: { destaque: true } })
    res.status(200).json(filmes)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const filmeDestaca = async (req, res) => {
  const { id } = req.params

  try {
    // posiciona no registro para obter o status atual do campo destaque
    const filme = await Filme.findByPk(id)
    // altera com o contrário do atual
    await Filme.update({ destaque: !filme.destaque }, { where: { id } })
    res.status(200).json(filme)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const filmeCreate = async (req, res) => {
  const { titulo, genero, preco, duracao, data, classif, artista, capa, sinopse } = req.body

  // se não informou estes atributos
  if (!titulo || !genero || !preco || !duracao || !data || !classif || !artista || !capa || !sinopse) {
    res.status(400).json({ id: 0, msg: "Erro... Informe os dados" })
    return
  }

  try {
    const filme = await Filme.create({
      titulo, genero, preco, duracao, data, classif, artista, capa, sinopse
    });
    res.status(201).json(filme)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const filmeDestroy = async (req, res) => {
  const { id } = req.params

  try {
    await Filme.destroy({ where: { id } });
    res.status(200).json({ msg: "Ok! Removido com Sucesso" })
  } catch (error) {
    res.status(400).send(error)
  }
}

export const filmeShow = async (req, res) => {
  const { id } = req.params

  try {
    const filme = await Filme.findByPk(id)
    res.status(200).json(filme)
  } catch (error) {
    res.status(400).send(error)
  }
}