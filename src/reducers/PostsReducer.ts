import {
  CREATE_POST,
  ARCHIVE_POST,
  DELETE_POST,
} from "../constants/actionTypes";

const INITIAL_STATE = {
  posts: [],
  archived: [],
  deleted: [],
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    case ARCHIVE_POST:
      return {
        ...state,
        archived: [action.payload, ...state.archived],
        posts: state.posts.filter((p: any) => p.title !== action.payload.title),
      };
    case DELETE_POST:
      return {
        ...state,
        deleted: [action.payload, ...state.deleted],
        posts: state.posts.filter((p: any) => p.title !== action.payload.title),
      };

    default:
      return state;
  }
};
