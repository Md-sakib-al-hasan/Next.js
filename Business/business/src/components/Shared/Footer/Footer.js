import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white  p-10">
      <div className="flex justify-between">
        <div>
          <h6 className="footer-title text-lg font-semibold mb-4">Services</h6>
          <Link href="#">
            <span className="link link-hover block mb-2 cursor-pointer">Branding</span>
          </Link>
          <Link href="#">
            <span className="link link-hover block mb-2 cursor-pointer">Design</span>
          </Link>
          <Link href="#">
            <span className="link link-hover block mb-2 cursor-pointer">Marketing</span>
          </Link>
          <Link href="#">
            <span className="link link-hover block cursor-pointer">Advertisement</span>
          </Link>
        </div>
        <div>
          <h6 className="footer-title text-lg font-semibold mb-4">Company</h6>
          <Link href="#">
            <span className="link link-hover block mb-2 cursor-pointer">About us</span>
          </Link>
          <Link href="#">
            <span className="link link-hover block mb-2 cursor-pointer">Contact</span>
          </Link>
          <Link href="#">
            <span className="link link-hover block mb-2 cursor-pointer">Jobs</span>
          </Link>
          <Link href="#">
            <span className="link link-hover block cursor-pointer">Press kit</span>
          </Link>
        </div>
        <div className='hidden md:block'>
          <h6 className="footer-title text-lg font-semibold mb-4">Legal</h6>
          <Link href="#">
            <span className="link link-hover block mb-2 cursor-pointer">Terms of use</span>
          </Link>
          <Link href="#">
            <span className="link link-hover block mb-2 cursor-pointer">Privacy policy</span>
          </Link>
          <Link href="#">
            <span className="link link-hover block cursor-pointer">Cookie policy</span>
          </Link>
        </div>
      </div>
      <div className='text-center mt-10 md:mt-0 md:hidden'>
          <h6 className="footer-title text-lg font-semibold mb-4">Legal</h6>
          <Link href="#">
            <span className="link link-hover block mb-2 cursor-pointer">Terms of use</span>
          </Link>
          <Link href="#">
            <span className="link link-hover block mb-2 cursor-pointer">Privacy policy</span>
          </Link>
          <Link href="#">
            <span className="link link-hover block cursor-pointer">Cookie policy</span>
          </Link>
        </div>
    </footer>
  );
}

export default Footer;
