import React from "react";

type HamburgerProps = {
  openMenu: () => void;
  closeMenu: () => void;
}

export const Hamburger = ({openMenu, closeMenu}: HamburgerProps) => {
  const handleChange = () => {
    const hamburger = document.getElementById("hamburger") as HTMLInputElement;
    if(hamburger && hamburger.checked === true) {
      openMenu();
    } else {
      closeMenu();
    }
  };

  return (
    <label className="hamburger-menu flex flex-col max-w-max cursor-pointer lg:hidden">
      <input
        id="hamburger"
        type="checkbox"
        onChange={handleChange}
      />
    </label>
  );
};
