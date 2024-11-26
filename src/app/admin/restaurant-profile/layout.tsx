import type {Metadata} from "next";
import Header from "@/components/common/Header";


export const metadata: Metadata = {
    title: "Restaurant Profile"
};

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
        <Header urlToLogin="" isAdmin={true} />
        {children}
    </>
  )
}

export default layout