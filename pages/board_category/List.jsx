// import { useAtom } from 'jotai';
// import React from 'react'
// import Link from 'next/link'
// import curBoardAtom from '../atoms/curBoardAtom';

// const List = (props) => {
//     const boards = props.boards;

//     const [_, SetCurBoard] = useAtom(curBoardAtom);

//     return (
//         <>
//             {boards && boards.map(board => (

//                 <table className='m-5 table-auto border-neutral-300'>
//                     <tbody className=' bg-gray-50'>
//                         <tr key={board.id + board.title + board.body} className="text-sm font-medium text-left text-gray-700 rounded-lg">
//                             <td className="px-4 py-2 bg-gray-200">{board.id}</td>
//                             <Link href="/board-category/ModifyBoard" >
//                                 <button onClick={() => {
//                                     SetCurBoard(board.id);
//                                 }} className="px-4 py-2 bg-gray-200">
//                                     <td>{board.title}</td>
//                                 </button>
//                             </Link>
//                             <td className="px-4 py-2 bg-gray-200">{board.body}</td>
//                         </tr>
//                     </tbody>
//                 </table>
//             ))}
//         </>
//     )
// }

// export default List