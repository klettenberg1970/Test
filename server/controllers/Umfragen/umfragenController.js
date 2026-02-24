import {umfragen} from './umfrageObjekt.js'

export const getUmfragen = async (req, res) => {
    
    const daten = await umfragen();
    
    res.json(daten);
};