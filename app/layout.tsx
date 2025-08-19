"use client"
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import NavBar from "./pages/navbar";
import Footer from "./pages/footer";
import Preloader from "./comps/effect/Preloader";
import 'bootstrap-icons/font/bootstrap-icons.css';


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    // Ensure content is fully loaded (like DOM ready)
    const handleContentReady = () => {
      setIsLoading(false); // Mark as not loading when the content is ready
    };

    // Listen for when the DOM content is fully loaded
    if (document.readyState === "complete") {
      // If already loaded
      handleContentReady();
    } else {
      // Otherwise, listen for DOMContentLoaded event
      window.addEventListener("load", handleContentReady);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("load", handleContentReady);
      };
    }
  }, []);

  return (
    <html lang="en">
      <link rel="shortcut icon" href="/logo/favicon.ico" type="image/x-icon"></link>
      <body className={inter.className}>
        <NavBar />
        <main>
          {/* Show Preloader while main content is loading */}
          <div className="relative">
            {isLoading ? (
              <Preloader />
            ) : (
              <div id="main-content">{children}</div>
            )}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
