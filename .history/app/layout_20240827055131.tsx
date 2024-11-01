import "@/styles/globals.css";
import Provider from "@/components/provider";
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
      <body className="bg-[#080808]">
        <Provider>
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
