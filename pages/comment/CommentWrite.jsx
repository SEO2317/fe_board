import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HttpHeadersContext } from "../context/HttpHeadersProvider";

const CommentWrite = (props) => {

	const { headers, setHeaders } = useContext(HttpHeadersContext);

	const nickName = localStorage.getItem("nickName");
	const seq = props.seq;

	const navigate = useNavigate();

	const [content, setContent] = useState("");

	const chageContent = (event) => {
		setContent(event.target.value);
	}

	const createComment = async() => {

		const req = {
			nickName: nickName,
			content: content,
			boardSeq: seq
		}

		await axios.post(`http://localhost:3000/comment`, req, { params: {"boardSeq": seq}, headers: headers})
		.then((resp) => {
			console.log("[CommentWrite.js] createComment() success :D");
			console.log(resp.data);

			if (resp.data.seq != null) {
				alert("댓글 등록 성공!");
				navigate(0);
			}

		}).catch((err) => {
			console.log("[CommentWrite.js] createComment() error :<");
			console.log(err);

		});
	}

	return (
		<>
				{/* 상단 영역 (프로필 이미지, 댓글 작성자) */}
				<div className="my-1 d-flex justify-content-center">
					<div className="col-1">
						<img src="/images/profile-placeholder.png" alt="프로필 이미지"
							className="profile-img"/>
					</div>

					<div className="col-7">
						<span className="comment-nickName" >{nickName}</span>
					</div>
					<div className="my-1 col-2 d-flex justify-content-end">
						<button className="btn btn-outline-secondary" onClick={createComment}><i className="fas fa-comment-dots"></i> Comment</button>
					</div>
				</div>
				{/* 하단 영역 (댓글 내용) */}
				<div className="my-3 d-flex justify-content-center">
					<textarea className="col-10" rows="5" value={content} onChange={chageContent}></textarea>
				</div><br/><br/>
		</>
	)
}

export default CommentWrite;