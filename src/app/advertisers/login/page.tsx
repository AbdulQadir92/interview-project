import LoginCard from "@/components/login/LoginCard";


const page = () => {
    return (
        <main className="bg-loginBg flex justify-center items-center min-h-screen">
           <LoginCard urlToDashboard="/advertisers/dashboard" postLoginDataUrl="/posts" />
        </main>
    )
}

export default page