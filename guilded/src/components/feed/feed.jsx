import "./feedStyles.css"

function Feed({children}){
    return(
        <div className="feedContainer">
            {children}
        </div>
    )
}
export default Feed;