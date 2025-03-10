import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className='w-1/3 bg-slate-100'>
            <h2 className='bg-orange-200 py-4 px-3 text-center text-xl font-semibold mt-2 rounded-lg'>Spent time on read :{readingTime} min</h2>
            <h3 className='text-2xl text-center pt-3'>Bookmarked Blogs: {bookmarks.length}</h3>
            {
                bookmarks.map((bookmark, index) => <Bookmark 
                key={index} 
                bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;