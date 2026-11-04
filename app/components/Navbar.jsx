import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";

function Navbar() {
    return (
        <div className="p-6 bg-pink-200 flex justify-end">
            <LanguageSwitcher />
        </div>
    );
}

export default Navbar;
