import Image from "next/image";
import {Blog} from '@/app/types/blog'
import Link from "next/link";
import { SlLike } from "react-icons/sl";



const formatDate = (dateString:string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  interface BlogType{
    relatedBlog:Blog
  }

const RelatedBlogCard = ({relatedBlog}:BlogType) => {
  return (
    <div
    key={relatedBlog._id}
    className="flex flex-col gap-2 w-full md:w-[30%] shadow-xl"
  >
    <Image
      src={relatedBlog.image}
      alt={relatedBlog.title}
      width={90}
      height={90}
      className="rounded-lg object-cover w-full h-52"
    />
    <div className="flex flex-col gap-2 p-5">

    <div className="text-[#5E5873] font-bold text-3xl">
      {relatedBlog.title}
    </div>
    <div className="flex flex-col items-start mb-6 gap-3">
      <div className="flex items-start gap-2 my-5">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-blue-100">
          <Image
            src={relatedBlog?.author?.image}
            width={96}
            height={96}
            alt="author picture"
            className="object-cover w-full h-full"
            />
        </div>
        <div className="flex items-center  gap-3" >
          <div className="flex items-center  gap-3">
            <p className="text-sm font-light text-[#5E5873]">by</p>
            <p className="font-semibold  text-[#5E5873]">
              {relatedBlog.author?.name}
            </p>
            <p>|</p>
            <p className="text-[#5E5873]">
              {formatDate(relatedBlog.createdAt)}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="flex gap-2 items-center">
      {relatedBlog.tags.map((tag, index:number) => (
          <div key={index} className="bg-[#F5F5F5] text-[#8E8E8E] px-5 py-3 rounded-3xl">
          {tag}
        </div>
      ))}
    </div>
    <div className="h-14 overflow-hiden mb-10">{relatedBlog.description}</div>

    <div className=" flex items-center justify-between border-t border-gray-300 ">
        <div className="flex items-center gap-3">
            <SlLike />
            <p>{relatedBlog?.likes} likes</p>
        </div>
        <Link href={`/blogs/${relatedBlog._id}`}> read more</Link>
    </div>
      </div>
  </div>
  );
};

export default RelatedBlogCard;
