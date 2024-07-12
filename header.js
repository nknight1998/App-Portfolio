import React from "react";
function Header() {
    return (
        <header>
            {Noah Knight Portfolio }
            <nav>
                <ul>
                    <li><a href="/">About Me</a></li>
                    <li><a href="/about">Projects</a></li>
                    <li><a href="/services">Skills</a></li>
                    <li><a href="/contact">Experience</a></li>
                </ul>
            </nav>
        </header>
    );
}