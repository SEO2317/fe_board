import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import CommentList from "../comment/CommentList";
import CommentWrite from "../comment/CommentWrite";
import { AuthContext } from "../context/AuthProvider";
import { Router } from "next/router";

const BoardDetail = () => {

	const { auth, setAuth } = useContext(AuthContext)

	const [board, setBoard] = useState({});
	const { seq } = useParams(); // 파라미터 가져오기

	const navigate = useNavigate();

	const getBoardDetail = async () => {

		await axios.get(`http://localhost:3000/board/${seq}`, {params: {readernickName: auth ? auth : ""}})
		.then((resp) => {
			console.log("[BoardDetail.jsx] getBoardDetail() success :D");
			console.log(resp.data);

			setBoard(resp.data.board);
		})
		.catch((err) => {
			console.log("[BoardDetail.jsx] getBoardDetail() error :<");
			console.log(err);
		});

	}

	const deleteBoard = async () => {

		await axios.delete(`http://localhost:3000/board/${seq}`)
		.then((resp) => {
			console.log("[BoardDetail.jsx] deleteBoard() success :D");
			console.log(resp.data);

			if (resp.data.deletedRecordCount === 1) {
				alert("게시글 삭제 성공!");
				// navigate("/boardlist");
				router.push("/boardlist");
			}

		}).catch((err) => {
			console.log("[BoardDetail.jsx] deleteBoard() error :<");
			console.log(err);
		});

	}

	useEffect(() => {
		getBoardDetail();
	}, []);

	const updateBoard = {
		seq: board.seq,
		nickName: board.nickName,
		title: board.title,
		content: board.content
	}

	const parentBoard = {
		nickName: board.nickName,
		title: board.title
	}

	return (
		<div>

			<div className="my-3 d-flex justify-content-end">
				<Link className="btn btn-outline-secondary" to={{pathname: `/boardanswer/${board.seq}` }} state={{ parentBoard: parentBoard }}><i className="fas fa-pen"></i> Comment</Link> &nbsp;

			{
				/* 자신이 작성한 게시글인 경우에만 수정 삭제 가능 */
				(localStorage.getItem("nickName") == board.nickName) ?
					<>
						<Link className="btn btn-outline-secondary"  to="/boardupdate" state={{ board: updateBoard }}><i className="fas fa-edit"></i> Modify</Link> &nbsp;
						<button className="btn btn-outline-danger"  onClick={deleteBoard}><i className="fas fa-trash-alt"></i> Delete</button>
					</>
				:
				null
			}

			</div>

			<table className="table table-striped">
				<tbody>
					<tr>
						<th className="col-3">Nickname</th>
						<td>
							<span>{board.nickName}</span>
						</td>
					</tr>

					<tr>
						<th>Title</th>
						<td>
							<span>{board.title}</span>
						</td>
					</tr>

					<tr>
						<th>Date</th>
						<td>
							<span>{board.createdAt}</span>
						</td>
					</tr>

					<tr>
						<th>Views</th>
						<td>
							<span>{board.readCount}</span>
						</td>
					</tr>

					<tr>
						<th>Content</th>
						<td>
							<div>
								{board.content}
							</div>
						</td>
					</tr>
				</tbody>
			</table>

			<div className="my-3 d-flex justify-content-center">
				<Link className="btn btn-outline-secondary" to="/boardlist"><i className="fas fa-list"></i> List</Link>
			</div><br/><br/>

			{/* 댓글 작성 컴포넌트 */}
			{
				(auth) ? // 로그인한 사용자만 댓글 작성 가능
					<CommentWrite seq={seq}/>
				:
					null
			}
			

			{/* 댓글 리스트 컴포넌트 */}
			<CommentList  seq={seq}/>

		</div>
	);
}

export default BoardDetail;