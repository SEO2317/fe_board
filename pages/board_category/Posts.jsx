import React from 'react'

const Posts = () => {
  return (
    <div>
        <form>
  <div className="min-h-screen pt-4 bg-indigo-50 md:px-20">
    <div className="max-w-2xl px-6 py-10 m-auto bg-white rounded-md ">
      <h1 className="mb-10 text-2xl font-bold text-center text-gray-500">글 작성하기</h1>
      <div className="space-y-4">
        <div>
          <label htmlFor="title" className="font-serif text-lx">Title:</label>
          <input type="text" placeholder="title" id="title" className="px-2 py-1 ml-2 border-2 rounded-md outline-none text-md" />
        </div>
        <div>
          <label htmlFor="description" className="block mb-2 font-serif text-lg">Content:</label>
          <textarea id="description" cols="30" rows="10" placeholder="whrite here.." className="w-full p-4 font-serif text-gray-600 rounded-md outline-none resize-none bg-indigo-50"></textarea>
        </div>
        {/* <div>
          <label for="name" className="font-serif text-lx">Name:</label>
          <input type="text" placeholder="name" id="nickName" className="px-2 py-1 ml-2 border-2 rounded-md outline-none text-md" />
        </div>
        <div>
          <label for="email" className="font-serif text-lx">Email:</label>
          <input type="text" placeholder="name" id="email" className="px-2 py-1 ml-2 border-2 rounded-md outline-none text-md" />
        </div> */}
        <button className="inline-block px-8 py-2 text-lg font-semibold text-indigo-100 bg-indigo-600 rounded-md">ADD POST</button>
      </div>
    </div>
  </div>
</form>
    </div>
  )
}

export default Posts