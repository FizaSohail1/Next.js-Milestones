import Footer from "./components/Footer/page";
import Navbar from "./components/Navbar/page";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-900">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
