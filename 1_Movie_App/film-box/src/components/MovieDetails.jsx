import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { asyncloadmovie, removeMovie } from "../store/actions/movieActions";
import {  useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removeMovie());
    };
  });
  return (
    <div className="w-screen h-screen p-10">
      
    </div>
  );
};

export default MovieDetails;
