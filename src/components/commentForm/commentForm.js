
export default function CommentForm(props) {
    return (
        <form onSubmit={props.handleSubmit} class="d-flex flex-row add-comment-section mt-4 mb-4">
        <input name="comment" type="text" class="form-control mr-3" placeholder="Введите комментарий"/>
        <button class="btn btn-primary" type="submit">Comment</button>
        </form>
    );
}