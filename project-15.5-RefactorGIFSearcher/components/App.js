App = React.createClass({
            getInitialState() {
                return {
                    loading: false,
                    searchingText: '',
                    gif: {}
                }
            },
    getGif: function (searchingText) {
        return new Promise(
            (resolve, reject) => {
                var GIPHY_PUB_KEY = '9LN3KUK64aJxrced35tycgw3Y3GB2gA6'
                var GIPHY_API_URL = 'https://api.giphy.com';
                var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;
                var xhr = new XMLHttpRequest();
                xhr.open('GET', url);
                xhr.onload = () => {
                    if (xhr.status === 200) {
                        var data = JSON.parse(xhr.responseText).data;
                        var gif = {
                            url: data.image_original_url,
                            sourceUrl: data.url
                        };
                        resolve(gif);
                    } else {
                        reject(new Error(xhr.statusText));
                    }
                };
                xhr.send();
            }
        )
    },
    handleSearch: function(searchingText) {
        this.setState({
            loading: true
        });
        this.getGif(searchingText)
            .then((gif) => {
                this.setState({
                    loading: false,
                    gif: gif,
                    searchingText: searchingText
                });
            });
    },
    render: function() {
        var styles = {
            margin: '0 auto',
            textAlign: 'center',
            width: '90%'
        };
 return (
<div style={styles}>
    <h1> GIF Searcher
        </h1>
            <p> Search for GIF on
                <a href="http://giphy.com"> giphy.com
                    </a>. Press enter to find next gif</p>
                        <Search onSearch={ this.handleSearch } />
                        <Gif loading={ this.state.loading } url={ this.state.gif.url } sourceUrl={ this.state.gif.sourceUrl
                            } />
                        </div>
        )
    }
});