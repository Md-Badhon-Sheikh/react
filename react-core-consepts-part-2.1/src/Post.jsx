

const Post = ({post}) => {
    // console.log(post);
    const {title, userId, body, id} = post;
    return (
        <div className="border-2 m-2 rounded-xl p-2">
            <h3>Title: {title} </h3>
            <h4>UserId:{userId} </h4>
            <h5>PostId: {body} </h5>
        </div>
    );
};

export default Post;