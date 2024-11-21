'use client';

import Link from "next/link";
import {usePathname} from "next/navigation";
import {BookOpenCheck, HomeIcon} from "lucide-react";
import styles from "../styles/nav.module.css";

const links = [
    { name: 'Home', href: '/', icon: HomeIcon },
    {
        name: 'News',
        href: '/news',
        icon: BookOpenCheck,
    },
];

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className={styles.nav}>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`${styles.link} ${pathname === link.href ? styles.active : ""}`}
                    >
                        <LinkIcon className="w-6"/>
                        <p>{link.name}</p>
                    </Link>
                );
            })}
        </nav>
    );
}

export default Nav;