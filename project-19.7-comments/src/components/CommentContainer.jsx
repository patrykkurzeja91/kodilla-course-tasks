import {connect} from 'react-redux';
import Comment from './Comment.jsx';
import {thumbUp, thumbDown} from './actions';

const mapDispatchToProps = dispatch => ({
    thumbUp: (id) => dispatch(thumbUp(id)),
    thumbDown: (id) => dispatch(thumbDown(id))
});

export default connect(null, mapDispatchToProps) (Comment);