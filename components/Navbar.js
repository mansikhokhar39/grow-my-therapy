import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left: Logo / Name */}
        <Link href="/" className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">
            Grow My Therapy
          </span>
        </div>
        </Link>

        {/* Center Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-[#2f3e2f]">
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/office">Our Office</Link>
        </nav>

        {/* Right CTA */}
        <Link
          href="/contact"
          className="bg-[#c26b3c] text-white text-sm px-4 py-2 rounded-md"
        >
          Book a Consultation
        </Link>
      </div>
    </header>
  );
}
