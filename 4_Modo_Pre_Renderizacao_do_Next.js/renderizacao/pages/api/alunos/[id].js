export default function handler(req, res) {
    const id = +req.query.id
    res.status(200).json({
        id,
        nome: `Andre Luis Kunert ${id}`,
        email: `altecno${id}@gmail.com`,
        profissao: `Técnico em Informática e Analista de TI e Sistemas`
    })
}