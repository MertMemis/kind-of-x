import MainLayout from "../../layouts/main";
import StickyHeader from "../../components/sticky-header";
import Tab from "../../components/tab";


export default function Home() {
   return (
      <>
			<Tab activeTab="followings">
				<StickyHeader title="Anasayfa">
					<Tab.Items>
						<Tab.Item id="for-you">
							Sana özel
						</Tab.Item>
						<Tab.Item id="followings">
							Takip edilenler
						</Tab.Item>
					</Tab.Items>
				</StickyHeader>
        
   )
}