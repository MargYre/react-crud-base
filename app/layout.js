export const metadata = {
  title: "Modular CRUD - Next.js",
  description: "A clean-code implementation of a CRUD application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* children représente tes pages (comme page.js) */}
        {children}
      </body>
    </html>
  );
}
