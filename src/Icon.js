import React from 'react'

export default class Icon extends React.Component {
    constructor() {
        super();
        this.state = {
            hovered : false
        }
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }


    handleMouseEnter() {
        this.setState({hovered : true});
    }

    handleMouseLeave() {
        this.setState({hovered : false});
    }

    render() {

        const styles = {
            background: "transparent",
            border: "0px"
        }

        return (
            <div>
            <button style={styles} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            <svg
                xmlns={"http://www.w3.org/2000/svg"}
                width={this.props.type === "GitHub" ? "32" : "35"}
                height="35"
                viewBox="0 0 24 24"
                fill={this.state.hovered ? "transparent" : "white"}
                stroke="white"
                stroke-width={this.state.hovered ? "1" : "0"}
                stroke-linecap="round"
                stroke-linejoin="round"
                filter="drop-shadow(3px 3px 7px rgba(0, 0, 0,0.3))"
            >
                <path d={this.props.path} />
                <rect x={this.props.type === "LinkedIn" ? "2" : "0"} y={this.props.type === "LinkedIn" ? "9" : "0"} width={this.props.type === "LinkedIn" ? "4" : "0"} height={this.props.type === "LinkedIn" ? "12" : "0"} />
                <circle cx={this.props.type === "LinkedIn" ? "4" : "0"} cy={this.props.type === "LinkedIn" ? "4" : "0"} r={this.props.type === "LinkedIn" ? "2" : "0"} />
            </svg>
            </button>
            <div class="icon-text">{this.props.type}</div>
            </div>
        )
    }
}

/** path:
 * "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
 */