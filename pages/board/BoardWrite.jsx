import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { HttpHeadersContext } from "../context/HttpHeadersProvider";

const BoardWrite = () => {

	const { auth, setAuth } = useContext(AuthContext)
	const { headers, setHeaders } = useContext(HttpHeadersContext);

	const navigate = useNavigate();

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const changeTitle = (event) => {
		setTitle(event.target.value);
	}

	const changeContent = (event) => {
		setContent(event.target.value);
	}

	/* [POST /board]: 게시글 작성 */
	const createBoard = async() => {

		const req = {
			nickName: localStorage.getItem("nickName"), 
			title: title, 
			content: content
		}

		await axios.post("http://localhost:3000/board", req, {headers: headers})
		.then((resp) => {
			console.log("[BoardWrite.js] createBoard() success :D");
			console.log(resp.data);

			alert("새 글 등록 성공!");
			navigate(`/boarddetail/${resp.data.seq}`); // 새롭게 등록한 글 상세로 이동
		})
		.catch((err) => {
			console.log("[BoardWrite.js] createBoard() error :<");
			console.log(err);
		});
	}

	useEffect(() => {
		if (!auth) {
			alert("로그인 후 게시글을 작성할 수 있습니다!");
			navigate(-1);
		}
	}, []);


	return (
		<div>
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
				<button className="btn btn-outline-secondary" onClick={createBoard}><i className="fas fa-pen"></i> Update</button>
			</div>
		</div>
	);
}

export default BoardWrite;