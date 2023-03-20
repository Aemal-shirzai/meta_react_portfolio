import { Box, HStack, Menu, MenuButton } from "@chakra-ui/react";
import { faGithub, faLinkedin, faMedium, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <Box sx={headerMainStyle}>
            <Box color="white" maxWidth="1280px" margin="0 auto">
                <HStack sx={hStackStyle}>
                    <nav>
                        <HStack spacing="15px">
                            {
                                socials.map((social, index) => {
                                    return <a key={index} href={social.url}>{ <FontAwesomeIcon size="2x" icon={ social.icon } />}</a>
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