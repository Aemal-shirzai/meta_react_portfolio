import { Heading, Image, Text, Card, CardBody, Stack, CardFooter, CardHeader, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const CustomCard = ({ title, description, imageSrc }) => {
    return (
        <Card>
            <CardHeader p={0}>
                <Image
                    src={imageSrc}
                    alt={title}
                    borderRadius='lg'
                />
            </CardHeader>
            <CardBody pt={0}>
                <Stack mt='6' spacing='3'>
                    <Heading size='sm'>{ title }</Heading>
                    <Text color="gray">{ description }</Text>
                </Stack>
            </CardBody>
            <CardFooter pt={0}>
                <Link href="#">See more <FontAwesomeIcon icon={faArrowRight} size="1x"/> </Link>             
            </CardFooter>
        </Card>
    );
};

export default CustomCard;
