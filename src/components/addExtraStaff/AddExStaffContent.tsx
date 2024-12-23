"use client";
import LabelInput from "../common/LabelInput";
import CancelButton from "../common/CancelButton";
import AddButton from "../common/AddButton";
import PageHeading from "../common/PageHeading";
import {useRouter} from "next/navigation";
import Dialogue from "../common/Dialogue";
import verifyIcon from "/public/assets/images/addExtraStaff/verify-icon.svg";
import {RefObject, FormEvent, useState} from "react";
import PhoneMask from "../common/PhoneMask";
// import { postRequest } from "@/utils/utilFunctions";
// import useRedirect from "@/utils/useRedirect";

interface AddExStaffContentProps {
    urlToDashboard: string,
    postStaffUrl: string
}

const AddExStaffContent:React.FC<AddExStaffContentProps> = ({urlToDashboard, postStaffUrl}) => {
    const router = useRouter();

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [countryCode, setCountryCode] = useState<string>("+1");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    // const [data, setData] = useState(null);

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
        redirectToDashboard();
    };

    const redirectToDashboard = () => {
        router.push(urlToDashboard);
    };

    // useRedirect(data, () => showModal());

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const staffData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: countryCode + " " + phoneNumber
        };
        console.log(staffData)
        // postRequest(postStaffUrl, staffData, setData);
        showModal();
    };
    console.log(postStaffUrl)

    const resetForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setCountryCode("+1");
        setPhoneNumber("");
    };

    return (
        <div className="content-wrapper">
            <PageHeading heading="Add Extra Staff" />
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
                    <PhoneMask 
                        label="Phone number" 
                        inputId="phoneNumber" 
                        setPhoneNumber={setPhoneNumber} 
                        setCountryCode={setCountryCode} 
                        countryCode={countryCode} 
                    />
                </div>
                <div className="flex md:gap-x-4 gap-x-2 mt-8">
                    <AddButton text="Add" />
                    <CancelButton text="Back" onClickFunction={redirectToDashboard} />
                </div>
            </form>
            <Dialogue 
                setDialogueRef={setDialogueRef} 
                closeDialogue={closeModal} 
                icon={verifyIcon}
                iconAlt="Verify"
                title="Thank you!"
                message="New staff added successfully"
                buttonText="Close"
            />
        </div>
    )
}

export default AddExStaffContent