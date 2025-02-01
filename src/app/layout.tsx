import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ColorStream Dynamics: Documentation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="text-[14px] sm:text-[14px]">
      <head>
        {/* generate og image */}
        <meta property="og:image" content="/frontend.png" />
        <link rel="icon" type="image/png" href="/documents.png" />
      </head>
      <body
        className={`${inter.className} flex flex-col items-center bg-black/80 overflow-x-hidden`}
      >
        <div className="w-full sm:w-[90vw] max-w-[42rem] lg:max-w-[48rem] xl:max-w-[56rem] bg-white relative overflow-hidden">
          <div className="w-full flex flex-col items-center pt-12 lg:pt-16 pb-6 md:pb-7 px-4 sm:px-10 text-sm sm:text-base">
            {children}
          </div>
          <footer className="w-full">
            <div className="flex flex-col items-center justify-center h-28">
              <p className="lg:text-lg font-bold mt-6 mb-2">
                Made by Matthew Sweeney
              </p>
              <div className="flex flex-row space-x-4 mb-4">
                <a
                  href="
                https://www.linkedin.com/in/drmatt13/"
                  className="text-blue-600 underline cursor-pointer hover:text-blue-700 visited:text-purple-600"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
