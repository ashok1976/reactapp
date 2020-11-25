import React,{useState,useEffect } from 'react';
import {connect} from 'react-redux';
import {addBasket} from './../action/addBasket';
import {removeBasket} from './../action/removeBasket'
import {fetchPostData} from './../action/fetchPostData';
import Posts from './Posts'
import Pagination from './Pagination'
const product = [
			{name:'product_1', price:300, number:0, inCart: false},
			{name:'product_2', price:400, number:0, inCart: false},
			{name:'product_3 ', price:500, number:0, inCart: false},
			{name:'product_4 ', price:500, number:0, inCart: false},
			{name:'product_5 ', price:500, number:0, inCart: false}
			]
		
const Products = (props) => { 
	const [cart, setCart] = useState(0);
	const [post, setPost] = useState([]);
	const [loading,setLoading] = useState(false);
	const [pagination, setPagination] = useState();
	const [currentPage, setCurrentPage] = useState(1);
	const [postPerPage] = useState(10);
	
		
	 useEffect(()=>{
		props.fetchPostData()
		const postData = async() =>{
			setLoading(true)
			const result = await fetch('http://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(result =>{
					setPost(result);
					setLoading(false)
				
				})
			
			
		}
		postData();
			
	 },[])
	 const handlePage = (page) => {
	     setCurrentPage(page)
	 }
	 
	 const handleNext = (page) => {
	     setCurrentPage(page + 1)
	 }
	 
	 const indexOfLastPost = currentPage * postPerPage;
	 const indexOfFirstPost = indexOfLastPost - postPerPage;
	 const currentPosts = post.slice(indexOfFirstPost, indexOfLastPost);
	 console.log(currentPosts)
	 //console.log(indexOfFirstPost)
			return ( 
			
		  <>	 
			<section className="form-group">
				
				
				 <Posts loading={loading} post={currentPosts} />
				 <Pagination postPerPage={postPerPage} totalPosts={post.length} handlePage={handlePage}  handleNext={handleNext} />
					
				
			sssssssssss
			
			
				<h3>Product Name</h3>
				<p>  curent number {cart}:  total items {}</p>
				<div className="row mb-4">
				<table className="table">
					<thead>
						<tr>
							<th width="15%">#</th>
							<th width="20%">First</th>
							<th width="20%">Last</th>
							<th width="15%"></th>
							<th width="15%"></th>
							<th width="15%"></th>
							</tr>
						</thead>
					<tbody>
						{
							product.map((val,index)=>{
								return 	<tr key={index}>
													<td>#</td>
													<td><strong>{val.name} </strong> </td>
													<td><strong>{val.price} </strong> </td>
													<td><strong>{val.number} </strong> </td>
													<td><button className="btn btn-outline-primary" onClick={()=> props.addBasket(val.name)}>Add Product</button></td>
													<td><button className="btn btn-outline-primary" onClick={props.removeBasket}>remove Product</button></td>
											</tr>
									
							})
						}
				</tbody>
				</table>
				<ul>
				{
					props.data.slice(0,20).map((val,index) => {
					return <li key={index}>{val.title}</li>
					})
					
				}
				</ul>
			</div>
		</section>
			  </>
			 );

}

const mapStateToProps = state =>{
	return {
		data : state.posts.posts
	}
}


export default connect(mapStateToProps,{addBasket,fetchPostData,removeBasket})(Products)