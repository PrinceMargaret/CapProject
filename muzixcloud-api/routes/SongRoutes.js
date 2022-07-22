import express from 'express';
const router=express.Router();
import {SearchTrack, TopArtists, TopTracks, TopAlbums, gettoptracksByTag,  ArtistSearch, GetSimilarTags, WeeklyChartList,GetTopArtist,getTrack} from '../controllers/SongControllers.js';


router.post('/search', SearchTrack);
router.get("/topArtists", TopArtists);
router.get("/topTracks", TopTracks);
router.post("/topAlbums", TopAlbums);




router.post("/artistSearch", ArtistSearch);
router.post("/getSimilarTags", GetSimilarTags);
router.post("/weeklyChartList", WeeklyChartList);


router.get("/getTrack", getTrack);
router.get("/GetTopArtist", GetTopArtist);



 export  default router;

