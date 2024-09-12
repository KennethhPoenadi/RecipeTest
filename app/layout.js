import "@/app/globals.css";

const backgroundImageSrc = '/image.png';

export const metadata = {
  title: "Recipe Test",
  description: "All in one website RECIPE!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div
          style={{
            backgroundImage: `url(${backgroundImageSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
            width: '100%',
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
