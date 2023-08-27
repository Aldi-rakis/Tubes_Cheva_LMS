import React from "react";

const Blog = () => {
  return (
    <div class="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="flex items-end justify-between">
          <div class="flex-1 text-center lg:text-left">
            <h2 class="text-3xl text-center font-bold text-black sm:text-4xl lg:text-5xl">Our Blog</h2>
          </div>
        </div>

        <div class="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
          <div class="overflow-hidden bg-white rounded shadow">
            <div class="p-5">
              <div class="relative">
                <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                  <img class="object-cover rounded-lg w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg" alt="" />
                </a>
              </div>

              <p class="mt-5 text-xl font-semibold">
                <a href="#" title="" class="text-black">
                  {" "}
                  Lorem Ipsum.{" "}
                </a>
              </p>
              <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
              <hr className="mt-4" />
              <div className="mt-4 flex justify-between ">
                <div>
                  <p className="text-base text-black">Alex Liones</p>
                </div>
                <div>
                  <p className="text-gray-400">28 Aug 2020, 09:48:00</p>
                </div>
              </div>
              <div className="flex justify-center items-center mt-4">
                <a href="#" title="" class="items-center justify-center hidden px-4 py-3 text-base font-medium text-white transition-all duration-200 bg-[#F8A400] border border-transparent rounded-md lg:inline-flex hover:bg-black focus:bg-black" role="button">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div class="overflow-hidden bg-white rounded shadow">
            <div class="p-5">
              <div class="relative">
                <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                  <img class="object-cover w-full rounded-lg h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg" alt="" />
                </a>
              </div>

              <p class="mt-5 text-xl font-semibold">
                <a href="#" title="" class="text-black">
                  {" "}
                  Lorem Ipsum.{" "}
                </a>
              </p>
              <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
              <hr className="mt-4" />
              <div className="mt-4 flex justify-between ">
                <div>
                  <p className="text-base text-black">Alex Liones</p>
                </div>
                <div>
                  <p className="text-gray-400">28 Aug 2020, 09:48:00</p>
                </div>
              </div>
              <div className="flex justify-center items-center mt-4">
                <a href="#" title="" class="items-center justify-center hidden px-4 py-3 text-base font-medium text-white transition-all duration-200 bg-[#F8A400] border border-transparent rounded-md lg:inline-flex hover:bg-black focus:bg-black" role="button">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div class="overflow-hidden bg-white rounded shadow">
            <div class="p-5">
              <div class="relative">
                <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                  <img class="object-cover rounded-lg w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg" alt="" />
                </a>
              </div>

              <p class="mt-5 text-xl font-semibold">
                <a href="#" title="" class="text-black">
                  {" "}
                  Lorem Ipsum.{" "}
                </a>
              </p>
              <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
              <hr className="mt-4" />
              <div className="mt-4 flex justify-between ">
                <div>
                  <p className="text-base text-black">Alex Liones</p>
                </div>
                <div>
                  <p className="text-gray-400">28 Aug 2020, 09:48:00</p>
                </div>
              </div>
              <div className="flex justify-center items-center mt-4">
                <a href="#" title="" class="items-center justify-center hidden px-4 py-3 text-base font-medium text-white transition-all duration-200 bg-[#F8A400] border border-transparent rounded-md lg:inline-flex hover:bg-black focus:bg-black" role="button">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
