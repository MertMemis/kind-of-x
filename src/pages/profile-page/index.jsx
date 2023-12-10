import { useParams } from "react-router-dom"

export default function ProfilePage() {

   const {slug} = useParams()

	return(
		<div>
			profile page - {slug}
		</div>
	)
}