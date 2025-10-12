import "./globals.css";

export const metadata = {
  title: "My Website",
  description: "This is my homepage built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
