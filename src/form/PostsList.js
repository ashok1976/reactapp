import React from 'react';
import {Post} from './Post'
export const PostsList = (props) => {
	const {posts} = props
	return ( 
	  <>	     
		<ul>
			{ 
			posts.map((item,index) => <Post key={index} {...item} />)
			}
		</ul>
	

  </>
  );
}

