import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useRouter } from 'next/router';

import ResourceJumbotron from '@/components/resources/ResourceJumbotron';
import { server } from '@/config';

const Blog = () => {
  const router = useRouter();
  const { id } = router.query;

  const [blog, setBlog] = useState<any>([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initData = async () => {
    const res = await axios.get(`${server}/api/posts/${id}`);
    setBlog(res.data);
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    id && initData();
  }, [id, initData]);

  // const results = document.getElementById('body');
  // results?.innerHTML = blog.body;
  // results.innerHTML = results.textContent;

  return (
    <section>
      <ResourceJumbotron />
      <div className="flex-row gap-2 items-center p-16 border-2">
        <h1 className="text-3xl text-center text-primary">{blog.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: blog.body }}></div>
      </div>
    </section>
  );
};

export default Blog;
