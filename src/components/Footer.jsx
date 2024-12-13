const Footer = () => {
  return (
    // <div className="w-full h-32 pt-10">
    <div className="w-full h-32 pt-10 bg-gradient-to-tr from-green-500 to-green-950 relative bottom-0">
      <h1 className="text-center text-3xl font-bold text-white">
        @ Copyright {new Date().getFullYear()}
      </h1>
    </div>
  );
};

export default Footer;
