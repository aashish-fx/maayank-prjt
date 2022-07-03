import React,{useEffect,useState} from 'react';
import '../styles/Admin.css';
import Article from './Article';
import axios from "axios";
const Admin = ()=>{
    const [articles,setArticles] = useState([])
    useEffect(()=>{
        async function fetchArticles() {
            const ArticleList = await axios.get(
              `${host}/api/questions/toVerify`
            );
            setArticles(ArticleList.data);
          }
          fetchArticles();
    },[])
    return (
        <div className='AdminBody'>
            <div className='AdminHeaderContainer'>
                <div className='AdminHeader'>
                    ADMIN PANEL
                </div>
            </div>
            <div>
            {articles.map((article) => (
                <Article
                // key is the meccessaty whenever i am using .map function
                key={article._id}
                question={article._id}
                user={article.user}
                isAdmin = {true}
                title={article.title}
                questionBody={article.questionBody}
                tags={article.tags}
                votes={article.votes}
                deleteQuestion={deleteQuestion}
                setDeleteQuestion={setDeleteQuestion}
                isShowSignup={isShowSignup}
                setIsShowSignup={setIsShowSignup}
                />
            ))}
            </div>
        </div>
    );
}
export default Admin;