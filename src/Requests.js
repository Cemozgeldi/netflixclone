const key = "895a461c4011fd0f79f627f10974ecc9";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=horror`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};
export default requests;
