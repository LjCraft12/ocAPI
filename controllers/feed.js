exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [{title: 'First Post', content: 'This is the first post'}]
    })
};

exports.postNewPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    // Create post in db
    res.status(201).json({
        messsage: 'Post Created Successfully',
        post: {id: (12*2+1).toString(), title: title, content:content}
    });
};