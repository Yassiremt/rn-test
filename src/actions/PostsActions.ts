import {
  CREATE_POST,
  ARCHIVE_POST,
  DELETE_POST,
} from "../constants/actionTypes";

export const createPost = (data: any) => {
  return async (dispatch: (arg0: { type: any; payload?: any }) => void) => {
    dispatch({ type: CREATE_POST, payload: data });
  };
};
export const archivePost = (data: any) => {
  return async (dispatch: (arg0: { type: any; payload?: any }) => void) => {
    dispatch({ type: ARCHIVE_POST, payload: data });
  };
};
export const deletePost = (data: any) => {
  return async (dispatch: (arg0: { type: any; payload?: any }) => void) => {
    dispatch({ type: DELETE_POST, payload: data });
  };
};
