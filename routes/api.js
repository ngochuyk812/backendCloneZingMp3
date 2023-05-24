const express = require('express');
const router = express.Router();
const ZingMp3 = require("../model/zingmp3")

router.get('/search', (req,res) => {
    let name = req.query.name
    ZingMp3.search(name).then(rs => res.send(rs))
	
})

router.get('/get_song', (req,res) => {
    let id = req.query.id
    ZingMp3.getSong(id).then(rs => res.send(rs))
	
})


router.get('/get_info_song', (req,res) => {
    let id = req.query.id
    ZingMp3.getInfoSong(id).then(rs => res.send(rs))
	
})

router.get('/get_list_artist_song', (req,res) => {
    let id = req.query.id
    ZingMp3.getListArtistSong(id).then(rs => res.send(rs))
	
})
router.get('/', (req,res) => {
    let id = req.query.id
    ZingMp3.getHome().then(rs => res.send(rs))
	
})
router.get('/get_detail_playlist', (req,res) => {
    let id = req.query.id
    ZingMp3.getDetailPlaylist(id).then(rs => res.send(rs))
	
})

router.get('/get_lyric', (req,res) => {
    let id = req.query.id
    ZingMp3.getLyric(id).then(rs => res.send(rs))
	
})


module.exports = router;

