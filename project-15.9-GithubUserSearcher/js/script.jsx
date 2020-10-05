class User extends React.Component {
    render() {
        return(
            <div className='col-lg-2 col-md-3 col-6'>
        <div className='user'>
            <img className='avatar' src={this.props.user.avatar_url}/>
            <a href={this.props.user.html_url} target="_blank">{this.props.user.login}</a>
        </div>
        </div>
        );
        
    }
}
class UsersList extends React.Component {
    get users() {
        return this.props.users.map(user => <User key={user.id} user={user} />);
    }
    render() {
        return (
            <div className='users row text-center'>{this.users}</div>
        );
    }
}
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            searchText: '',
            users: []
        };
    }
    onChangeHandle(event) {
        this.setState({
            searchText: event.target.value
        });
    }
    onSubmit(event) {
        event.preventDefault();
        const {
            searchText
        } = this.state;
        const url = `https://api.github.com/search/users?q=${searchText}`;
        fetch(url)
            .then(response => response.json())
            .then(responseJson => this.setState({
                users: responseJson.items
            }));
    }
    render() {
        return (
        <div>
            <form onSubmit={event=> this.onSubmit(event)}>
                <label htmlFor="searchText"><a href='http://github.com'><i className="fab fa-github"></i></a></label>
                <input type="text" id="searchText" onChange={event=> this.onChangeHandle(event)} placeholder="Search on GitHub" value={this.state.searchText}/>
            </form>
            <UsersList users={this.state.users}/>
        </div>
        )
        
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);