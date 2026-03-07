

export const checkPasswort = (req, res) => {
    const usereingabe = req.body.password;
     const correctPassword = process.env.PORTFOLIO_PASSWORD;
     
    console.log(usereingabe)
    if (usereingabe === correctPassword) {
        res.json({ message: true })
    } else {
        res.json({ message: false })
    }

}
