"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const genre_controller_1 = require("../controllers/genre.controller");
router.route('/').
    get(genre_controller_1.getGenres).
    post(genre_controller_1.createGenre);
router.route('/:genreId').
    get(genre_controller_1.getGenre).
    delete(genre_controller_1.deleteGenre).
    put(genre_controller_1.updateGenre);
exports.default = router;
