import { Inter } from "next/font/google";
import { Grid } from "@mui/material";
import style from "./style.css";
import CardFirst from "./components/CardFirst";
import CardSecond from "./components/CardSecond";
import Footer from "./components/Footer";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Grid item xs={12} md={12}>
              <CardFirst />
            </Grid>
            <Grid item xs={12} md={12}>
              <CardSecond />
            </Grid>
          </Grid>
          {/* Right part */}
          <Grid item xs={12} md={9}>
            <div className="playlist-card">
              <Header />
              {children}
              <Footer />
            </div>
          </Grid>
        </Grid>
      </body>
    </html>
  );
}
