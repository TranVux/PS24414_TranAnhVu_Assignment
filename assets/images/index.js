import * as React from "react"
import Svg, { Rect, G, Path, Defs, ClipPath, LinearGradient, Circle, Stop } from "react-native-svg"
import { Colors } from "../constants/Colors"

function IconHidePassword(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_5384_2617)">
                <Path d="M17.882 19.297A10.949 10.949 0 0112 21c-5.392 0-9.878-3.88-10.82-9a10.982 10.982 0 013.34-6.066L1.393 2.808l1.415-1.415 19.799 19.8-1.415 1.414-3.31-3.31zM5.935 7.35A8.965 8.965 0 003.223 12a9.005 9.005 0 0013.2 5.838l-2.027-2.028A4.5 4.5 0 018.19 9.604L5.935 7.35zm6.979 6.978l-3.242-3.242a2.5 2.5 0 003.24 3.241l.002.001zm7.893 2.264l-1.431-1.43a8.934 8.934 0 001.4-3.162A9.006 9.006 0 009.553 5.338L7.974 3.76C9.22 3.27 10.58 3 12 3c5.392 0 9.878 3.88 10.819 9a10.946 10.946 0 01-2.012 4.592zm-9.084-9.084a4.5 4.5 0 014.769 4.769l-4.77-4.769z" />
            </G>
            <Defs>
                <ClipPath id="clip0_5384_2617">
                    <Path d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

function IconClose(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_5547_2690)">
                <Path
                    d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z"
                    fill={props.fill}
                // "#C30052"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_5547_2690">
                    <Path fill="#000" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

function IconWarning(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_5547_2694)">
                <Path
                    d="M8 15.167A6.667 6.667 0 118 1.834a6.667 6.667 0 010 13.333zm0-1.334A5.333 5.333 0 108 3.166a5.333 5.333 0 000 10.667zM7.333 10.5h1.334v1.333H7.333V10.5zm0-5.333h1.334v4H7.333v-4z"
                    fill="#C30052"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_5547_2694">
                    <Path fill="#000" transform="translate(0 .5)" d="M0 0H16V16H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

function IconGoogle(props) {
    return (
        <Svg
            width={25}
            height={24}
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M23.001 12.233c0-.863-.071-1.493-.226-2.147h-10.06v3.897h5.905c-.119.968-.762 2.427-2.19 3.407l-.02.13 3.18 2.415.22.021c2.024-1.831 3.191-4.526 3.191-7.723z"
                fill="#4285F4"
            />
            <Path
                d="M12.715 22.5c2.893 0 5.321-.933 7.095-2.543l-3.381-2.567c-.905.618-2.12 1.05-3.714 1.05a6.438 6.438 0 01-6.096-4.363l-.125.01-3.307 2.508-.044.118c1.762 3.43 5.381 5.787 9.572 5.787z"
                fill="#34A853"
            />
            <Path
                d="M6.62 14.077A6.347 6.347 0 016.263 12c0-.723.13-1.423.345-2.077l-.006-.139-3.349-2.548-.11.05A10.339 10.339 0 002.002 12c0 1.692.417 3.29 1.143 4.713l3.476-2.636z"
                fill="#FBBC05"
            />
            <Path
                d="M12.715 5.56c2.012 0 3.369.852 4.143 1.563L19.88 4.23c-1.857-1.692-4.273-2.73-7.166-2.73-4.19 0-7.81 2.357-9.572 5.787l3.465 2.636a6.465 6.465 0 016.107-4.363z"
                fill="#EB4335"
            />
        </Svg>
    )
}

function IconFacebook(props) {
    return (
        <Svg
            width={25}
            height={24}
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={12.5} cy={12} r={10.5} fill="url(#paint0_linear_5547_2581)" />
            <Path
                d="M16.41 15.211l.467-2.963h-2.918v-1.923c0-.81.407-1.602 1.714-1.602H17V6.2S15.796 6 14.645 6c-2.404 0-3.974 1.42-3.974 3.989v2.259H8v2.963h2.671v7.165a10.856 10.856 0 003.288 0V15.21h2.451z"
                fill="#fff"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_5547_2581"
                    x1={12.5}
                    y1={1.5}
                    x2={12.5}
                    y2={22.4377}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#18ACFE" />
                    <Stop offset={1} stopColor="#0163E0" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

function IconBack(props) {
    return (
        <Svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M3.828 7H16v2H3.828l5.364 5.364-1.414 1.414L0 8 7.778.222l1.414 1.414L3.828 7z"
                fill="#4E4B66"
            />
        </Svg>
    )
}

function IconChangeAvatar(props) {
    return (
        <Svg
            width={30}
            height={30}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect width={30} height={30} rx={15} fill="#1877F2" />
            <Path
                d="M7 10.368c0-.464.364-.842.794-.842h14.412c.439 0 .794.375.794.842v11.79c0 .465-.364.842-.794.842H7.794a.76.76 0 01-.305-.065.795.795 0 01-.258-.182.876.876 0 01-.23-.595v-11.79zm1.6.842v10.106h12.8V11.21H8.6zm8 7.58a2.34 2.34 0 001.697-.74c.45-.474.703-1.117.703-1.787 0-.67-.253-1.312-.703-1.786a2.34 2.34 0 00-1.697-.74 2.34 2.34 0 00-1.697.74 2.595 2.595 0 00-.703 1.786c0 .67.253 1.313.703 1.786.45.474 1.06.74 1.697.74zm0 1.684a3.9 3.9 0 01-2.828-1.234 4.325 4.325 0 01-1.172-2.977c0-1.117.421-2.188 1.172-2.977a3.9 3.9 0 012.828-1.233 3.9 3.9 0 012.828 1.233c.75.79 1.172 1.86 1.172 2.977a4.325 4.325 0 01-1.172 2.977 3.9 3.9 0 01-2.828 1.234zM8.6 7h4.8v1.684H8.6V7z"
                fill="#fff"
            />
        </Svg>
    )
}

function IconSearch(props) {
    return (
        <Svg
            width={21}
            height={21}
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M9 0c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"
                fill="#4E4B66"
            />
        </Svg>
    )
}

function IconOption(props) {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_6089_1530)">
                <Path
                    d="M6.17 18a3 3 0 015.66 0H22v2H11.83a3 3 0 01-5.66 0H2v-2h4.17zm6-7a3 3 0 015.66 0H22v2h-4.17a3 3 0 01-5.66 0H2v-2h10.17zm-6-7a3.001 3.001 0 015.66 0H22v2H11.83a3 3 0 01-5.66 0H2V4h4.17zM9 6a1 1 0 100-2 1 1 0 000 2zm6 7a1 1 0 100-2 1 1 0 000 2zm-6 7a1 1 0 100-2 1 1 0 000 2z"
                    fill="#4E4B66"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_6089_1530">
                    <Path fill="#fff" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

function IconNotify(props) {
    return (
        <Svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G filter="url(#filter0_d_37_4339)">
                <Rect x={0} y={0} width={32} height={32} rx={6} fill="#fff" />
                <Path x={-10} y={-10}
                    d="M19 31.25h14v-6.969c0-3.883-3.134-7.031-7-7.031s-7 3.148-7 7.031v6.969zm7-16c4.97 0 9 4.043 9 9.031v8.969H17v-8.969c0-4.988 4.03-9.031 9-9.031zm-2.5 19h5a2.5 2.5 0 01-5 0z"
                    fill="#000"
                />
            </G>
            <Defs></Defs>
        </Svg>
    )
}

function AppLogo(props) {
    return (
        <Svg
            width={99}
            height={30}
            viewBox="0 0 99 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M0 29V8.957h4.04v8.9l8.163-8.9h5.433L10.1 16.764 18.045 29h-5.228l-5.5-9.406-3.277 3.35V29H0zM24.749 18.91l-3.48-.629c.39-1.403 1.064-2.442 2.02-3.117.955-.674 2.375-1.012 4.258-1.012 1.711 0 2.985.205 3.822.616.837.4 1.424.916 1.761 1.544.346.62.519 1.764.519 3.432l-.041 4.485c0 1.276.059 2.219.177 2.83.128.601.36 1.248.696 1.941h-3.794c-.1-.255-.223-.634-.369-1.135a6.918 6.918 0 00-.136-.45c-.655.637-1.356 1.116-2.102 1.435a6.013 6.013 0 01-2.39.478c-1.492 0-2.67-.405-3.534-1.217-.856-.81-1.284-1.836-1.284-3.076 0-.82.196-1.55.587-2.187a3.788 3.788 0 011.638-1.477c.71-.346 1.73-.647 3.058-.902 1.793-.338 3.035-.652 3.726-.944v-.382c0-.739-.182-1.263-.546-1.573-.364-.319-1.05-.478-2.06-.478-.683 0-1.216.137-1.598.41-.382.264-.691.734-.928 1.408zm5.132 3.117c-.491.164-1.27.36-2.334.588-1.064.228-1.76.451-2.088.67-.5.356-.75.807-.75 1.354 0 .537.2 1.002.6 1.394.4.392.91.588 1.528.588.692 0 1.352-.228 1.98-.683.464-.347.769-.77.914-1.272.1-.328.15-.953.15-1.873v-.766zM64.304 30H43.338a4.489 4.489 0 01-3.177-1.318 4.503 4.503 0 01-1.316-3.182v-24A1.501 1.501 0 0140.343 0h20.966a1.497 1.497 0 011.498 1.5v18h5.99v6a4.503 4.503 0 01-1.316 3.182A4.489 4.489 0 0164.304 30zm-1.497-7.5v3a1.502 1.502 0 001.497 1.5 1.496 1.496 0 001.498-1.5v-3h-2.995zM59.81 27V3h-17.97v22.5a1.502 1.502 0 001.497 1.5h16.473zM44.836 7.5h11.98v3h-11.98v-3zm0 6h11.98v3h-11.98v-3zm0 6h7.488v3h-7.488v-3zM76.665 18.91l-3.48-.629c.39-1.403 1.064-2.442 2.02-3.117.955-.674 2.375-1.012 4.258-1.012 1.711 0 2.985.205 3.822.616.837.4 1.424.916 1.761 1.544.346.62.519 1.764.519 3.432l-.041 4.485c0 1.276.059 2.219.177 2.83.128.601.36 1.248.696 1.941h-3.794a14.15 14.15 0 01-.369-1.135 6.918 6.918 0 00-.136-.45c-.656.637-1.356 1.116-2.102 1.435a6.012 6.012 0 01-2.39.478c-1.491 0-2.67-.405-3.534-1.217-.856-.81-1.284-1.836-1.284-3.076 0-.82.196-1.55.587-2.187a3.788 3.788 0 011.638-1.477c.71-.346 1.73-.647 3.058-.902 1.793-.338 3.035-.652 3.726-.944v-.382c0-.739-.182-1.263-.546-1.573-.364-.319-1.05-.478-2.06-.478-.683 0-1.216.137-1.598.41-.382.264-.691.734-.928 1.408zm5.132 3.117c-.491.164-1.27.36-2.334.588-1.064.228-1.76.451-2.088.67-.5.356-.75.807-.75 1.354 0 .537.2 1.002.6 1.394.4.392.91.588 1.529.588.691 0 1.35-.228 1.979-.683.464-.347.769-.77.914-1.272.1-.328.15-.953.15-1.873v-.766zM93.445 29h-3.836V14.48h3.563v2.065c.61-.975 1.155-1.618 1.638-1.928a3.056 3.056 0 011.665-.465c.873 0 1.715.242 2.525.725l-1.188 3.35c-.646-.42-1.246-.63-1.801-.63-.537 0-.992.151-1.365.452-.373.291-.67.825-.888 1.6-.209.774-.313 2.397-.313 4.867V29z"
                fill="#1877F2"
            />
        </Svg>
    )
}

function IconTime(props) {
    return (
        <Svg
            width={14}
            height={14}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_6282_656)">
                <Path
                    d="M7 12.833A5.833 5.833 0 117 1.167a5.833 5.833 0 010 11.666zm0-1.166a4.666 4.666 0 100-9.333 4.666 4.666 0 000 9.333zM7.583 7h2.334v1.167h-3.5V4.083h1.166V7z"
                    fill="#4E4B66"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_6282_656">
                    <Path fill="#fff" d="M0 0H14V14H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

function IconMoreOption(props) {
    return (
        <Svg
            width={12}
            height={2}
            viewBox="0 0 12 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M1.625.125A.878.878 0 00.75 1c0 .481.394.875.875.875A.878.878 0 002.5 1a.878.878 0 00-.875-.875zm8.75 0A.878.878 0 009.5 1c0 .481.394.875.875.875A.878.878 0 0011.25 1a.878.878 0 00-.875-.875zM6 .125A.878.878 0 005.125 1c0 .481.394.875.875.875A.878.878 0 006.875 1 .878.878 0 006 .125z"
                fill="#4E4B66"
            />
        </Svg>
    )
}

function IconBookmark(props) {
    return (
        <Svg
            width={16}
            height={21}
            viewBox="0 0 16 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M1 0h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L8 16.03.766 20.566A.5.5 0 010 20.143V1a1 1 0 011-1zm13 2H2v15.432l6-3.761 6 3.761V2z"
                fill="#4E4B66"
            />
        </Svg>
    )
}

function IconCommentOutline(props) {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_79_6392)">
                <Path
                    d="M2 8.994A5.99 5.99 0 018 3h8c3.313 0 6 2.695 6 5.994V21H8c-3.313 0-6-2.695-6-5.994V8.994zM20 19V8.994A4.004 4.004 0 0016 5H8a3.99 3.99 0 00-4 3.994v6.012A4.004 4.004 0 008 19h12zm-6-8h2v2h-2v-2zm-6 0h2v2H8v-2z"
                    fill="#4E4B66"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_79_6392">
                    <Path fill="#fff" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}


function IconHome(props) {
    return (
        <Svg
            width={24}
            height={25}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_7245_6568)">
                <Path
                    d="M13 19.5h6v-9.022l-7-5.444-7 5.444V19.5h6v-6h2v6zm8 1a1 1 0 01-1 1H4a1 1 0 01-1-1V9.99a1 1 0 01.386-.79l8-6.222a1 1 0 011.228 0l8 6.222a1 1 0 01.386.79V20.5z"
                    fill="#4E4B66"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_7245_6568">
                    <Path fill="#fff" transform="translate(0 .5)" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

function IconHomeActive(props) {
    return (
        <Svg
            width={24}
            height={25}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_78_6205)">
                <Path
                    d="M21 20.5a1 1 0 01-1 1H4a1 1 0 01-1-1V9.99a1 1 0 01.386-.79l8-6.222a1 1 0 011.228 0l8 6.222a1 1 0 01.386.79V20.5zm-10-7v6h2v-6h-2z"
                    fill="#1877F2"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_78_6205">
                    <Path fill="#fff" transform="translate(0 .5)" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

function IconExploreActive(props) {
    return (
        <Svg
            width={24}
            height={25}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_78_6834)">
                <Path
                    d="M12 22.5c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zM15.5 9l-5 2-2 5 5-2 2-5z"
                    fill="#1877F2"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_78_6834">
                    <Path fill="#fff" transform="translate(0 .5)" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

function IconExplore(props) {
    return (
        <Svg
            width={24}
            height={25}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_7245_6427)">
                <Path
                    d="M12 22.5c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16.001A8 8 0 0012 20.5zM15.5 9l-2 5-5 2 2-5 5-2z"
                    fill="#4E4B66"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_7245_6427">
                    <Path fill="#fff" transform="translate(0 .5)" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

function IconBookmarkActive(props) {
    return (
        <Svg
            width={24}
            height={25}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_78_6850)">
                <Path
                    d="M5 2.5h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.53l-7.234 4.536A.5.5 0 014 22.643V3.5a1 1 0 011-1z"
                    fill="#1877F2"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_78_6850">
                    <Path fill="#fff" transform="translate(0 .5)" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

function IconProfileActive(props) {
    return (
        <Svg
            width={24}
            height={25}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_78_6936)">
                <Path
                    d="M12 2.5c5.52 0 10 4.48 10 10s-4.48 10-10 10-10-4.48-10-10 4.48-10 10-10zM6.023 15.916c1.468 2.19 3.672 3.584 6.137 3.584 2.464 0 4.669-1.393 6.136-3.584A8.968 8.968 0 0012.16 13.5a8.968 8.968 0 00-6.137 2.416zM12 11.5a3 3 0 100-6 3 3 0 000 6z"
                    fill="#1877F2"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_78_6936">
                    <Path fill="#fff" transform="translate(0 .5)" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

function IconProfile(props) {
    return (
        <Svg
            width={24}
            height={25}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_7245_6654)">
                <Path
                    d="M12 22.5c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm-4.987-3.744A7.966 7.966 0 0012 20.5a7.97 7.97 0 005.167-1.892A6.978 6.978 0 0012.16 16.5a6.982 6.982 0 00-5.147 2.256zM5.616 17.32a8.975 8.975 0 016.544-2.82 8.972 8.972 0 016.362 2.634 8 8 0 10-12.906.187v-.001zM12 13.5a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"
                    fill="#4E4B66"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_7245_6654">
                    <Path fill="#fff" transform="translate(0 .5)" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

function IconShare(props) {
    return (
        <Svg
            width={19}
            height={22}
            viewBox="0 0 19 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M11.12 16.023l-4.199-2.29a4 4 0 110-5.465l4.2-2.29a4 4 0 11.959 1.755l-4.2 2.29a4.008 4.008 0 010 1.954l4.199 2.29a4 4 0 11-.959 1.755v.001zM4 13a2 2 0 100-4 2 2 0 000 4zm11-6a2 2 0 100-4 2 2 0 000 4zm0 12a2 2 0 100-4 2 2 0 000 4z"
                fill="#4E4B66"
            />
        </Svg>
    )
}

function IconPlus(props) {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M12 5v14M5 12h14"
                stroke={props.colorBg ? props.colorBg : "#1877F2"}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

function IconHeartFill(props) {
    return (
        <Svg
            width={21}
            height={19}
            viewBox="0 0 21 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M15 0c3.038 0 5.5 2.5 5.5 6 0 7-7.5 11-10 12.5C8 17 .5 13 .5 6 .5 2.5 3 0 6 0c1.86 0 3.5 1 4.5 2 1-1 2.64-2 4.5-2z"
                fill="#ED2E7E"
            />
        </Svg>
    )
}

function IconHeartOutline(props) {
    return (
        <Svg
            width={21}
            height={19}
            viewBox="0 0 21 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_5_2)">
                <Path
                    d="M10.146 2.354l.354.353.354-.353C11.794 1.414 13.314.5 15 .5c2.732 0 5 2.245 5 5.5 0 3.307-1.769 5.934-3.905 7.949-1.895 1.786-4.028 3.045-5.373 3.838l-.222.131-.222-.131c-1.345-.793-3.478-2.052-5.372-3.838C2.769 11.934 1 9.307 1 6 1 2.747 3.304.5 6 .5c1.686 0 3.206.913 4.146 1.854z"
                    stroke="#ED2E7E"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_5_2">
                    <Path fill="#fff" d="M0 0H21V19H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

function IconSetting(props) {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_82_10018)">
                <Path
                    d="M12 1l9.5 5.5v11L12 23l-9.5-5.5v-11L12 1zm0 2.311L4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311zM12 16a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"
                    fill="#050505"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_82_10018">
                    <Path fill="#fff" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

function IconAddPic(props) {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_85_5127)">
                <Path
                    d="M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 012 20.007V3.993A1 1 0 012.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 110-4 2 2 0 010 4z"
                    fill="#4E4B66"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_85_5127">
                    <Path fill="#fff" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

function IconTypography(props) {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_85_5116)">
                <Path
                    d="M11.246 15H4.754l-2 5H.6L7 4h2l6.4 16h-2.154l-2-5zm-.8-2L8 6.885 5.554 13h4.892zM21 12.535V12h2v8h-2v-.535a4 4 0 110-6.93zM19 18a2 2 0 100-4 2 2 0 000 4z"
                    fill="#4E4B66"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_85_5116">
                    <Path fill="#fff" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

function IconTextAlign(props) {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_85_5132)">
                <Path
                    d="M3 4h18v2H3V4zm0 15h14v2H3v-2zm0-5h18v2H3v-2zm0-5h14v2H3V9z"
                    fill="#4E4B66"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_85_5132">
                    <Path fill="#fff" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

function IconEdit(props) {
    return (
        <Svg
            width={14}
            height={14}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_88_6878)">
                <Path
                    d="M9.175 5.65l-.825-.825-5.433 5.433v.825h.825L9.175 5.65zm.824-.825l.825-.824L10 3.176 9.175 4l.824.824zM4.224 12.25H1.75V9.775l7.837-7.837a.583.583 0 01.825 0l1.65 1.65a.584.584 0 010 .825L4.225 12.25z"
                    fill="#4E4B66"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_88_6878">
                    <Path fill="#fff" d="M0 0H14V14H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

const FallBackImage = require("./fallback.png")

export { IconEdit, IconAddPic, IconTextAlign, IconTypography, IconSetting, IconHeartFill, IconPlus, IconShare, IconProfile, IconProfileActive, IconBookmarkActive, IconExplore, IconExploreActive, IconHomeActive, IconHome, IconBookmark, IconHeartOutline, IconCommentOutline, IconMoreOption, IconTime, AppLogo, IconNotify, IconHidePassword, IconClose, IconWarning, IconGoogle, IconFacebook, IconBack, IconChangeAvatar, FallBackImage, IconSearch, IconOption }
