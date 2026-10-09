import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
    {
        name: "Github",
        href: "https://github.com/sinegrave",
        linkTitle: `Follow Afi on Github`,
        isActive: true,
    },
    {
        name: "Mail",
        href: "mailto:afidrinkscoffee@gmail.com",
        linkTitle: `Send an email to Afi`,
        isActive: true,
    },
    {
        name: "ORCID",
        href: "https://orcid.org/0000-0002-1825-0097",
        linkTitle: `Claude Shannon on ORCID`,
        isActive: true,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/afi-belgrave/",
        linkTitle: `Afi Belgrave on LinkedIn`,
        isActive: true, // Assuming Claude doesn't have a LinkedIn profile
    },
];

export const SOCIAL_ICONS: Record<string, string> = {
    Github: "Github",
    Mail: "Mail",
    Linkedin: "LinkedIn",
    "Google Scholar": "GoogleScholar",
    ORCID: "ORCID",
    RSS: "RSS",
};