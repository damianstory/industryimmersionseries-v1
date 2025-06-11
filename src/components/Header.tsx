import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between py-4 px-12 bg-white shadow-sm sticky top-0 z-50">
      {/* Logo - left side */}
      <div className="flex items-center">
        <Link href="/">
          <img 
            src="https://i.imgur.com/nMI6kHR.png" 
            alt="Industry Immersion Series Logo" 
            className="h-8 w-auto cursor-pointer hover:opacity-80 transition-opacity"
          />
        </Link>
      </div>

      {/* Navigation - centered */}
      <nav className="hidden md:flex gap-8 text-base font-medium text-gray-700">
        <Link href="#how" className="hover:text-[#0092ff]">How It Works</Link>
        <Link href="#why" className="hover:text-[#0092ff]">Why Micro Grants?</Link>
        <Link href="#timeline" className="hover:text-[#0092ff]">Timeline</Link>
        <Link href="#incentives" className="hover:text-[#0092ff]">Incentives</Link>
        <Link href="#faq" className="hover:text-[#0092ff]">FAQ</Link>
        <Link href="#sponsors" className="hover:text-[#0092ff]">Sponsors</Link>
        <Link href="#stay-informed" className="hover:text-[#0092ff]">Stay Informed</Link>
      </nav>

      {/* Logo - right side */}
      <div className="flex items-center justify-end">
        <Link href="/">
          <img 
            src="https://i.imgur.com/oFmdCeW.png" 
            alt="Right Logo" 
            className="h-8 w-auto cursor-pointer hover:opacity-80 transition-opacity"
          />
        </Link>
      </div>
    </header>
  );
} 