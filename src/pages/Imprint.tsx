import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Imprint = () => {
  useEffect(() => {
    document.title = "Imprint — GerhartStudios";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-2xl">
        <h1 className="text-3xl font-bold mb-8">Imprint</h1>

        <p className="text-muted-foreground mb-6">
          This website is operated under the legal information provided by OnThePixel.net.
          Please refer to the official imprint for all legally required details:
        </p>

        <a
          href="https://onthepixel.net/imprint"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-primary underline hover:text-primary/80 transition-colors text-lg mb-8"
        >
          https://onthepixel.net/imprint
        </a>

        <p className="text-xs text-muted-foreground mt-8">
          <Link to="/" className="hover:text-primary transition-colors">← Back to Home</Link>
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Imprint;
