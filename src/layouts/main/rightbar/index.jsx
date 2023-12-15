import Topics from "./topics";
import Premium from "./premium";
import Search from "./search";
import WhoToFollow from "./who-to-follow";
import Footer from "./footer";

export default function RightBar() {
	return (
		<aside className="w-[350px] mr-2.5">
			<Search />
			<Premium />
			<Topics />
		</aside>
	)
}