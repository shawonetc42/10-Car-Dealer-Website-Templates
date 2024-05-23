import React from "react";
import blogPosts from "../data/BlogData";

function Blog() {
  return (
    <div className="flex flex-col container mx-auto max-w-[1400px] mt-2">
      <div className="flex gap-5 px-5 w-full leading-[100%] text-slate-950 max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto text-4xl font-bold">Latest Blog Posts</div>
        <div className="flex gap-3 my-auto text-base font-medium text-center">
          <div>View All</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ada6c7eb3fe7b86379618dc2368e2d2b075123bf716093c50fdab2881e209166?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
            alt="icon"
            className="shrink-0 w-3.5 aspect-square"
          />
        </div>
      </div>
      <div className="px-5 mt-9 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full transform transition-transform hover:scale-105"
            >
              <div className="flex flex-col grow font-medium leading-[185%] text-slate-950 max-md:mt-8 max-md:max-w-full">
                <div className="flex overflow-hidden relative flex-col items-start px-5 pt-5 pb-20 w-full text-sm whitespace-nowrap min-h-[298px] max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet={`${post.imageUrl}width=100 100w, ${post.imageUrl}width=200 200w, ${post.imageUrl}width=400 400w, ${post.imageUrl}width=800 800w, ${post.imageUrl}width=1200 1200w, ${post.imageUrl}width=1600 1600w, ${post.imageUrl}width=2000 2000w`}
                    alt={post.category}
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="relative justify-center px-4 py-3.5 mb-28 bg-white rounded-[30px] max-md:mb-10">
                    {post.category}
                  </div>
                </div>
                <div className="flex gap-5 self-start mt-7 text-base capitalize">
                  <div>{post.author}</div>
                  <div className="flex-auto">{post.date}</div>
                </div>
                <div className="mt-5 mr-5 text-xl leading-8 max-md:mr-2.5 max-md:max-w-full">
                  {post.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
