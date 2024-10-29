import React from 'react'
import './blog.css'
import {blog} from '../../Assets/data/data'
import { AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt, AiOutlineTags } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Card() {
  return (
    <div>
        <section className="blog">
            <div className = "container grid3">
                {blog.map((item) => (
                    <div className = "box boxItems" key= {item.id}>
                        <div className = "img">
                            <img src = {item.cover} alt = "cover" />
                        </div>
                        <div className = "details">
                            <div className = "tag">
                                <AiOutlineTags className = "icon"/>
                                <a href = "/">{item.category}</a>
                            </div>
                            <Link to = {`/details ${item.id}`} className = "link">
                               <h3>{item.title}</h3>
                               <p>{item.desc.slice (0, 180)} ...</p>
                            </Link>
                        </div>
                        <div className = "date">
                            <AiOutlineClockCircle className = "icon"/> <label htmlFor = "">{item.date}</label>
                            <AiOutlineComment className = "icon"/> <label htmlFor = "">27</label>
                            <AiOutlineShareAlt className = "icon"/> <label htmlFor = "">Share</label>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default Card