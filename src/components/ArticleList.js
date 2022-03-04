import React from "react";
import Article from "./Article"

function ArticleList({posts}){
    
    const articleCards = posts.map(post => <Article title={post.title} date={post.date} preview={post.preview} minutes={post.minutes}  key={post.id} />)
    return(
        <main>
            {articleCards}

        </main>

    )
}


export default ArticleList;