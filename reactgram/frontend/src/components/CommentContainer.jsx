import { upload } from "../utils/config"
import { Link } from "react-router-dom"

export default function CommentContainer({photo, handleComment, commentText, setCommentText}){
    return(
        <div className="comments">
            <h3>Comentários: ({photo.comments.length})</h3>
            <form onSubmit={handleComment}>
                <input type="text" placeholder="Insira seu comentário" value={commentText} onChange={e => setCommentText(e.target.value)} />
                <input type="submit" value="Enviar" />
            </form>
            {photo.comments.length === 0  && <p>Não há comentários...</p>}
            {photo.comments.map(comment => (
                <div className="comment" key={comment.comment}>
                    <div className="author">
                        {comment.userImage && (
                            <img src={`${upload}/users/${comment.userImage}`} alt={comment.userName} />
                        )}
                        <Link to={`/users/${comment.userId}`}>
                            <p>{comment.userName}</p>
                        </Link>
                    </div>
                    <p>{comment.comment}</p>
                </div>
            ))}
            </div>
    )
}