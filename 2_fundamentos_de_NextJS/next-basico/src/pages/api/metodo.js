const metodo = (req, res) =>{
    if(req.method === 'GET') {
         res.status(200).json({nome: "Juca_Piruca"})
    } else{
          res.status(200).json({nome: "Juca_Pe_Fedorento"})
    }

}
export default metodo