import Link from "next/link";

const NavLink = ({ href, title, active }) => {
  return (
    <Link
      href={href}
      className={`block py-2 pl-3 pr-4 sm:text-xl rounded-md md:p-0 transition font-medium nav-link ${active ? "nav-link-active" : ""}`}
    >
      {title}
    </Link>
  );
};

export default NavLink;