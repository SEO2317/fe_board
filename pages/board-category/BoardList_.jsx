import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import axios from 'axios'
import curBoardAtom from '../atoms/curBoardAtom';
import { useAtom } from 'jotai';
import styled from "styled-components";


const BoardList = () => {
  const [boards, setBoards] = useState([]);
  const [_, SetCurBoard] = useAtom(curBoardAtom);
  useEffect(() => {
    axios
      .get('http://localhost:3040/post')
      .then((response) => {
        setBoards(response.data)
      }).catch(error => {
        console.error(error)
      })

    console.log(boards);
  }, []);

  return (
    <>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse table-auto">
          <thead>
            <tr className="rounded-lg text-sm font-medium text-gray-700 text-left text-[0.9674rem]">
              <th className="px-4 py-2 bg-[#F8F8F8]">번호</th>
              <th className="px-4 py-2 bg-[#F8F8F8] text-center">제목</th>
              <th className="px-4 py-2 bg-[#F8F8F8] text-center">내용</th>
            </tr>
          </thead>
          {boards && boards.map(board => (
            <tbody className="text-sm font-normal text-gray-700">
              <tr key={board.id + board.title + board.body} className="py-10 border-b border-gray-200 hover:bg-gray-100">
                <td className="px-4 py-4">{board.id}</td>
                <Link href="/board-category/ModifyBoard" onClick={() => {
                  SetCurBoard(board.id);
                }}>
                  <td className="px-4 py-4 text-left">{board.title}</td>
                </Link>
                <td className="px-4 py-4 text-left">{board.body}</td>
              </tr>
            </tbody>
          ))}
        </table>
        <Link href="/board-category/WriteBoard" className="float-right px-5 py-2 font-bold border-2 rounded-lg text-neutral-900 hover:bg-neutral-200">글쓰기</Link>
      </div>
    </>
  )
}
export default BoardList