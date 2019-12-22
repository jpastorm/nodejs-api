import {Request,Response} from 'express'
import {connect} from '../database'
import {Genre} from '../interfaces/genre.interface'

export async function getGenres(req:Request,res:Response):Promise<Response>{
    const conn=await connect();
    const genres=await conn.query('SELECT * FROM genres')
    return res.json(genres[0]);
};

export async function createGenre(req:Request,res:Response){
    const newGenre:Genre=req.body;
    console.log(newGenre);
    const conn=await connect();
    conn.query('INSERT INTO genres SET ?',[newGenre]);
    return res.json({
        message:"Genre Created"
    });
}

export async function getGenre(req:Request,res:Response):Promise<Response>
{
    const id=req.params.genreId;
    const conn=await connect();
    const genres=await conn.query('SELECT * FROM genres WHERE gen_id = ?',[id]);
    return res.json(genres[0]);
}

export async function deleteGenre(req:Request,res:Response):Promise<Response>
{
    const id=req.params.genreId;
    const conn=await connect();
    await conn.query('DELETE FROM genres WHERE gen_id=?',[id]);

    return res.json({
        message:'Post deleted' 
    });
}
export async function updateGenre(req:Request,res:Response){
    const id=req.params.genreId;
    const updateGenre:Genre=req.body;
    console.log(updateGenre);
    const conn=await connect();
    conn.query('UPDATE genres set ? WHERE gen_id= ?',[updateGenre,id]);
    return res.json({
        message:'Post updated' 
    });
}
