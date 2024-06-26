import { useRef, useState } from "react";
import * as S from "./Contact.styles";
import emailjs from "@emailjs/browser";

export const Contact = () => {
    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        message: "",
        acceptedTerms: false,
    });

    const form = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        
        if (!contactData.acceptedTerms) {
            alert("You must accept the terms and conditions");
            return;
        }

        if (!contactData.name || !contactData.email || !contactData.message) {
            alert("You must fill all the fields");
            return;
        }

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_USER_ID
        ).then(() => {
            alert("Message sent successfully");
        }).catch(() => {
            alert("An error occurred, try again later");
        });

        setContactData({
            name: "",
            email: "",
            message: "",
            acceptedTerms: false,
        });
        form.current.reset();
    }
    return (
        <S.ContactContainer id="contact">
            <S.Title>Contact</S.Title>
            <S.ContainerForm>
                <S.Form onSubmit={onSubmit} ref={form}>
                    <S.Input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={contactData.name}
                        onChange={(e) => {
                            setContactData({
                                ...contactData,
                                name: e.target.value,
                            });
                        }}
                    />
                    <S.Input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={contactData.email}
                        onChange={(e) => {
                            setContactData({
                                ...contactData,
                                email: e.target.value,
                            });
                        }}
                    />
                    <S.TextArea
                        placeholder="Write your message"
                        name="message"
                        value={contactData.message}
                        onChange={(e) => {
                            setContactData({
                                ...contactData,
                                message: e.target.value,
                            });
                        }}
                    />
                    <S.ContainerConditions>
                        <input
                            type="checkbox"
                            name="conditions"
                            id="conditions"
                            onChange={(e) => {
                                setContactData({
                                    ...contactData,
                                    acceptedTerms: e.target.checked,
                                });
                            }}
                        />
                        <span>Accept the terms and conditions</span>
                    </S.ContainerConditions>
                    <S.Button type="submit">Send</S.Button>
                </S.Form>
            </S.ContainerForm>
        </S.ContactContainer>
    );
};
