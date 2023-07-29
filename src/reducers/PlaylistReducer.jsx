export const initialState = {
  playlist: [],
};

export const PlaylistReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        playlist: [...state.playlist, { title: action.payload }],
      };

    case "remove":
      const data = state.playlist.filter(
        (item) => item.title !== action.payload
      );
      return { playlist: data };

    default:
      return { playlist: [] };
  }
};
