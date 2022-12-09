import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import axios from 'axios'
import curBoardAtom from '../atoms/curBoardAtom';
import { useAtom } from 'jotai';
import BoardPaging from './BoardPaging';
import styled from "styled-components";
import Posts from '../board_category/Posts';



const BoardList = () => {
  const [boards, setBoards] = useState([]);
  const [_, SetCurBoard] = useAtom(curBoardAtom);
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setBoards(response.data)
      }).catch(error => {
        console.error(error)
      })

    console.log(boards);
  }, []);

  return (
	<Layout>
    <>
	  <label>
        페이지 당 표시할 게시물 수:&nbsp;
        <select
          type="number"
          value={limit}
          onChange={({ target: { value } }) => setLimit(Number(value))}
        >
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </label>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse table-auto">
          <thead>
            <tr className="rounded-lg text-sm font-medium text-gray-700 text-left text-[0.9674rem]">
              <th className="px-4 py-2 bg-[#F8F8F8]">번호</th>
              <th className="px-4 py-2 bg-[#F8F8F8] text-center">제목</th>
              <th className="px-4 py-2 bg-[#F8F8F8] text-center">내용</th>
            </tr>
          </thead>
          <tbody className="text-sm font-normal text-gray-700">
            {boards.slice(offset, offset + limit).map(board => (
              <tr key={board.id + board.title + board.body} className="py-10 border-b border-gray-200 hover:bg-gray-100">
                <td className="px-4 py-4">{board.id}</td>

                <td className="px-4 py-4 text-left"><Link href="/board-category/ModifyBoard" onClick={() => {
                  SetCurBoard(board.id);
                }}>{board.title}</Link></td>

                <td className="px-4 py-4 text-left">{board.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link href="/board_category/Posts" className="float-right px-5 py-2 font-bold border-2 rounded-lg text-neutral-900 hover:bg-neutral-200">글쓰기</Link>	
	  </div>
	  <BoardPaging
          total={posts.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />	
    </>
	</Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;

export default BoardList

