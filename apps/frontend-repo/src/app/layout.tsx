// app/layout.tsx (Client Component with Redux Provider)
"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store, { persistor }from "../../store/store";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider store={store} >
        <PersistGate loading={null} persistor={persistor}>
          {children}
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
