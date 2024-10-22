import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

const MontserratThin = localFont({
    src: "../fonts/Montserrat/static/Montserrat-Thin.ttf",
    variable: "--font-montserrat-thin",
    weight: "100",
});

const MontserratThinItalic = localFont({
    src: "../fonts/Montserrat/static/Montserrat-ThinItalic.ttf",
    variable: "--font-montserrat-thin-italic",
    weight: "100",
});

const MontserratExtraLight = localFont({
    src: "../fonts/Montserrat/static/Montserrat-ExtraLight.ttf",
    variable: "--font-montserrat-extra-light",
    weight: "200",
});

const MontserratExtraLightItalic = localFont({
    src: "../fonts/Montserrat/static/Montserrat-ExtraLightItalic.ttf",
    variable: "--font-montserrat-extra-light-italic",
    weight: "200",
});

const MontserratLight = localFont({
    src: "../fonts/Montserrat/static/Montserrat-Light.ttf",
    variable: "--font-montserrat-light",
    weight: "300",
});

const MontserratLightItalic = localFont({
    src: "../fonts/Montserrat/static/Montserrat-LightItalic.ttf",
    variable: "--font-montserrat-light-italic",
    weight: "300",
});

const MontserratRegular = localFont({
    src: "../fonts/Montserrat/static/Montserrat-Regular.ttf",
    variable: "--font-montserrat-regular",
    weight: "400",
});

const MontserratItalic = localFont({
    src: "../fonts/Montserrat/static/Montserrat-Italic.ttf",
    variable: "--font-montserrat-italic",
    weight: "400",
});

const MontserratMedium = localFont({
    src: "../fonts/Montserrat/static/Montserrat-Medium.ttf",
    variable: "--font-montserrat-medium",
    weight: "500",
});

const MontserratMediumItalic = localFont({
    src: "../fonts/Montserrat/static/Montserrat-MediumItalic.ttf",
    variable: "--font-montserrat-medium-italic",
    weight: "500",
});

const MontserratSemiBold = localFont({
    src: "../fonts/Montserrat/static/Montserrat-SemiBold.ttf",
    variable: "--font-montserrat-semi-bold",
    weight: "600",
});

const MontserratSemiBoldItalic = localFont({
    src: "../fonts/Montserrat/static/Montserrat-SemiBoldItalic.ttf",
    variable: "--font-montserrat-semi-bold-italic",
    weight: "600",
});

const MontserratBold = localFont({
    src: "../fonts/Montserrat/static/Montserrat-Bold.ttf",
    variable: "--font-montserrat-bold",
    weight: "700",
});

const MontserratBoldItalic = localFont({
    src: "../fonts/Montserrat/static/Montserrat-BoldItalic.ttf",
    variable: "--font-montserrat-bold-italic",
    weight: "700",
});

const MontserratExtraBold = localFont({
    src: "../fonts/Montserrat/static/Montserrat-ExtraBold.ttf",
    variable: "--font-montserrat-extra-bold",
    weight: "800",
});

const MontserratExtraBoldItalic = localFont({
    src: "../fonts/Montserrat/static/Montserrat-ExtraBoldItalic.ttf",
    variable: "--font-montserrat-extra-bold-italic",
    weight: "800",
});

const MontserratBlack = localFont({
    src: "../fonts/Montserrat/static/Montserrat-Black.ttf",
    variable: "--font-montserrat-black",
    weight: "900",
});

const MontserratBlackItalic = localFont({
    src: "../fonts/Montserrat/static/Montserrat-BlackItalic.ttf",
    variable: "--font-montserrat-black-italic",
    weight: "900",
});

export const metadata: Metadata = {
    title: "DevLigths Ecommerce",
    description: "Ecommerce",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await auth();
    return (
        <html lang="en">
            <body
                className={`${MontserratThin.variable} ${MontserratThinItalic.variable}  ${MontserratExtraLight.variable} ${MontserratExtraLightItalic.variable} ${MontserratLight.variable} ${MontserratLightItalic.variable} ${MontserratRegular.variable} ${MontserratItalic.variable} ${MontserratMedium.variable} ${MontserratMediumItalic.variable} ${MontserratSemiBold.variable} ${MontserratSemiBoldItalic.variable} ${MontserratBold.variable} ${MontserratBoldItalic.variable} ${MontserratExtraBold.variable} ${MontserratExtraBoldItalic.variable} ${MontserratBlack.variable} ${MontserratBlackItalic.variable} antialiased `}
            >
                <SessionProvider session={session}>{children}</SessionProvider>
            </body>
        </html>
    );
}
