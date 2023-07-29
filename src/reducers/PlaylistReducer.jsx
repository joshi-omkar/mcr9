export const initialState = {
  playlist: [],
};

export const initialStateVideo = {
  video: [],
};

export const PlaylistReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        playlist: [...state.playlist, { title: action.payload, videos: [] }],
      };

    case "remove":
      const data = state.playlist.filter(
        (item) => item.title !== action.payload
      );
      return { playlist: data };

    case "add-video":
      const playlist1 = state.playlist.find(
        (item) => item?.title === action.payload?.title
      );

      console.log(playlist1)
      return {
        playlist: [
          ...state.playlist,
          {
            title: playlist1.title,
            video: [...playlist1?.data, action.payload],
          },
        ],
      };

    default:
      return { playlist: [] };
  }
};

export const PlaylistVideoReducer = (state, action) => {
  switch (action.type) {
    case "add-video":
      return {
        playlist: [
          ...state.video,
          {
            title: state.playlist.title,
            video: [...state.playlist, action.playload],
          },
        ],
      };

    default:
      return { playlist: [] };
  }
};
