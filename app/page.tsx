import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import ClientComponent from "../components/HomeClientComponent";


export default async function Page() {
    
    const session = await getServerSession(authOptions);
    if(!session){
        redirect('/auth');
    }

    return await <ClientComponent />
}


