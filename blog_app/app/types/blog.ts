
export interface Blog {
    _id: string;
    image: string;
    title: string;
    description: string;
    author: Author;
    isPending: boolean;
    tags: string[];
    likes: number;
    relatedBlogs: Blog[];
    skills: string[];
    createdAt: string;
    updatedAt: string;
  }

  export interface Author{
    _id:string;
    name:string;
    email: string;
    image:string
    role:string
  }