import React from 'react';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: "sample" };
    }

    render() {
        return (<h2>{this.state.name}</h2>);
    }
}