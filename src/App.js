import './App.css';
import Posts from "./components/Posts/Posts";
import {PostsContext} from "./contexts/post";
import {useEffect, useState} from "react";
import axios from "axios";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import PostPage from "./components/PostPage/PostPage";

function App() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const {data} = await axios.get("https://karpanazarii.github.io/jsonapi/blogs.json")
        setPosts(data)
    }

    return (
        <PostsContext.Provider value={posts}>
            <Router>
                <Switch>
                    <Route path="/:id">
                        <PostPage />
                    </Route>
                    <Route exact path="/">
                        <div className="App">
                            <Posts/>
                        </div>
                    </Route>

                </Switch>
            </Router>
        </PostsContext.Provider>
    );
}

export default App;
