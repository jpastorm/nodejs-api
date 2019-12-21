import {Router} from 'express'
const router=Router();

import {getGenres,createGenre} from '../controllers/genre.controller'

router.route('/').
    get(getGenres).
    post(createGenre);

router.route('/:genreId').
    get().
    delete().
    put();

export default router;
