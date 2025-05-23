import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-center py-4 px-12 bg-white shadow-sm sticky top-0 z-50">
      {/* Navigation - centered */}
      <nav className="hidden md:flex gap-8 text-base font-medium text-gray-700">
        <Link href="#why" className="hover:text-primary">Why Micro Grants?</Link>
        <Link href="#timeline" className="hover:text-primary">Timeline</Link>
        <Link href="#incentives" className="hover:text-primary">Incentives</Link>
        <Link href="#how" className="hover:text-primary">How It Works</Link>
        <Link href="#faq" className="hover:text-primary">FAQ</Link>
        <Link href="#stay-informed" className="hover:text-primary">Stay Informed</Link>
      </nav>
    </header>
  );
} 