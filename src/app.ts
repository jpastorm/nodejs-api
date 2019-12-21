import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
//Routes
import genreRoutes from './routes/genre.route'
export class App{
    app:Application;

    constructor(private port?:number | string){
        this.app=express();
	this.app.use(cors());
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings(){
        this.app.set('port',this.port || process.env.PORT || 3000);
    }

    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }
    routes(){
        this.app.use('/genres',genreRoutes);
    }
    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log('server on port'+this.app.get('port'));
    }
}
