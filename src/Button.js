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
            background: "rgb(235,196,172)",
            background: "linear-gradient(180deg, rgba(235,196,172,1) 23%, rgba(212,154,175,1) 82%)",
            border: "0px solid transparent",
            color: "white",
            fontFamily: "'Montserrat Alternates'",
            fontSize: "15px",
            fontWeight: "bold",
            borderRadius: "5px",
            width: "140px",
            height: "30px",
            filter: "drop-shadow(5px 4px 10px rgba(0, 0, 0,0))"
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
            height: "30px",
            filter: "drop-shadow(5px 4px 10px rgba(0, 0, 0,0))"
        }

        return (
            <div>
                <button style = {this.state.mousedOver ? hoveredStyles : nonHoveredStyles} onMouseEnter = {this.handleMouseEnter} onMouseLeave = {this.handleMouseLeave}>{this.props.text}</button>
            </div>
        )
    }
}