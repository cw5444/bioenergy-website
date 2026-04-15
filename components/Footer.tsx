// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-bio-dark text-gray-300 py-6 mt-12">
      <div className="container mx-auto text-center text-sm">
        © {new Date().getFullYear()} 바이오에너지연구소. All rights reserved.
      </div>
    </footer>
  );
}
