import "@/styles/globals.css";

export const metadata = {
  title: "Afrixpace",
  description: "Africa Online Community App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#080808]">{children}</body>
    </html>
  );
}
