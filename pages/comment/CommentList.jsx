import axios from "axios";
import { useState, useEffect } from "react";
import Pagination from "react-js-pagination";
import Comment from "./Comment";

// import Comment from "./Comment.js"

const CommentList = (props) => {

	const seq = props.seq;

	// Paging
	const [page, setPage] = useState(1);
	const [totalCnt, setTotalCnt] = useState(0);

	const [commentList, setCommentList] = useState([]);

	const changePage = (page) => {
		setPage(page);
		getCommentList(page);
	}

	const getCommentList = async (page) => {
		await axios.get(`http://localhost:3000/comment`, { params: { "boardSeq": seq, "page": page } })
			.then((resp) => {
				console.log("[BoardComment.jsx] getCommentList() success :D");
				console.log(resp.data);

				setCommentList(resp.data.commentList);
				setTotalCnt(resp.data.pageCnt);

			}).catch((err) => {
				console.log("[BoardComment.jsx] getCommentList() error :<");
				console.log(err);

			});
	}

	useEffect(() => {
		getCommentList(1);
	}, []);

	return (
		<>

			<div className="my-1 d-flex justify-content-center">
				<h5><i className="fas fa-paperclip"></i> Comments </h5>
			</div>

			<Pagination
				activePage={page}
				itemsCountPerPage={5}
				totalItemsCount={totalCnt}
				pageRangeDisplayed={5}
				prevPageText={"‹"}
				nextPageText={"›"}
				onChange={changePage} />
			{
				commentList.map(function (comment, idx) {
					return (
						<div className="my-5" key={idx}>
							<Comment obj={comment} key={idx} />
						</div>
					);
				})
			}

		</>

	);
}


export default CommentList;