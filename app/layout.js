import Header from "@/app/_components/Header";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome | The Wild Oasis",
  },
  description:
    "Luxurios cabin hotel, located in teh heart of the Italian Dolomites",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={josefin.className}>
      <body
        className={`${josefin.className} bg-primary-950 antialiased text-primary-100 min-h-screen relative  flex flex-col`}
      >
        <Header />
        <div className="flex-1 px-8 p-12">
          <main className={`max-w-7xl mx-auto w-full `}>{children}</main>
        </div>
      </body>
    </html>
  );
}
