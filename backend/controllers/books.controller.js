import db from "../db.js";

export const getBooks = async (req,res) =>{
    const sqlquery = "SELECT * FROM books"
    await db.query(sqlquery,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data);
    })
}