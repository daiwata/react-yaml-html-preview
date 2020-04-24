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
            <table>
                <tbody>
                    <tr>
                        <td>
                            <textarea
                                rows='50'
                                cols='50'
                                onChange={this.handleChange}
                                defaultValue={this.state.yml}>
                            </textarea>
                        </td>
                        <td valign="top">
                            <div dangerouslySetInnerHTML={{ __html: this.state.out }} />
                        </td>
                    </tr>
                </tbody>
            </table >
        )
    }

    handleChange = event => {
        try {
            this.setState({ out: obj2html(jsyaml.safeLoad(event.target.value)) })
        } catch (e) {
            // Nothing to do
        }
    };
}