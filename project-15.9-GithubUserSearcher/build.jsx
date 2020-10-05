'use strict';

var _App = require('./components/App.jsx');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

ReactDOM.render(React.createElement(_App2.default, null), document.querySelector('#root')); // class User extends React.Component {
//     render() {
//         return(
//         <div className='user'>
//             <img className='avatar' src={this.props.user.avatar_url} style={{maxWidth: '100px'}}/>
//             <a href={this.props.user.html_url} target="_blank">{this.props.user.login}</a>
//         </div>
//         );

//     }
// }
// class UsersList extends React.Component {
//     get users() {
//         return this.props.users.map(user => <User key={user.id} user={user} />);
//     }
//     render() {
//         return (
//             <div>{this.users}</div>
//         );
//     }
// }
// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             searchText: '',
//             users: []
//         };
//     }
//     onChangeHandle(event) {
//         this.setState({
//             searchText: event.target.value
//         });
//     }
//     onSubmit(event) {
//         event.preventDefault();
//         const {
//             searchText
//         } = this.state;
//         const url = `https://api.github.com/search/users?q=${searchText}`;
//         fetch(url)
//             .then(response => response.json())
//             .then(responseJson => this.setState({
//                 users: responseJson.items
//             }));
//     }
//     render() {
//         return (
//         <div>
//             <form onSubmit={event=> this.onSubmit(event)}>
//                 <label htmlFor="searchText">Search by user name</label>
//                 <input type="text" id="searchText" onChange={event=> this.onChangeHandle(event)} value={this.state.searchText}/>
//             </form>
//             <UsersList users={this.state.users}/>
//         </div>
//         )

//     }
// }
