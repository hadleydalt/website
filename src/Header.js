import Button from './Button'
import TopRightBar from './TopRightBar'

function Header() {

    const nonHoveredStyles_MainButton = {
        background: "rgba(255,211,183, .75)",
        background: "linear-gradient(90deg, rgba(255,211,183, .75) 23%, rgba(255,202,221,.75) 82%)",
        border: "0px solid transparent",
        color: "white",
        fontFamily: "'Montserrat Alternates'",
        fontSize: "15px",
        fontWeight: "bold",
        borderRadius: "15px",
        textShadow: "0px 0px 3px rgba(0, 0, 0, 0.7)",
        width: "140px",
        height: "30px",
        filter: "drop-shadow(5px 4px 10px rgba(0, 0, 0,.2))"
    }

    const hoveredStyles_MainButton = {
        background: "transparent",
        border: "1px solid white",
        color: "white",
        fontFamily: "'Montserrat Alternates'",
        fontSize: "15px",
        fontWeight: "bold",
        borderRadius: "15px",
        width: "140px",
        textShadow: "0px 0px 3px rgba(0, 0, 0, 0)",
        height: "30px",
        filter: "drop-shadow(5px 4px 10px rgba(0, 0, 0,.2))"
    }

    const nonHoveredStyles_TopButton = {
        background: "transparent",
        border: "1px solid white",
        color: "white",
        fontFamily: "'Montserrat Alternates'",
        fontSize: "15px",
        fontWeight: "bold",
        borderRadius: "15px",
        width: "140px",
        height: "30px",
        filter: "drop-shadow(5px 4px 10px rgba(0, 0, 0,.2))"
    }

    const hoveredStyles_TopButton = {
        background: "white",
        border: "0px solid transparent",
        color: "rgba(255,202,221,1)",
        fontFamily: "'Montserrat Alternates'",
        fontSize: "15px",
        fontWeight: "bold",
        borderRadius: "15px",
        width: "140px",
        height: "30px",
        filter: "drop-shadow(5px 4px 10px rgba(0, 0, 0,.2))"
    }

    return (
        <div>
            <TopRightBar />
            <div>
                <img class="title-bg" src="https://i.pinimg.com/originals/15/71/05/15710504898649f93190a5626de1a74c.jpg"></img>
                <div class="grad-circle"></div>
                <div class="header-style">.hadleyDalton()</div>
                <div class="subtext-style">Designer and coder from {<b>Brown University</b>}</div>
                <div class="cr-style">© Hadley Dalton 2021</div>
                <div class="cr-line"></div>
                <div class="solid-border-circle"></div>
                <div class="filled-circle"></div>
                <div class="dotted-circle"></div>
                <div class="title-bg-border"></div>
                <div class="button-1-style">
                    <Button nonHoveredStyles = {nonHoveredStyles_MainButton} hoveredStyles = {hoveredStyles_MainButton} text = "Coding Projects"/>
                </div>
                <div class="button-2-style">
                    <Button nonHoveredStyles = {nonHoveredStyles_MainButton} hoveredStyles = {hoveredStyles_MainButton} text = "UX Design"/>
                </div>
                <div class="button-3-style">
                    <Button nonHoveredStyles = {nonHoveredStyles_MainButton} hoveredStyles = {hoveredStyles_MainButton} text = "Brand Identity"/>
                </div>
                <div class="button-4-style">
                    <Button nonHoveredStyles = {nonHoveredStyles_MainButton} hoveredStyles = {hoveredStyles_MainButton} text = "Fine Art"/>
                </div>
            </div>
        </div>
    )
}

export default Header

/* 
https://wallpapercave.com/wp/wp5134857.png
(*) https://i.pinimg.com/originals/15/71/05/15710504898649f93190a5626de1a74c.jpg
https://wallpapercave.com/wp/wp2394254.jpg
https://c4.wallpaperflare.com/wallpaper/291/819/697/illustration-city-anime-painting-wallpaper-preview.jpg

 */