import React, {Component} from 'react';
import { readRemoteFile } from 'react-papaparse'

class Test extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fancy_cards: ''
        };
    }
    componentDidMount() {
        readRemoteFile(
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vTNKDBLs5ncNghesIYn2C4JlnJ5TZBNUmPZRsjAk9tyVxqoAcTs69QijdIo0Ys3_svdyCXwDlf814J5/pub?output=csv",
            {
                complete: (results) => {
                    this.setState({fancy_cards: results.data})
                }
            }
        )
    }

    render(){
        return <div>{JSON.stringify(this.state.fancy_cards)}</div>

    }

}
export default Test;
