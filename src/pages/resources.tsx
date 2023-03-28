import { useState, useEffect } from 'react';

import axios from 'axios';

import BlogList from '@/components/resources/BlogList';
import Download from '@/components/resources/Download';
import ResourceJumbotron from '@/components/resources/ResourceJumbotron';
import { server } from '@/config';
import Meta from '@/layout/Meta';

const Resources = () => {
  const [blogs, setBlogs] = useState([]);

  const initData = async () => {
    const res = await axios.get(`${server}/api/posts/getDashboardBlogs`);
    setBlogs(res.data);
  };

  useEffect(() => {
    initData();
  }, []);
  // console.log(blogs);
  return (
    <div>
      <Meta title="Talent Propeller - Resources" />
      <ResourceJumbotron />
      <Download />
      <BlogList blogs={blogs} />
    </div>
  );
};

// export async function getStaticProps() {
//   const filePath = path.join(process.cwd(), 'src/database/data.json');
//   const jsonData = await fsPromises.readFile(filePath, 'utf-8');
//   const objectData = JSON.parse(jsonData);

//   return {
//     props: objectData,
//   };
// }

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`${server}/api/posts`);
//   const blogs = await res.json();

//   // Pass data to the page via props
//   return { props: { blogs } };
// }
export default Resources;

// export const getStaticProps = async () => {
//   const res = await fetch(
//     'https://jsonplaceholder.typicode.com/posts?_limit=9'
//   );

//   const blogs = await res.json();

//   return {
//     props: {
//       blogs,
//     },
//   };
// };
