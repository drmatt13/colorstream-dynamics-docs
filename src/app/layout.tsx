import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kinesis Stream: CI/CD Edition",
  openGraph: {},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col items-center bg-black/80`}
      >
        <div className="w-full md:w-[650px] lg:w-[900px] bg-white">
          {children}
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
