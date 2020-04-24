import React from 'react';
import jsyaml from 'js-yaml';
import { defaultValue } from './defaultValue';
const obj2html = require('./obj2html.js');

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            yml: jsyaml.dump(defaultValue),
            out: obj2html.obj2html(defaultValue),
        }
    }

    render() {
        return (
            <table>
                <tr>
                    <td><textarea rows='50' cols='50' onChange={this.handleChange}>{this.state.yml}</textarea></td>
                    <td valign="top">
                        <div dangerouslySetInnerHTML={{ __html: this.state.out }} />
                    </td>
                </tr>
            </table >
        )
    }

    handleChange = event => {
        this.setState({ out: obj2html.obj2html(jsyaml.safeLoad(event.target.value)) })
    };
}