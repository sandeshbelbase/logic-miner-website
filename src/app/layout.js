import "./globals.css";
import Header from "./components/Header";


export const metadata = {
  title: "Logic Miners",
  description: "Mining Smarters Solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
