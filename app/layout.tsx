import { FC, ReactNode } from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const font = Poppins({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const metadata: Metadata = {
	title: "MMA Word - Rekrutacja",
	description: "Aplikacja stworzona do portfolio - AB Web Project.",
};

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<html lang="pl">
			<body className={font.className}>{children}</body>
		</html>
	);
};

export default RootLayout;
