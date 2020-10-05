import {connect} from 'react-redux';
import CommentsList from './CommentsList.jsx';

const mapStateToProps = state => ({
    comments: state.comments
});

export default connect(mapStateToProps) (CommentsList);