import Post from "./post";
import './css/style.css';
import logo from './assets/ret.jpg';
import React from 'react';
import {render} from 'react-dom';


const App = ()=>(
<div>
    <h1>test</h1>
    <h2>test2</h2>
    <img style={{width: '200px',height:'200px'}}  src="../src/assets/ret.jpg"/>

</div>
)
render(<App/>, document.getElementById('app') )





let post = new Post('Post app title', logo) 
console.log(post);