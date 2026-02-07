import "./globals.css";

export const metadata = {
    title: "My Portfolio",
    description: "Personal portfolio website",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="min-h-screen w-full m-0 p-0">
                {children}
            </body>
        </html>
    );
}