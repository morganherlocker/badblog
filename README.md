badblog
=======

a terrible node.js blog engine with barely any features

### What?!

badblog is a dead simple blog engine powered by express and simple markdown files. To get going, do the following:

```bash
npm install badblog -g
badblog myBlog
cd myBlog
sudo npm start
```

This will create a new blog and start the server. The blog structure will look like this:

```
myBlog/
	|
	-- blog/
	-- posts/
```

In the posts directory you will see a couple files named "1" & "2". These are your first 2 posts. Add a new file called "3". The one requirement for a post is to have a title line. Your new post will look like this:

```markdown
Third Post
===

This is my **3rd** post!
```

