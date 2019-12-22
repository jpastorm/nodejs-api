import {Router} from 'express'
const router=Router();

import {getGenres,createGenre,getGenre,deleteGenre,updateGenre} from '../controllers/genre.controller'

router.route('/').
    get(getGenres).
    post(createGenre);

router.route('/:genreId').
    get(getGenre).
    delete(deleteGenre).
    put(updateGenre);

export default router;
