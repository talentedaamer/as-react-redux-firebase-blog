import React from "react";

import BlogSummary from './BlogSummary';

const BlogList = ( {blog} ) => {

    console.log( 'blogList blog', blog );

    return <div className="blog-list">
        { blog && blog.map( post => {
                return (
                    <BlogSummary key={ post.id } post={post}/>
                )
        } ) }


    </div>;
};

export default BlogList;
