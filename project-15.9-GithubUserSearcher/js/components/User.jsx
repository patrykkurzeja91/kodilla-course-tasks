class User extends React.Component {
    render() {
        return(
        <div>
            <img src={this.props.avatar_url} style={{maxWidth: '100px'}}/>
            <a href={this.props.html_url} target="_blank">{this.props.user.login}</a>
        </div>
        );
        
    }
}
exports.User = User