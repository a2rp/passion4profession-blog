import React from "react";
import {
    FaCoffee,
    FaCodepen,
    FaEnvelope,
    FaFacebook,
    FaGithub,
    FaGlobe,
    FaHeart,
    FaLinkedin,
    FaYoutube,
} from "react-icons/fa";
import { SiPatreon } from "react-icons/si";
import { Styled } from "./styled";

const socialLinks = [
    { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FaGlobe },
    { label: "GitHub", href: "https://github.com/a2rp", icon: FaGithub },
    { label: "CodePen", href: "https://codepen.io/ash1198", icon: FaCodepen },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/aashishranjan",
        icon: FaLinkedin,
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com/theash.ashish/",
        icon: FaFacebook,
    },
    {
        label: "YouTube",
        href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",
        icon: FaYoutube,
    },
    { label: "Email", href: "mailto:ash.ranjan09@gmail.com", icon: FaEnvelope },
];

const supportLinks = [
    {
        label: "Support",
        href: "https://a2rp-donation-page.netlify.app/",
        icon: FaHeart,
    },
    {
        label: "Buy Me a Coffee",
        href: "https://buymeacoffee.com/a2rp",
        icon: FaCoffee,
    },
    {
        label: "Patreon",
        href: "https://www.patreon.com/a2rp",
        icon: SiPatreon,
    },
];

const FooterLinks = ({ links }) => (
    <div className="linkGroup">
        {links.map(({ label, href, icon: Icon }) => (
            <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                    href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                }
                aria-label={label}
                title={label}
            >
                <Icon aria-hidden="true" />
                <span className="srOnly">{label}</span>
            </a>
        ))}
    </div>
);

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <Styled.Wrapper>
            <div className="info">
                A focused home for technical essays, computing notes, and
                practical ideas from the Passion4Profession blog.
            </div>

            <Styled.Main>
                <div className="copyright">
                    Copyright &copy; {year}{" "}
                    <a
                        href="https://www.ashishranjan.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ashish Ranjan
                    </a>
                </div>

                <div className="projectName">Passion4Profession Blog</div>

                <div className="linkGroups">
                    <FooterLinks links={socialLinks} />
                    <FooterLinks links={supportLinks} />
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default Footer;
