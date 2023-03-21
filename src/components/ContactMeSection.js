import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    Textarea,
    VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const ContactMeSection = () => {
    const { isLoading, response, submit } = useSubmit();
    const { onOpen } = useAlertContext();

    useEffect(() => {
        if (response) { 
            onOpen(response.type, response.message)
            if (response.type === 'success') formik.resetForm()
        }
    }, [response])


    const formik = useFormik({
        initialValues: {
            firstName: "",
            email: "",
            type: "",
            comment: ""
        },
        onSubmit: async (values, actions) => { 
            await submit('/testurl', values)
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('name is required!'),
            email: Yup.string().email('Invalid email').required('email is required!'),
            type: Yup.string().required('type is required!'),
            comment: Yup.string().required('comment is required!')
        }),
    });

    return (
        <FullScreenSection
            isDarkBackground
            backgroundColor="#512DA8"
            py={16}
            spacing={8}
        >
            <VStack w="1024px" p={32} alignItems="flex-start">
                <Heading as="h1" id="contactme-section">
                    Contact me
                </Heading>
                <Box p={6} rounded="md" w="100%">
                    <form onSubmit={formik.handleSubmit}>
                        <VStack spacing={4}>
                            <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                                <FormLabel htmlFor="firstName">Name</FormLabel>
                                <Input
                                    id="firstName"
                                    name="firstName"
                                    value={formik.firstName}
                                    { ...formik.getFieldProps('firstName') }
                                />
                                <FormErrorMessage>{ formik.errors.firstName }</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                                <FormLabel htmlFor="email">Email Address</FormLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    { ...formik.getFieldProps('email') }
                                />
                                <FormErrorMessage> { formik.errors.email } </FormErrorMessage>
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                                <Select id="type" name="type" { ...formik.getFieldProps('type') }>
                                    <option style={{ color: "black" }} value="hireMe">Freelance project proposal</option>
                                    <option style={{ color: "black" }} value="openSource">Open source consultancy session</option>
                                    <option style={{ color: "black" }} value="other">Other</option>
                                </Select>
                            </FormControl>
                            <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                                <FormLabel htmlFor="comment">Your message</FormLabel>
                                <Textarea
                                    id="comment"
                                    name="comment"
                                    height={250}
                                    { ...formik.getFieldProps('comment') }
                                />
                                <FormErrorMessage> { formik.errors.comment } </FormErrorMessage>
                            </FormControl>
                            <Button isLoading={isLoading} loadingText='Submitting' type="submit" colorScheme="purple" width="full">
                                Submit
                            </Button>
                        </VStack>
                    </form>
                </Box>
            </VStack>
        </FullScreenSection>
    );
};

export default ContactMeSection;
