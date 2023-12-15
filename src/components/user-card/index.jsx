import { useState } from "react"
import Button from "../../components/button"

export default function UserCard({ user }) {

   const [following, setFollowing] = useState(false)
