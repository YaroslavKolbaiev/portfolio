import "./globals.css";
import "bulma/css/bulma.css";

export const metadata = {
  title: "Portfolio",
  description: "web page about portfolio projects",
  icons: {
    icon: "/assets/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
