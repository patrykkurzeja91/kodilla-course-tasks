import React from 'react';
import style from './styles.css';

const Title = (props) => (
    <div className = {style.Title} >
    <img src="../../vendor/images/react.png" alt="React logo"/>
    <img src="../../vendor/images/Webpack.png" alt="React logo"/>
<h1>Simple React&webpack to do list</h1>
<h2>Today todos:  {props.data.length}</h2>
</div>
    );
export default Title;