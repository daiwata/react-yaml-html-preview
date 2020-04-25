import React from 'react';
import jsyaml from 'js-yaml';
import { defaultValue } from './defaultValue';
import { obj2html } from './obj2html';

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            yml: jsyaml.dump(defaultValue),
            out: obj2html(defaultValue),
        }
    }

    render() {
        return (
            <div>
                <h1>YAML HTML Preview</h1>
                <span>
                    <a href="https://github.com/daiwata/react-yaml-html-preview" target="_blank">GitHub</a>
                    ｜
                    <a href="https://marketplace.visualstudio.com/items?itemName=daiwata.yaml-preview" target="_blank">VS Code Extension</a>
                </span>
                <hr />
                <table>
                    <tbody>
                        <tr>
                            <td valign="top">
                                <span>↓ Input YAML</span><br />
                                <textarea
                                    rows='40'
                                    cols='60'
                                    onChange={this.handleChange}
                                    defaultValue={this.state.yml}>
                                </textarea>
                            </td>
                            <td valign="top">
                                <span>↓ Realtime HTML Preview</span><br />
                                <div dangerouslySetInnerHTML={
                                    { __html: this.state.out }
                                } />
                            </td>
                        </tr>
                    </tbody>
                </table >
            </div>
        )
    }

    handleChange = event => {
        try {
            this.setState({
                out: obj2html(
                    jsyaml.safeLoad(event.target.value)
                )
            })
        } catch (e) {
            // Nothing to do
        }
    };
}