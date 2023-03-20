import { Avatar, Box, Heading, Text, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const avatarSrc = "https://i.pravatar.cc/150?img=7";
const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => {
    return (
        <FullScreenSection
            justifyContent="center"
            alignItems="center"
            isDarkBackground
            backgroundColor="#2A4365"
        >
            
            <VStack mb={8}>
                <Avatar name="Aemal Shirzai" src={avatarSrc} size="2xl"/>
                <Text fontWeight="bold">{ greeting }</Text>
            </VStack>
            <VStack>
                <Heading  size='2xl'>{ bio1 }</Heading>
                <Heading  size="2xl">{ bio2 }</Heading>
            </VStack>

        </FullScreenSection>
    );
}


export default LandingSection;