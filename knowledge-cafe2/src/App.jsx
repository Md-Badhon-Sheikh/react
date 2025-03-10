
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)
  
  const handleBookmark = blog =>{
    const newBookmark = [...bookmarks, blog]
    setBookmarks(newBookmark);
  }

  const handleMarkAsRead = (id, time) =>{
    setReadingTime(readingTime + time);
// remove the read blog from bookmark 
// console.log('remove', id)
 const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
 setBookmarks(remainingBookmarks);

  }

  return (
    <div className='max-w-6xl mx-auto'>
      <Header></Header>
      <div className='md:flex'>
      <Blogs handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  )
}

export default App
