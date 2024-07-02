import Logo from "./Logo";

const SecondNavbar = () => {
  return (
    <div className="secondaryNav">
      <Logo />
      <nav className="bottomNav">
        <ul>
          <a href="#">Square</a>
        </ul>
        <ul>
          <a href="#">Cash App</a>
        </ul>
        <ul>
          <a href="#">Spiral</a>
        </ul>
        <ul>
          <a href="#">Tidal</a>
        </ul>
        <ul>
          <a href="#">TBD</a>
        </ul>
      </nav>
    </div>
  );
};

export default SecondNavbar;
