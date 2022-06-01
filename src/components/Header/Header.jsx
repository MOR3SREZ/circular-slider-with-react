import LogoSvg from '../../img/logo.svg';

const Header = () => {
  return (
    <nav className='relative container mx-auto p-6'>
      <div className='flex item-center justify-between'>
        <div className='pt-2'>
          <img src={LogoSvg} alt='' />
        </div>
        <div className='hidden md:flex space-x-6'>
          <a href='#' className='hover:text-darkGrayishBlue'>
            Pricing
          </a>
          <a href='#' className='hover:text-darkGrayishBlue'>
            Product
          </a>
          <a href='#' className='hover:text-darkGrayishBlue'>
            About Us
          </a>
          <a href='#' className='hover:text-darkGrayishBlue'>
            Careers
          </a>
          <a href='#' className='hover:text-darkGrayishBlue'>
            Community
          </a>
        </div>
        <a
          href='#'
          className='hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};
export default Header;
