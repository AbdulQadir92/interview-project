"use client";
import PageHeading from "@/components/common/PageHeading";
import AddButton from "@/components/common/AddButton";
import SearchBar from "../SearchBar";
import useShowMenuIcon from "@/utils/useShowMenuIcon";
import dynamic from "next/dynamic";
const RestaurantOwnersTable = dynamic(() => import("../restaurantOwners/RestaurantOwnersTable"), {ssr: false});
// import eyeIcon from "/public/assets/images/admin/user/eye-icon.svg";
import { useRouter } from "next/navigation";
import {ADMIN_ADVERTISER} from "@/utils/pages-routes";
import { ADVERTISERS_GET } from "@/utils/api-urls";
import { getRequest } from "@/utils/utilFunctions";
import { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";


const AdvertisersContent = () => {
    const router = useRouter();
    useShowMenuIcon();
    const [data, setData] = useState<{data: [], limit: number, page: number, total: number} | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getRequest(ADVERTISERS_GET, setData, setIsLoading);
    }, [])

    // const data = [
    //     {id: 1, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 2, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 3, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 4, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 5, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 6, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 7, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 8, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 9, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 10, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 11, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 12, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 13, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 14, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 15, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 16, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 17, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 18, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 19, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 20, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    //     {id: 21, businessName: "The Restaurant", ownerName: "Jack Doe", email: "Jack@example.com", mobileNumber: "+1 234 5678 90", address: "121 Street, Ipsum road", proof: "", view: eyeIcon.src, details: "abc"},
    // ];

    const columns = [
        {title: "Id", data: "id"},
        {title: "Business Name", data: "businessName"},
        {title: "Owner Name", data: "ownerName"},
        {title: "Email", data: "email"},
        {title: "Mobile Number", data: "mobileNumber"},
        {title: "Address", data: "address"},
        {title: "Proof", data: "proof"},
        {title: "View", data: "view", render: (data: string) => `<Image src="${data}" alt="View" width={24} height={24}" style="cursor:pointer; display:block; margin-left:7px;" />`,}
    ];

    return (
        <div className="content-wrapper">
            <div className="flex justify-between items-center">
                <div>
                    <PageHeading heading="Advertisers List" mb="mb-0" fontSize="md:text-[28px] text-[20px]" />
                </div>
                <AddButton 
                    text="Add Advertiser" 
                    isSubmit={false} 
                    buttonWidth="md:w-[178px] w-[140px]" 
                    buttonHeight="md:h-[59px] h-[38px]"
                    fontSize="md:text-[20px] text-[13px]"
                    onClickFunction={() => router.push(ADMIN_ADVERTISER)}
                />
            </div>
            <SearchBar />
            {isLoading ? <Loader /> : <RestaurantOwnersTable data={data?.data} columns={columns} />}
        </div>
    )
}

export default AdvertisersContent