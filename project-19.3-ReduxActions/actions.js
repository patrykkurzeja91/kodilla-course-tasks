import uuid from 'uuid';

const ADD_COMMENT = 'ADD_COMMENT',
    REMOVE_COMMENT = 'REMOVE_COMMMENT',
    EDIT_COMMENT = 'EDIT_COMMENT',
    THUMB_UP_COMMENT = 'THUMB_UP_COMMENT',
    THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

    function addComment(text) {
        return {
            type: ADD_COMMENT,
            text,
            id: uuid.v4()
        }
      }
      function removeComment(id) {
          return {
              type: REMOVE_COMMENT,
              id: id
          }
      }
      function editComment(text,id) {
        return {
            type: EDIT_COMMENT,
            text,
            id: id
        }
      }
      function thumbUp(id) {
        return {
            type: THUMB_UP_COMMENT,
            id: id
        }
      }
      function thumbDown(id) {
        return {
            type: THUMB_DOWN_COMMENT,
            id: id
        }
      }

      
const boundAddComment = text => dispatch(addComment(text));
const boundEditComment = (text, id) => dispatch(editComment(text, id));
export  const boundremoveComment = id => dispatch(removeComment(id));
const boundThumbUpComment = id => dispatch(thumbUpComment(id));
const boundThumbDownComment = id => dispatch(thumbDownComment(id));