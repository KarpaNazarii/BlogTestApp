import {useContext} from "react";
import {PostsContext} from "../../contexts/post";
import {Link, useParams} from "react-router-dom"
import backImg from "../../img/back.png";
import backPage from "../../img/back-page.png"
function PostPage() {
    const {id} = useParams()
    const post = useContext(PostsContext).find(e => e.id === id)

    return(
        <div className="PostPage">
            {/*Hello{post?.text}*/}
            <div className="postPageImg"><img src={backPage}/></div>
            <div className="PostPageContent">
                <h3 className="PostPageTitle">{post.titleBlog}</h3>
                <p className="PostPageText">{post.text}</p>
            </div>
            <div className="PostPageBtn">
                <Link to="/"><img width={13} height={10} src={backImg}/>Back to homepage</Link>
            </div>

        </div>
    );
}

export default PostPage;