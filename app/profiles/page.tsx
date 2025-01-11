import ProfileClientComponent from '@/components/ProfilesClientComponent'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { redirect } from 'next/navigation';



export default async function Page() {

        const session = await getServerSession(authOptions);
        if(!session){
            redirect('/auth');
        }

    return <ProfileClientComponent />
}