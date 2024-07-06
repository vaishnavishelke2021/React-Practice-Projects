import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGFjNGI3NGYyZjAwNWJkY2FhMTg1ZmZlNWFkOWJiNyIsIm5iZiI6MTcyMDI2ODgwMy43NjY1NjIsInN1YiI6IjY2ODkzNTk5M2I3MDk5OWIzZGQ1MDZiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ACpkVAMxHRnCzMbm5HyiSiZaREOPlKT-drNv1I7oMK0",
  },
});

export default instance;
