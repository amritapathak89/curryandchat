const Footer = ( ) => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        &copy; {new Date().getFullYear()} Curry & Chat. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer;