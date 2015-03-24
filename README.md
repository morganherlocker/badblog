*DEPRECATED - this project is no longer maintained. I now use static site generation to keep things scaling. Feel free to clone and modify https://github.com/morganherlocker/blog*

badblog
=======

a terrible node.js blog engine with barely any features

### What?!

badblog is a dead simple blog engine powered by markdown files. It will create a bare bones blog that will automatically serve up posts with pretty urls. Other than that, it does basically nothing. The default design includes responsive rendering and not much else. Feel free to modify things to meet your needs.

### Getting Started

To get going, do the following:

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
	-- config.json
```

The config.json is loaded whenever the server is started. You set the title and any links you want in this file.

In the posts directory you will see a couple files named "1" & "2". These are your first 2 posts. Add a new file called "3". The one requirement for a post is to have a title line. Your new post will look like this:

```markdown
Third Post
===

This is my **3rd** post!
```

