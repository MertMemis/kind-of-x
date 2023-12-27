import { useState } from "react"
import Post from "../../../components/post"
import {posts as postData} from "../../../mock/posts"
import { WVList } from "virtua"



export default function ForYou() {

   const [posts, setPosts] = useState ([...postData, ...postData, ...postData, ...postData, ...postData, ...postData])


   return(
      <WVList
			onRangeChange={(start, end) => {
				console.log('end', end + 1)
				if (end + 1 === posts.length) {
					setPosts(prev => [...prev, ...postData])
				}
			}}
		>
			{posts.map((post, key) => <Post post={post} key={post.id + key} />)}
		</WVList>
   )
}