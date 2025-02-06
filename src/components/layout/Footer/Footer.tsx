import FooterNav from "@/components/navigation/FooterNav";
import siteConfig from "@/site-config";
import { Container } from "@/components/layout/Container/Container";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary/10 py-8 text-black dark:text-white dark:bg-primary/10">
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          &copy; {year} Copyright - {siteConfig.siteName}
        </div>
        <FooterNav />
      </Container>
    </footer>
  );
};

export default Footer;
