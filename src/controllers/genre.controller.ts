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
