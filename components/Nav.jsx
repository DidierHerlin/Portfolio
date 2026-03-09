"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
    { href: "/", name: "Acceuil" },
    { href: "/services", name: "Services" },
    { href: "/resume", name: "Parcours" },
    { href: "/work", name: "Projets" },
    { href: "/contact", name: "contact" },
];

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
             {Links.map((link, index) => (
                <Link 
                    href={link.href} 
                    key={index} 
                    className={`${link.href === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}
                >
                    {link.name}
                </Link>
             ))}
        </nav>
    );
};

export default Nav;