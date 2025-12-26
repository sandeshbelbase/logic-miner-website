import Image from 'next/image';
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Logo */}
        <div className="mb-4 md:mb-0 flex items-center">
          <Image src="/Images/logo.jpg" alt="Image" width={100} height={100} />
        </div>
        {/* Contact Details */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p>Email: <a href="sandeshbelbase05@gmail.com" className="underline">sandeshbelbase11@gmail.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="underline">+61 430081037</a></p>
          <p>Address: Unit 4, 88 Beamish St Campsie, NSW 2194, Australia</p>
        </div>
        {/* Copyright */}
        <div className="text-sm text-gray-400 text-center md:text-right">
          &copy; {new Date().getFullYear()} Logic Miners. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
