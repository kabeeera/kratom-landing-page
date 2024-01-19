import localFont from "next/font/local";
import "./globals.scss";
import Header from "./components/header";

const gotham = localFont({
  src: [
    {
      path: "fonts/GothamBook.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/GothamBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "fonts/Gotham-Black.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "fonts/GothamMedium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gotham.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
