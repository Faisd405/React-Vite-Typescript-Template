import React from "react";
import { Link } from "react-router-dom";

interface Props {
    href: string;
    children: React.ReactNode;
}

export default function NavLink({ href, children }: Props) {
    return (
        <Link
            className="inline-flex px-4 py-2 text-blue-300 hover:text-white"
            to={href}
        >
            {children}
        </Link>
    );
}
