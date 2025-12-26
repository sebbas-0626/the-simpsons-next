  "use client";

  import Link from "next/link";
  import { usePathname } from "next/navigation";
  import { useState } from "react";
  import { rockSalt } from "@/app/layout";
  import GitHub from "./ui/GitHub";

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Characters", href: "/characters" },
    { label: "Episodes", href: "/episodes" },
    { label: "Locations", href: "/locations" },
  ];

  export default function Header() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
      <header className="sticky top-0 z-50 bg-white text-black shadow-md">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <h1
            className={`${rockSalt.className} text-2xl sm:text-3xl md:text-4xl font-bold flex items-center gap-2 text-yellow-400 drop-shadow-[0_6px_24px_rgba(250,204,21,0.85)]`}
          >
            🍩 <Link href="/">The Simpsons</Link>
          </h1>

          {/* Botón mobile */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Menú */}
          <ul
            className={`fixed inset-0 z-40
              md:static top-16 left-0 w-full md:w-auto
              bg-white md:bg-transparent
              flex flex-col md:flex-row
              items-center gap-6
              transition-all
              ${open ? "block" : "hidden"}
              md:flex
            `}
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`
                    px-3 py-2 rounded-md font-medium
                    hover:bg-gray-100 drop-shadow-[0_4px_12px_rgba(250,204,21,0.6)]
                    ${
                      pathname === item.href
                        ? "text-yellow-400 font-semibold"
                        : "text-gray-900"
                    }
                  `}
                >
                  {item.label}
                </Link>
              </li>
            ))}
             {/* GitHub logo */}
          <a
            href="https://github.com/sebbas-0626/the-simpsons-next"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 drop-shadow-[0_4px_12px_rgba(250,204,21,0.6)]"
          >
            <GitHub />
          </a>
          </ul>
         
        </nav>
      </header>
    );
  }
