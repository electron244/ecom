const footerShopLinks = ["Furniture", "Lighting", "Decor", "Textiles"];
const footerHelpLinks = ["Shipping", "Returns", "Track Order", "Contact"];

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-primary/5 pt-20 pb-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="text-primary">
                <span className="material-symbols-outlined text-3xl">
                  filter_vintage
                </span>
              </div>
              <h2 className="text-xl font-extrabold tracking-tighter">
                MINIMA
              </h2>
            </div>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              Crafting quiet spaces in a loud world. Our mission is to provide
              timeless, essential pieces for the modern home.
            </p>
            <div className="flex gap-4 mt-8">
              <a
                className="text-slate-400 hover:text-primary transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">public</span>
              </a>
              <a
                className="text-slate-400 hover:text-primary transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">
                  alternate_email
                </span>
              </a>
              <a
                className="text-slate-400 hover:text-primary transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">movie</span>
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Shop</h4>
            <ul className="space-y-4">
              {footerShopLinks.map((link) => (
                <li key={link}>
                  <a
                    className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
                    href="#"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Help</h4>
            <ul className="space-y-4">
              {footerHelpLinks.map((link) => (
                <li key={link}>
                  <a
                    className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
                    href="#"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Store Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Our Store</h4>
            <p className="text-slate-500 dark:text-slate-400 mb-4">
              123 Minimalist Way,
              <br />
              Design District, CA 90210
            </p>
            <p className="text-slate-500 dark:text-slate-400">
              Monday — Friday
              <br />
              9:00 AM — 6:00 PM
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
          <p>© 2024 MINIMA Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a className="hover:text-primary" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-primary" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
