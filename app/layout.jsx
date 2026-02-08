import "./globals.css";

export const metadata = {
    title: "My Portfolio",
    description: "Personal portfolio website",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning style={{ overflowX: 'hidden' }}>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;600;700&family=Encode+Sans+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            </head>
            <body className="min-h-screen m-0 p-0" style={{ overflowX: 'hidden' }} suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}