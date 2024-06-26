import { Inter, Outfit } from "next/font/google";
import "./globals.css";
const outfit = Outfit({ subsets: ["latin"] });
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
export const metadata = {
  title: "CustosCloud",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <main>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
