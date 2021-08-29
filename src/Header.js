import Button from './Button'

function Header() {
    return (
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
                <Button text = "Coding Projects"/>
            </div>
            <div class="button-2-style">
                <Button text = "UX Design"/>
            </div>
            <div class="button-3-style">
                <Button text = "Brand Identity"/>
            </div>
            <div class="button-4-style">
                <Button text = "Illustration"/>
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