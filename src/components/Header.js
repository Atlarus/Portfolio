const Header = () => {

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full bg-white text-secondary z-10 shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        <img className="w-44" src="logo.png" alt="Logo" />
        <nav className="px-6">
          <ul className="flex space-x-4">
            <li><a href="/" onClick={(e) => handleSmoothScroll(e, 'home')} className="text-blue-500 hover:text-blue-700">Home</a></li>
            <li><a href="/services" onClick={(e) => handleSmoothScroll(e, 'services')} className="text-blue-500 hover:text-blue-700">Services</a></li>
            <li><a href="/products" onClick={(e) => handleSmoothScroll(e, 'products')} className="text-blue-500 hover:text-blue-700">Products</a></li>
            <li><a href="/contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="text-blue-500 hover:text-blue-700">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
