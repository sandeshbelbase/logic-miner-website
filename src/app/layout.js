
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


export const metadata = {
  title: "Logic Miners",
  description: "Mining Smarters Solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
