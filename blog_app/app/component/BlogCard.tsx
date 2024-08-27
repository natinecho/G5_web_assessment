import Image from "next/image";
import {Blog} from '@/app/types/blog'
import Link from "next/link";


const formatDate = (dateString:string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  interface BlogType{
    blog:Blog
  }

const BlogCard = ({blog}:BlogType) => {
  return (
    <Link href={`/blogs/${blog._id}`} className=" w-[75%] b flex flex-col border-t border-gray-300 p-8">
      <div>

        <div className="flex items-center gap-x-10 my-5">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-blue-100">
            <Image
              src={blog?.author?.image}
              width={96}
              height={96}
              alt="author picture"
              className="object-cover w-full h-full"
              />
          </div>
          <div>
            <div className="flex items-start gap-3">
              <p className="font-semibold text-xl">{blog.author?.name}</p>
              <p>{formatDate(blog.createdAt)}</p>
            </div>
            <div>{blog.author?.role}</div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-3/5 flex flex-col gap-7">
            <p className="font-bold text-2xl">{blog.title}</p>
            <p className="h-40 text-[#737373] overflow-hidden">
              {blog.description}
            </p>
          </div>
          <div className="w-1/4 h-48 rounded-xl overflow-hidden bg-blue-100">
            <Image
              src={blog?.author?.image}
              width={150}
              height={150}
              alt="author picture"
              className="object-cover w-full h-full"
              />
          </div>
        </div>

        <div className="flex gap-8 items-center">
          {blog.tags.map((tag,index:number) => (
            <div key= {index} className="bg-[#F5F5F5] text-[#8E8E8E] px-5 py-3 rounded-3xl">
              {tag}
            </div>
          ))}
        </div>
          </div>
    </Link>
  );
};

export default BlogCard;
