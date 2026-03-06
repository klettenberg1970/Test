const portfoliodaten = {
    "NVIDIA":1000,
    "Apple":20,
}

export const getPortfolio = async(req,res) =>{
    res.json(portfoliodaten);
}

