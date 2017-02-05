import React from 'react';
import keydown, { Keys } from 'react-keydown';
import shuffle from 'shuffle-array';
import ColorBlock from './ColorBlock';
import colors from '../json/colors.json'

class App extends React.Component {
    constructor() {
        super();
        this.colors = shuffle(colors); 
        this.state = {
            showAll: true
        }
    }
    componentDidMount() {
        this.showAll();
    }
    @keydown(Keys.SPACE)
    showAll() {
        this.setState({
            showAll: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    showAll: false
                })
            }, 100)
        })
    }
    render() {
        let className = this.state.showAll ?
            "show-all" :
            "";
        return <div id="App" className={className}>
            {
                this.colors.map(color => <ColorBlock word={color.ru} color={color.color} />)
            }
        </div>
    }
}

export default App;