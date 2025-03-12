import { fetchFromTMDB } from "../services/tmdb.service.js"
import { User } from "../models/user.model.js";

export async function getPerson(req, res){
    const { query } = req.params;
    try{
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`);
        if(data.results.length === 0){
            res.status(404).send(null);
        }
        await User.findByIdAndUpdate(req.user._id, {
            $push:{
                searchHistory: {
                    id:data.results[0].id,
                    image:data.results[0].profile_path,
                    title:data.results[0].name,
                    searchType:"person",
                    createdAt: new Date()
                }
            }
        });
    res.status(200).json({success:true, content: data.results});
    }catch(error){
        res.status(500).json({success:false, message:"Internal Server Error"});
    }
}

export async function getMovie(req, res){
    const { query } = req.params;
    try{
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`);
        if(data.results.length === 0){
            res.status(404).send(null);
        }
        await User.findByIdAndUpdate(req.user._id, {
            $push:{
                searchHistory: {
                    id:data.results[0].id,
                    image:data.results[0].poster_path,
                    title:data.results[0].title,
                    searchType:"movie",
                    createdAt: new Date()
                }
            }
        });
    res.status(200).json({success:true, content: data.results});
    }catch(error){
        res.status(500).json({success:false, message:"Internal Server Error"});
    }
}

export async function getTv(req, res){
    const { query } = req.params;
    try{
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`);
        if(data.results.length === 0){
            res.status(404).send(null);
        }
        await User.findByIdAndUpdate(req.user._id, {
            $push:{
                searchHistory: {
                    id:data.results[0].id,
                    image:data.results[0].poster_path,
                    title:data.results[0].name,
                    searchType:"tv",
                    createdAt: new Date()
                }
            }
        });
        res.status(200).json({success:true, content: data.results});
    }catch(error){
        console.log(error);
        res.status(500).json({success:false, message:"Internal Server Error"});
    }
}