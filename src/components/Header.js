import { Box, HStack, Menu, MenuButton } from "@chakra-ui/react";
import { faGithub, faLinkedin, faMedium, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { headerMainStyle, hStackStyle } from "../helpers/HeaderStyle";
const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];
const Header = () => {
  const [translate, setTranslate] = useState(0);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    function handleScroll() {
      const currentScrollPos = window.scrollY;
      currentScrollPos > prevScrollPos ? setTranslate(-200) : setTranslate(0)
      prevScrollPos = currentScrollPos
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const handleClick = (anchor) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };



  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={`translateY(${translate}px)`}
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={999}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing="15px">
              {
                socials.map((social, index) => {
                  return <a key={index} href={social.url}>{<FontAwesomeIcon size="2x" icon={social.icon} />}</a>
                })
              }
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <Menu>
                <MenuButton as="button" onClick={() => handleClick('projects')}>
                  Projects
                </MenuButton>
                <MenuButton as="button" onClick={() => handleClick('contactme')}>
                  Contact Me
                </MenuButton>
              </Menu>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>

  );
}

export default Header;