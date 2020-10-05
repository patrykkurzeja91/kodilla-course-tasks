// import User from 'User.jsx';
var User = require('User.jsx').User;
class UsersList extends React.Component {
    get users() {
        return this.props.users.map(user => <User key={user.id} user={user} />);
    }
    render() {
        return (
            <div>{this.users}</div>
        );
    }
}
exports.UsersList = UsersList