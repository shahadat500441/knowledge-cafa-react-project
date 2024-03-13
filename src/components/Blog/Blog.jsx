import PropTypes from 'prop-types';
import { FaBookReader } from "react-icons/fa";



const Blog = ({blog}) => {
    const {title, cover,author,author_img,posted_date, reading_time, hashtags} = blog
    console.log(blog)
    return (
        <div className='mb-20'>
            <img className='w-full rounded-md mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex gap-3'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h4 className='text-xl'>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className='mr-2 '>{reading_time} min red </span>
                    <button className='text-2xl'><FaBookReader /></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p className='mt-4'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a className='mr-2' href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes ={
    blog:PropTypes.object.isRequired
}


export default Blog;