export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  lists:null,

// token:'BQANfP1_dd00rLZuymvr8v_sn9b26GYHl1hhYpTbsfH026L7Zld_Jfz2zgP7FtpJQOtMSUnKkXmQ-OoVovFink_1bhpqpmZSBozcqAdXzhq7clO0rcksyr9BFpswELNZBe-Ycv1gwzAybw-06ehLgUFEm1-feHBo8RDQu-BU20f6uK3-UmNvAVlApYaA86Wv-PSdrdVFPL5Ijg1RFxq4uDQ0BN24'
// ,
};

const reducer = (state,action)=>{
    console.log(action);
    switch(action.type){
        case "SET_USER":
          return {
            ...state,
            user:action.user
          };
          default :
          return state;

          case "SET_TOKEN":
          return{
            ...state,
            token: action.token,
          }
          case "SET_PLAYLISTS":
            return {
              ...state,
              playlists: action.playlists,
            }
            case "SET_DISCOVER_WEEKLY":
              return {
                ...state,
                discover_weekly: action.discover_weekly,
              };

    }

}
 export  default reducer;