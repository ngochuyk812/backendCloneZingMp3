const express = require('express');
const router = express.Router();
const ZingMp3 = require("../model/zingmp3")

router.get('/search', async (req,res) => {
    let name = req.query.name
    ZingMp3.search(name).then(rs => {
        if(rs.data.songs){
            let result = rs.data.songs || []
             result.forEach(async(element,index) => {
                await ZingMp3.getSong(element.encodeId).then(rsLink => {
                    try{
                        result[index] = {linkStream : rsLink.data['128'] ,id : element.encodeId, title: element.title, artistsNames: element.artistsNames, thumbnailM: element.thumbnailM}

                    }catch{
                        result[index] = {linkStream : null ,id : element.encodeId, title: element.title, artistsNames: element.artistsNames, thumbnailM: element.thumbnailM}

                    }
                    if(index === result.length - 1){
                        res.send(result.filter(tmp=>tmp.linkStream))
                    }
                })
            });

        }else{
            res.send([])

        }

    })
	
})

router.get('/get_song', (req,res) => {
    let id = req.query.id
    ZingMp3.getSong(id).then(rs => {
        res.send(rs)
    })
	
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

