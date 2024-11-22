"use client";
import PageHeading from "@/components/common/PageHeading";
import PageSubHeading from "@/components/common/PageSubHeading";
import {RefObject, FormEvent, useState} from "react";
import LabelInput from "@/components/common/LabelInput";
import PhoneInput from "@/components/addExtraStaff/PhoneInput";
import AddButton from "@/components/common/AddButton";
import CancelButton from "@/components/common/CancelButton";
import {useRouter} from "next/navigation";
import { usePost } from "@/utils/usePost";
import Dialogue from "@/components/common/Dialogue";
import verifyIcon from "/public/assets/images/addExtraStaff/verify-icon.svg";


interface phoneNumberProps {
    countryCode: string,
    phoneNumber: string
}

const AddUserContent = () => {
    const router = useRouter();
    const {postData, data} = usePost("/posts");

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<phoneNumberProps>({countryCode: "+1", phoneNumber: ""});

    let dialogueRef: HTMLDialogElement | null;
    const setDialogueRef = (ref: RefObject<HTMLDialogElement>) => {
        dialogueRef = ref.current;
    };
    const showModal = () => {
        dialogueRef?.showModal();
    };
    const closeModal = () => {
        resetForm();
        dialogueRef?.close();
        redirectToAdminUser();
    };

    const redirectToAdminUser = () => {
        router.push('/admin/user/admin-list');
    };

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber.countryCode + " " + phoneNumber.phoneNumber
        };
        postData(userData);
        showModal();
    };
    console.log(data);

    const resetForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber({countryCode: "+1", phoneNumber: ""});
    };

    return (
        <div className="content-wrapper">
            <div>
                <PageHeading heading="Add User" mb="mb-0" />
                <PageSubHeading subheading="View, add, edit details" />
            </div>
            <form 
                className="bg-white rounded-[16px] md:p-10 px-7 py-10"
                onSubmit={submitForm}
            >
                <div className="grid md:grid-cols-2 md:gap-x-4 gap-y-4">
                    <LabelInput label="First name*" inputType="text" inputId="firstName" stateValue={firstName} setState={setFirstName} />
                    <LabelInput label="Last name*" inputType="text" inputId="lastName" stateValue={lastName} setState={setLastName} />
                </div>
                <div className="grid md:grid-cols-2 md:gap-x-4 gap-y-4 md:mt-8 mt-4">
                    <LabelInput label="Email*" inputType="email" inputId="email" stateValue={email} setState={setEmail} />
                    <PhoneInput label="Phone number" inputId="phoneNumber" stateValue={phoneNumber} setState={setPhoneNumber} />
                </div>
                <div className="flex md:gap-x-4 gap-x-2 mt-8">
                    <AddButton text="Add" />
                    <CancelButton text="Back" onClickFunction={redirectToAdminUser} />
                </div>
            </form>
            <Dialogue 
                setDialogueRef={setDialogueRef} 
                closeDialogue={closeModal} 
                icon={verifyIcon}
                iconAlt="Verify"
                title="Thank you!"
                message="New user added successfully"
                buttonText="Close"
            />
        </div>
    )
}

export default AddUserContent