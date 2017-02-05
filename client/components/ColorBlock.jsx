import React from 'react';

class ColorBlock extends React.Component {
    constructor() {
        super()
        this.state = {
            reveal: false
        }
    }
    render() {
        let { color, word } = this.props;
        if (!color.match(/^#/)) {
            color = `#${color}`;
        }
        let style = {
            backgroundColor: color
        }
        return <div className="ColorBlock" style={style}>
            <div>{word}</div>
        </div>
    }
}

export default ColorBlock;