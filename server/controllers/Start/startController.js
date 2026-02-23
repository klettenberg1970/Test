

export const getStart = async (req, res) => {
    
    const start = "Das ist die Startseite";
    
    res.json({
        start: start,
    });
};