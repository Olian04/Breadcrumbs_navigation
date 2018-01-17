import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { style } from 'typestyle';

import { getStyleFix } from './styleFixes';

const height = 25;

const fixStyle = document.createElement('style');
fixStyle.innerHTML = getStyleFix(location.origin, height);
document.head.appendChild(fixStyle);

const container = document.createElement('div'); // The root element
document.body.insertBefore(container, document.body.firstChild); // First in body
container.className = style({
    position: 'sticky',
    top: '0px',
    width: '100vw',
    height: height,
    backgroundColor: '#f6f6f6',
    borderBottom: '#e0e0e0 solid 1px',
    paddingLeft: '10%',
    zIndex: 9999999,
    $nest: {
        "&>*": {
            position: 'relative',
            display: 'inline-block',
            height: height,
            padding: 0,
            margin: 0,
            paddingBottom: 2
        }
    }
});

/*
.sbb > .crumb > span {
    position: relative;
    top: -10%;
}
.sbb>.crumb {
    --border-color: #343536;
    --text-color: #343536;
    --background-gradient-color: transparent;
    --border-cutoff: 15px;
    --back-buffer: 20px;
    margin-left: calc(var(--back-buffer) * -1);
    position: relative;
    color: var(--text-color);
    border: 1.5px solid transparent;
    border-image: linear-gradient(to left, transparent 0%, transparent var(--border-cutoff), var(--border-color) var(--border-cutoff), transparent 100%);
    border-image-slice: 1;
    border-left: none;
    border-right: none;
    border-radius: 5% 5% 5% 5%;
    background: linear-gradient(to left, transparent 0%, transparent var(--border-cutoff), var(--background-gradient-color) var(--border-cutoff), transparent 100%);
}
.sbb > .crumb:hover {
    --text-color: orangered;
    --background-gradient-color: skyblue;
    cursor: pointer;
}

.sbb > .crumb::before {
    padding: 0;
    margin: 0;
    content: '';
    display: inline-block;
    position: relative;
    height: 10px;
    width: var(--back-buffer);
}

.sbb > .crumb:hover::after {
    z-index: -1;
}

.sbb > .crumb::after {
    padding: 0;
    margin: 0;
    content: '';
    display: inline-block;
    position: relative;
    height: 13px;
    width: 13px;
    top: 1.1px;
    left: calc(var(--border-cutoff) / -2);
    border: 1px solid transparent;
    border-radius: 10% 20% 10% 0;
    border-top-color: var(--border-color);
    border-right-color: var(--border-color);
    background-color: var(--background-gradient-color);
    z-index: 1;
    transform: rotate(45deg);
}
*/


interface IState {
    backgroundColor: string;
    crumbHeight: string;
}
class BreadcrumbsBar extends React.Component<{}, IState> {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: '#f6f6f6',
            crumbHeight: '15px'
        };
    }
    render() {
        const styles = style({
            color: 'orangered',
            $nest: {
                "&:hover": {
                    color: 'skyblue'
                }
            }
        });
        return (
            <div className={styles}>Hello</div>
        );
    }
}

ReactDOM.render(<BreadcrumbsBar/>, container);