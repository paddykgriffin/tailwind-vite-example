import FooterNav from "@/components/navigation/FooterNav";
//import siteConfig from "@/site-config";
import { Container } from "@/components/layout/Container/Container";
import { Typography } from "@/components/common/Typography/Typography";
import { FaFacebook, FaGooglePlus, FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Logo from "@/components/common/Logo/Logo";
import { NavLink } from "react-router-dom";
import { LinksOne, LinksTwo } from "@/components/navigation/FooterMenuLinks";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary dark:bg-primary/10 py-8 dark:text-white">
      <Container maxWidth="xl">
        <div className="grid gap-4 pb-8">
          <div className="col-start-1 col-end-4 flex items-center">
            <Logo />
          </div>
          <div className="col-start-10 col-end-12">
            <div className="grid gap-4">
              <div className="col-start-1 col-end-1 place-items-end text-right">
                <Typography variant="h4" className="text-[18px] text-white">
                  What We Do
                </Typography>
                <FooterNav data={LinksOne} />
              </div>
              <div className="col-start-2 col-end-2 place-items-end text-right">
                <Typography variant="h4" className="text-[18px] text-white">
                  About Us
                </Typography>
                <FooterNav data={LinksTwo} />
              </div>
            </div>
          </div>
        </div>

        <div className="grid items-center gap-4 md:mt-6">
          <div className="flex flex-col justify-center pb-6 md:col-start-1 md:flex-row md:justify-start md:pb-0 md:first:col-end-9">
            <Typography
              variant="body1"
              className="mb-0 pb-4 text-center text-lg text-gray-300 md:pb-0 md:text-left md:text-sm"
            >
              &copy; Company Name {year}
            </Typography>
            <div className="text-center text-white md:ml-6 md:text-left">
              <ul className="flex flex-col justify-center text-lg md:flex-row md:justify-start md:gap-6 md:text-sm">
                <li className="py-4 md:py-0">
                  <NavLink
                    to="tel:011235690"
                    className="transition-all duration-500 hover:text-orange-500"
                  >
                    01 123 5690
                  </NavLink>
                </li>
                <li className="py-4 md:py-0">
                  <NavLink
                    to="mailto:info@companyname.com"
                    className="transition-all duration-500 hover:text-orange-500"
                  >
                    info@companyname.com
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center md:col-start-9 md:col-end-12 md:justify-end">
            <ul className="flex flex-row gap-4 text-white">
              <li>
                <NavLink
                  to=""
                  className="transition-all duration-500 hover:text-white/40"
                >
                  <FaFacebook size={"32px"} />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to=""
                  className="transition-all duration-500 hover:text-white/40"
                >
                  <FaTwitter size={"32px"} />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to=""
                  className="transition-all duration-500 hover:text-white/40"
                >
                  <FaLinkedin size={"32px"} />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to=""
                  className="transition-all duration-500 hover:text-white/40"
                >
                  <FaGooglePlus size={"32px"} />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
