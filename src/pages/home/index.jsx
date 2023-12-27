import StickyHeader from "../../components/sticky-header";
import Tab from "../../components/tab";
import ForYou from "./for-you";


export default function Home() {
   return (
      <>
			<Tab activeTab="followings">
				<StickyHeader title="Home">
					<Tab.Items>
						<Tab.Item id="for-you">
							For you
						</Tab.Item>
						<Tab.Item id="followings">
							Followings
						</Tab.Item>
					</Tab.Items>
				</StickyHeader>
				<Tab.Content id="for-you">
					1. content
				</Tab.Content>
				<Tab.Content id="followings">
					2. content
				</Tab.Content>
			</Tab>
		</>
        
   )
}

