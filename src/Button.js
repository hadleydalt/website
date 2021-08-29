import React from 'react'

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mousedOver : false
        }
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter() {
        this.setState({mousedOver : true})
    }

    handleMouseLeave() {
        this.setState({mousedOver : false})
    }

    render() {
        const nonHoveredStyles = {
            background: "rgba(255,211,183, 1)",
            background: "linear-gradient(180deg, rgba(255,211,183, 1) 23%, rgba(255,202,221,1) 82%)",
            border: "0px solid transparent",
            color: "white",
            fontFamily: "'Montserrat Alternates'",
            fontSize: "15px",
            fontWeight: "bold",
            borderRadius: "5px",
            textShadow: "0px 0px 3px rgba(0, 0, 0, 0.7)",
            width: "140px",
            height: "30px",
            filter: "drop-shadow(5px 4px 10px rgba(0, 0, 0,.4))"
        }

        const hoveredStyles = {
            background: "transparent",
            border: "1px solid white",
            color: "white",
            fontFamily: "'Montserrat Alternates'",
            fontSize: "15px",
            fontWeight: "bold",
            borderRadius: "5px",
            width: "140px",
            textShadow: "0px 0px 3px rgba(0, 0, 0, 0.7)",
            height: "30px",
            filter: "drop-shadow(5px 4px 10px rgba(0, 0, 0,.4))"
        }

        return (
            <div>
                <button style = {this.state.mousedOver ? hoveredStyles : nonHoveredStyles} onMouseEnter = {this.handleMouseEnter} onMouseLeave = {this.handleMouseLeave}>{this.props.text}</button>
            </div>
        )
    }
}