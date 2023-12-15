import SidebarSection from "../../../../components/sidebar-section";
import UserCard from "../../../../components/user-card";
import { whoToFlwUsers } from "../../../../mock";
import {useAccount} from "../../../../store/auth/hooks";

export default function WhoToFollow() {

   const account = useAccount()

   return(
      <SidebarSection
         title="Who to follow"
         more={`/connect_people?user_id=${account.id}`}
      >
         {whoToFlwUsers.map(user => <UserCard user={user} key={user.id}/>)}
      </SidebarSection>
   )
}
