import './App.css';
import Alert from './Alert';
import React from 'react'
import logo from './logo.svg';
import StarWarsPeople from './StarWarsPeople';

export default class App extends React.Component {

render() {
    return (
    <div className="App">
        <StarWarsPeople></StarWarsPeople>

    </div>
);
}
}
