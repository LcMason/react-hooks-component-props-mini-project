import React from "react";

function Header({blog}) {
    console.log(blog)
    return (
        <div>
            <header>
                <h1>{blog}</h1>
            </header>
        </div>
    )
}







export default Header;