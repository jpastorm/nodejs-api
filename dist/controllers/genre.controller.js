"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
function getGenres(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        const genres = yield conn.query('SELECT * FROM genres');
        return res.json(genres[0]);
    });
}
exports.getGenres = getGenres;
;
function createGenre(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newGenre = req.body;
        console.log(newGenre);
        const conn = yield database_1.connect();
        conn.query('INSERT INTO genres SET ?', [newGenre]);
        return res.json({
            message: "Genre Created"
        });
    });
}
exports.createGenre = createGenre;
