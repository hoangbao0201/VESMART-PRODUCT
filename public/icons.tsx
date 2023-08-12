type ClassType = {
    className: string;
};

export const IconGoogle = ({ className }: ClassType) => {
    return (
        <svg viewBox="0 0 100 100" className={className}>
            <linearGradient
                id="b"
                x1="55.41"
                x2="12.11"
                y1="96.87"
                y2="21.87"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#1e8e3e" />
                <stop offset="1" stopColor="#34a853" />
            </linearGradient>
            <linearGradient
                id="c"
                x1="42.7"
                x2="86"
                y1="100"
                y2="25.13"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#fcc934" />
                <stop offset="1" stopColor="#fbbc04" />
            </linearGradient>
            <linearGradient
                id="a"
                x1="6.7"
                x2="93.29"
                y1="31.25"
                y2="31.25"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#d93025" />
                <stop offset="1" stopColor="#ea4335" />
            </linearGradient>
            <path fill="url(#a)" d="M93.29 25a50 50 90 0 0-86.6 0l3 54z" />
            <path
                fill="url(#b)"
                d="M28.35 62.5 6.7 25A50 50 90 0 0 50 100l49-50z"
            />
            <path
                fill="url(#c)"
                d="M71.65 62.5 50 100a50 50 90 0 0 43.29-75H50z"
            />
            <path fill="#fff" d="M50 75a25 25 90 1 0 0-50 25 25 90 0 0 0 50z" />
            <path
                fill="#1a73e8"
                d="M50 69.8a19.8 19.8 90 1 0 0-39.6 19.8 19.8 90 0 0 0 39.6z"
            />{" "}
        </svg>
    );
};

export const IconDashboard = ({ className }: ClassType) => {
    {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className={className}
            >
                <rect width="7" height="9" x="3" y="3" rx="1" />
                <rect width="7" height="5" x="14" y="3" rx="1" />
                <rect width="7" height="9" x="14" y="12" rx="1" />
                <rect width="7" height="5" x="3" y="16" rx="1" />
            </svg>
        );
    }
};

export const IconLogout = ({ className }: ClassType) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className={className}
        >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" x2="9" y1="12" y2="12" />
        </svg>
    );
};

export const IconStar = ({ className }: ClassType) => {
    return (
        <svg
            width="12"
            height="12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#a)">
                <path
                    d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                    fill="#DDDDE3"
                ></path>
            </g>
            <defs>
                <clipPath id="a">
                    <path
                        fill="#fff"
                        transform="translate(1 1.5)"
                        d="M0 0h10v10H0z"
                    ></path>
                </clipPath>
            </defs>
        </svg>
    );
};

export const Icon = ({ className }: ClassType) => {
    return <></>;
};
