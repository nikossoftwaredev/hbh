import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { TOKEN_ADDRESS, TOKEN_NAME, TOKEN_SYMBOL } from "@/data/config";

export const metadata: Metadata = {
  title: `${TOKEN_NAME} (${TOKEN_SYMBOL})`,
  description: TOKEN_NAME,
  robots: "index, follow",
  openGraph: {
    title: TOKEN_NAME,
    description: TOKEN_NAME,
    images: "/images/background.png",
  },
  twitter: {
    title: TOKEN_NAME,
    description: TOKEN_NAME,
    images: "/images/background.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <script src="https://terminal.jup.ag/main-v1.js"></script>
      </head>
      <body className="min-h-screen h-screen  font-grandstander">
        <Header />
        <div
          // style={style}
          className="bg-base-300 w-full flex flex-col items-center justify-center "
        >
          <div className="w-full p-1 max-w-7xl mt-[110px] ">{children}</div>
        </div>
      </body>
    </html>
  );
}
