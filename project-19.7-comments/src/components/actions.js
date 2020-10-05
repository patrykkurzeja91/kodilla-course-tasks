import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT',
    REMOVE_COMMENT = 'REMOVE_COMMMENT',
    EDIT_COMMENT = 'EDIT_COMMENT',
    THUMB_UP_COMMENT = 'THUMB_UP_COMMENT',
    THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

    export function addComment(text) {
        return {
            type: ADD_COMMENT,
            text,
            id: uuid.v4()
        }
      }
    export function removeComment(id) {
          return {
              type: REMOVE_COMMENT,
              id: id
          }
      }
    export function editComment(text,id) {
        return {
            type: EDIT_COMMENT,
            text,
            id: id
        }
      }
    export function thumbUp(commentId) {
        return {
            type: THUMB_UP_COMMENT,
            id: commentId
        }
      }
    export function thumbDown(commentId) {
        return {
            type: THUMB_DOWN_COMMENT,
            id: commentId
        }
      }