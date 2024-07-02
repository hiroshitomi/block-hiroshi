import { IoAccessibility } from "react-icons/io5";

const routes = [
  {
    name: "news",
    href: "/news",
  },
  {
    name: "carrers",
    href: "/carrers",
  },
  {
    name: "investors",
    href: "/investors",
  },
];

const PrimaryNavbar = () => {
  return (
    <nav className="primaryNav">
      <ul>
          <a href="/news">news</a>
        </ul>
        <ul>
          <a href="/news">carrers</a>
        </ul>
        <ul>
          <a href="/news">investors</a>
        </ul>
      <IoAccessibility className="iconNav" />
    </nav>
  );
};

export default PrimaryNavbar;
