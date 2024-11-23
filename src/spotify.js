

export const  authEndpoint =
 "https://accounts.spotify.com/authorize";

//  const redirectUri = "http://localhost:3000/";
 const clientId = "6a4bd163f6924fe5923321f68d895ab5";
//  const clientId =    "31vppvkvvusalidqt3zpp6g23a34";


 const redirectUri = "http://localhost:3000/";
 
const scopes = [
  
    "user-read-playback-position",
    "user-read-email",
    "user-library-modify",
    "playlist-modify-public",
    "ugc-image-upload",
    "user-follow-modify",
    "user-modify-playback-state",
    "user-read-recently-played",
    "user-read-private",
    "user-library-read",
    "user-top-read",
    "playlist-modify-private",
    "user-follow-read",
    "user-read-playback-state",
    "user-read-currently-playing",
    "playlist-read-private",
    "playlist-read-collaborative",

];



    export const getTokenFromResponse = () => {
      return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
          var parts = item.split("=");
          initial[parts[0]] = decodeURIComponent(parts[1]);
          return initial;
        }, {});
};
// console.log(getTokenFromUrl);

  export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;