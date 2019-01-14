import React from "react";

import BlogSummary from './BlogSummary';

const BlogList = () => {

    return <div className="blog-list">
        <BlogSummary/>
        <BlogSummary/>
        <BlogSummary/>
    </div>;
};

export default BlogList;
