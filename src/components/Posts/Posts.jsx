import {useState, useContext} from "react";
import blogImg from "../../img/blog-icon.png";
import dateImg from "../../img/date-icon.png";
import goImg from "../../img/go.png";
import {PostsContext} from "../../contexts/post";
import {Link} from "react-router-dom"


function Posts() {
    const [value, setValue] = useState('');
    const posts = useContext(PostsContext)

    const filteredPosts = posts.filter(post => {
        return post.titleBlog.toLowerCase().includes(value.toLowerCase())
    })
    return (
        <div>
            <div className="Input">
                <h4>Filter by keywords</h4>
                <input className="input-string" type="text" onChange={(event) => setValue(event.target.value)}/>
                <h3 className="result">Result: {filteredPosts.length}</h3>
                <hr/>
            </div>
            <div className="postsBox">
                {filteredPosts.map(post => (
                    <div className="postsItem" key={post.id}>
                        <img className="postsItem-img" src={blogImg}/>
                        <p className="postsItem-date"><img height={20} width={20}
                                                           src={dateImg}/><span>{post.date}</span></p>
                        <h5 className="postsItem-title">{post.titleBlog}</h5>
                        <p className="postsItem-category"><b>Categoty:</b> {post.category}</p>
                        <p className="postsItem-text">{post.text.slice(0,200)}...</p>

                        <Link to={post.id} className="postsItem-btn" >
                            Read More <img width={13} height={10} src={goImg}/>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Posts;