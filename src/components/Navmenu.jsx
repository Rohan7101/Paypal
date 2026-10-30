const menuItems = [
  { id: 1, label: "Personal", href: "#personal" },
  { id: 2, label: "Business", href: "#business" },
  { id: 3, label: "Partners", href: "#partners" },
  { id: 4, label: "Useful Info", href: "#useful-info" },
];

function NavMenu() {
  return (
    <nav className="nav-menu">
      <ul className="nav-list">
        {menuItems.map((item) => (
          <li key={item.id} className="nav-item">
            <a href={item.href} className="nav-link">
              <span>{item.label}</span>
              <span className="chevron">⌄</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavMenu;
