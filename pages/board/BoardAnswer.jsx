import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import { HttpHeadersContext } from "../context/HttpHeadersProvider";

const BoardAnswer = () => {

	const { auth, setAuth } = useContext(AuthContext)
	const { headers, setHeaders } = useContext(HttpHeadersContext);

	const navigate = useNavigate();

	const { parentSeq } = useParams(); // 부모 글 번호

	const location = useLocation();
	const { parentBoard } = location.state;

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const changeTitle = (event) => {
		setTitle(event.target.value);
	}

	const changeContent = (event) => {
		setContent(event.target.value);
	}


	const createBoardAnswer = async () => {

		const req = {
			nickName: localStorage.getItem("nickName"),
			title: title,
			content: content
		}
		
		await axios.post(`http://localhost:3000/board/${parentSeq}/answer`, req, {headers: headers})
		.then((resp) => {
			console.log("[BoardAnswer.js] createBoardAnswer() success :D");
			console.log(resp.data);

			alert("댓글 등록 성공!");
			navigate(`/boarddetail/${resp.data.seq}`); // 새롭게 등록한 댓글 상세로 이동
		})
		.catch((err) => {
			console.log("[BoardAnswer.js] createBoardAnswer() error :<");
			console.log(err);


		});

	}

	useEffect(() => {
		if (!auth) {
			alert("로그인 후 댓글을 작성할 수 있습니다!");
			navigate(-1);
		}
	}, []);

	return (
		<div>
			{/* 부모 게시글 정보 */}
			<table className="table">
				<tbody>
					<tr>
						<th className="table-primary">Nickname</th>
						<td>
							<input type="text" className="form-control" value={parentBoard.nickName} size="50px" readOnly />
						</td>
					</tr>

					<tr>
						<th className="table-primary">Title</th>
						<td>
							<input type="text" className="form-control" value={parentBoard.title} size="50px" readOnly />
						</td>
					</tr>
				</tbody>
			</table><br/><br/>
			
			{/* 답글 작성 */}
			<h3>📌 Reply</h3>
			<table className="table">
				<tbody>
					<tr>
						<th className="table-primary">Nickname</th>
						<td>
							<input type="text" className="form-control"  value={localStorage.getItem("nickName")} size="50px" readOnly />
						</td>
					</tr>

					<tr>
						<th className="table-primary">Title</th>
						<td>
							<input type="text" className="form-control" value={title} onChange={changeTitle} size="50px" />
						</td>
					</tr>

					<tr>
						<th className="table-primary">Content</th>
						<td>
							<textarea className="form-control" value={content} onChange={changeContent} rows="10"></textarea>
						</td>
					</tr>
				</tbody>
			</table>

			<div className="my-5 d-flex justify-content-center">
				<button className="btn btn-outline-secondary" onClick={createBoardAnswer}><i className="fas fa-pen"></i> Comment</button>
			</div>
		</div>
	);
}

export default BoardAnswer;