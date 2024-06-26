'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import {config} from "../config"
import { WagmiProvider } from "wagmi"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient();

export default function RootLayout({
    children,
}: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <html lang="en">
                    <body className={inter.className}>{children}</body>
                </html>
            </QueryClientProvider>
        </WagmiProvider>
    );
}
