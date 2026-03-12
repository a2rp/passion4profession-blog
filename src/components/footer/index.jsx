import React from "react";
import { Styled } from "./styled";

const Footer = () => {
    return (
        <Styled.Wrapper>
            <div className="info">
                New writing space for the Passion4Profession blog project. Built
                for fresh articles, notes, and technical essays.
            </div>

            <Styled.Main>
                <div className="left">
                    © {new Date().getFullYear()} | All rights reserved
                </div>

                <div className="center">Passion4Profession Blog</div>

                <div className="right">
                    By&nbsp;
                    <a
                        href="https://www.ashishranjan.net"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ashish Ranjan
                    </a>
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default Footer;
