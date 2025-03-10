import React from 'react';
import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa6";


const Blog = ({blog, handleBookmark, handleMarkAsRead}) => {
    const {id, title, cover, author_img, author, reading_time, posted_date, hashtags } = blog;
    return (
        <div>
            <img className='w-full my-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-6 justify-items-center'>
                    <img width={54} src={author_img} alt="" />
                    <div>
                        <h3 className='text-lg'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='items-center'>
                    <span>0{reading_time} min read</span>
                    <button 
                    className='ml-2 text-2xl'
                    onClick={()=> handleBookmark(blog)}
                    ><FaRegBookmark /></button>
                </div>
            </div>

            <h2 className="text-3xl font-semibold my-3">{title}</h2>
            <p>
                {
                    hashtags.map((hash, index) => <span key={index}><a className='ml-3' href="">#{hash}</a> </span>)
                }
            </p>
            <button onClick={()=> handleMarkAsRead(id, reading_time)} className='mt-2 text-[#6047EC] font-semibold underline'>Mark as Read</button>
            
        </div>
    );
};

Blog.PropTypes={
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func
}

export default Blog;