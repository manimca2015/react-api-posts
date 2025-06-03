import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {

  return (
    <div className="bg-dark text-white px-4">
      <footer className="text-center py-3 border-top">
        <small>&copy; {new Date().getFullYear()}. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default Footer;
