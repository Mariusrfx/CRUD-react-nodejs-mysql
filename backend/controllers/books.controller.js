import db from "../db.js";

export const getBooks = async (req,res) =>{
    const sqlquery = "SELECT * FROM books"
    await db.query(sqlquery,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data);
    })
}

export const postBooks = async (req,res) =>{
    const sqlquery = 'INSERT INTO books(`title`, `desc`, `cover`) VALUES (?)';
    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover
    ]

    db.query(sqlquery,[values],(error,data)=>{
        if (error) return res.json(error);
        return res.json("The book has been created successfully")
    })
}

export const updateBooks = async (req,res) =>{
    const sqlquery = 'UPDATE books SET `title`=?, `desc`=?, `cover`=? WHERE id=?';
    const id = req.params.id
    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover
    ]

    db.query(sqlquery,[...values,id],(error,data)=>{
        if (error) return res.json(error);
        return res.json("The book has been updated successfully")
    })
}