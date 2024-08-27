Blog Application
A blog application built with Next.js, Tailwind CSS, TypeScript, Redux, and RTK Query. This application allows users to view, create, edit, and delete blog posts, and also provides features for searching and filtering blog content.

Features
Responsive Design: Built with Tailwind CSS to ensure a responsive and modern design.
Dynamic Routing: Next.js handles dynamic routes for blog details and blog list pages.
State Management: Utilizes Redux and RTK Query for efficient state management and data fetching.
Rich Text Rendering: Supports HTML content in blog descriptions with safe rendering.
Pagination and Search: Includes features for pagination and searching through blog posts.
Technologies Used
Next.js: React framework for server-side rendering and static site generation.
Tailwind CSS: Utility-first CSS framework for styling.
TypeScript: Superset of JavaScript for type safety.
Redux: State management library.
RTK Query: Data fetching and caching library.
React: JavaScript library for building user interfaces.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/natinecho/G5_web_assessment.git
Navigate to the project directory:

bash
Copy code
cd G5_web_assessment/blog_app
Install dependencies:

bash
Copy code
npm install
Run the development server:

bash
Copy code
npm run dev
Open your browser and navigate to http://localhost:3000 to view the application.

Usage
Viewing Blogs: Browse the list of blogs on the homepage.
Viewing Blog Details: Click on a blog title to view its details.
Searching Blogs: Use the search functionality to find specific blogs.
Pagination: Navigate through pages of blog posts using the pagination controls.
API Endpoints
The application uses the following API endpoints:

Fetch Blog List: GET /api/blogs
Fetch Blog by ID: GET /api/blogs/:id
Create Blog: POST /api/blogs
Update Blog: PUT /api/blogs/:id
Delete Blog: DELETE /api/blogs/:id
Contributing
Fork the repository.

