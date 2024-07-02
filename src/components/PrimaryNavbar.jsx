import { useState } from "react";
import { IoAccessibility } from "react-icons/io5";

const PrimaryNavbar = () => {
  const [show, setShow] = useState(false);

  const isShow = () => {
    setShow(!show);
  };

  return (
    <nav className="primaryNav">
      <ul>
        <a href="#">news</a>
      </ul>
      <ul>
        <a href="#">carrers</a>
      </ul>
      <ul>
        <a href="#">investors</a>
      </ul>
      <IoAccessibility className="iconNav" onClick={isShow} />
      {show && (
        <div className="modalBack">
          <div className="modal">
          <header className="modalHeader">
            <h2>Accesibility</h2>
            <button onClick={isShow}>X</button>
          </header>
          <p className="modalP">Use the controls below to customize your web experience.</p>
          <div className="modalCheck">
            <p>Reduce color</p>
            <input type="checkbox" name="color" />
          </div>
          <div className="modalCheck">
            <p>Reduce motion</p>
            <input type="checkbox" name="motion" />
          </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default PrimaryNavbar;
