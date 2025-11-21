export default (req, res) => {
    res.status(200).json({
        id: req.requery.id,
        name: 'André Luis #43'
    })
}