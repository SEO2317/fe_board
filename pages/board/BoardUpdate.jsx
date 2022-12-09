import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
const BoardUpdate = () => {

	const { headers, setHeaders } = useContext(HttpHeadersContext);
	const { auth, setAuth } = useContext(AuthContext);

	const navigate = useNavigate();

	const location = useLocation();
	const { board } = location.state;
	
	const [title, setTitle] = useState(board.title);
	const [content, setContent] = useState(board.content);

	const changeTitle = (event) => {
		setTitle(event.target.value);
	}

	const changeContent = (event) => {
		setContent(event.target.value);
	}

	const updateBoard = async () => {

		const req = {
			nickName: auth, 
			title: title, 
			content: content
		}

		await axios.patch(`http://localhost:3000/board/${board.seq}`, req, {headers: headers})
		.then((resp) => {
			console.log("[BoardUpdate.js] updateBoard() success :D");
			console.log(resp.data);

			if (resp.data.updatedRecordCount == 1) {
				alert("게시글 수정 성공!");
				navigate(`/boarddetail/${board.seq}`); // 글 상세로 이동
			}

		})
		.catch((err) => {
			console.log("[BoardUpdate.js] updateBoard() error :<");
			console.log(err);
		});

	}


	return (
		<div>
			<table className="table">
				<tbody>
					<tr>
						<th className="table-primary">Nickname</th>
						<td>
							<input type="text" className="form-control"  value={board.nickName} size="50px" readOnly />
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
							<textarea className="form-control" value={content} onChange={changeContent} rows="10" ></textarea>
						</td>
					</tr>
				</tbody>
			</table>

			<div className="my-3 d-flex justify-content-center">
				<button className="btn btn-dark" onClick={updateBoard}><i className="fas fa-pen"></i> Modify</button>
			</div>
		</div>
	);

}

export default BoardUpdate;