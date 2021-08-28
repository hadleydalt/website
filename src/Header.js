import React from "react";

export default class Header extends React.Component {
    render(){
        return (
            <div>
                <img class="title-bg" src="https://images.fineartamerica.com/images-medium-large/pastel-sky-john-bartosik.jpg"></img>
                <div class="circle"></div>
                <div class="header-style">.hadleyDalton</div>
                <div class="subtext-style">Designer and coder from {<b>Brown University</b>}</div>
            </div>
        )
    }
}