import React from "react";

const Footer = () => {
  const links = {
    quickLinks: [
      { name: "Cat", href: "#" },
      { name: "Puppy", href: "#" },
      { name: "Kitten", href: "#" },
      { name: "Whale prey", href: "#" },
      { name: "Small animal", href: "#" },
    ],
    helpLinks: [
      { name: "About Us", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Delivery", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
  };

  return (
    <footer className="border-t max-w-5xl mx-auto  text-center md:text-left  border-gray-800 pt-8 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4   justify-center gap-8">
        <div className="flex flex-col items-center justify-center md:block">
          <div className="flex items-center gap-2 mb-4">
            <img className="w-16" src="logo.png" alt="" />
          </div>
          <div className="text-gray-400 mb-4">
            <h3 className="font-medium text-white mb-2">Opening Time</h3>
            <p>Sunday-Friday: 9am-4pm</p>
            <p>Saturday: Closed</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center md:block">
          <h3 className="text-white font-medium mb-4">Address</h3>
          <address className="text-gray-400 not-italic">
            10-332 bailey
            <br />
            united Kingdom
            <br />
            NH7D67 hjw
            <br />
            +9854 484 88
          </address>
        </div>

        <div className="flex flex-col items-center justify-center md:block">
          <h3 className="text-white font-medium mb-4">Quick Links</h3>
          <ul className="space-y-2 ">
            {links.quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-purple-500 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center md:block">
          <h3 className="text-white font-medium mb-4">Here To Help</h3>
          <ul className="space-y-2">
            {links.helpLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-purple-500 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
