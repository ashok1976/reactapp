import React from 'react';

const Pagination = ({postPerPage, totalPosts,handlePage,handleNext}) => { 
		const pageNumber = [];
		for(let i=1	; i <= Math.ceil(totalPosts/postPerPage); i++){
				pageNumber.push(i)	
		}

		return( 
				<>
				<ul className="pagination">
				 <li className="page-item"><a className="page-link" href="!#">Previous</a></li>
					{
						pageNumber.map((number)=>(
						
							<li key={number}  className="page-item"><span onClick={()=> handlePage(number)} className="page-link" >{number}</span></li>
						))
					
					}
					 
				</ul>
				</>
			);

}


export default Pagination;