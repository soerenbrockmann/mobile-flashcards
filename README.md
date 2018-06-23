# Mobile Flashcards: A mobile app to study flashcards

This app allows users to study collections of flashcards. Users can create different categories, add flashcards to those categories, then take quizzes on those collections.

To get started developing right away:

* install dependencies `yarn install`
* yarn start


## What You're Getting

```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src # Source files
    ├── actions # Redux actions.
    │       ├── categoriesAction.js # Category related actions
    │       ├── commentsAction.js # Comments related actions
    │       ├── loginAction.js # Login related actions
    │       ├── postsAction.js # Posts related actions
    │       ├── sortAction.js # Sort related actions
    │       ├── index.js # Exports actions
    ├── components # React components.
    │   ├── App
    │       ├── App.js # Renders basic structure and routes
    │       ├── App.css # Component specific styles
    │       ├── App.test.js # Component test
    │       ├── index.js # Exports component
    │   ├── CommentForm
    │       ├── CommentForm.js # Renders a form to add or edit a comment
    │       ├── CommentForm.css # Component specific styles
    │       ├── CommentForm.test.js # Component test
    │       ├── index.js # Exports component
    │   ├── Error
    │       ├── Error.js # Renders 404 error
    │       ├── Error.css # Component specific styles
    │       ├── Error.test.js # Component test
    │       ├── index.js # Exports component
    │   ├── CommentItem
    │       ├── CommentItem.js # Renders a comment
    │       ├── CommentItem.css # Component specific styles
    │       ├── CommentItem.test.js # Component test
    │       ├── index.js # Exports component
    │   ├── Footer
    │       ├── Footer.js # Renders a footer
    │       ├── Footer.css # Component specific styles
    │       ├── Footer.test.js # Component test
    │       ├── index.js # Exports component
    │  ├── FormatDate
    │       ├── FormatDate.js # Renders a timestamp to local date format
    │       ├── FormatDate.css # Component specific styles
    │       ├── FormatDate.test.js # Component test
    │       ├── index.js # Exports component
    │   ├── HandleComment
    │       ├── HandleComment.js # Depending on state it either shows a comment or renders a form to edit a particular comment in list
    │       ├── HandleComment.css # Component specific styles
    │       ├── HandleComment.test.js # Component test
    │       ├── index.js # Exports component
    │   ├── HandlePost
    │       ├── HandlePost.js # Depending on state it either shows a post or renders a form to edit a post
    │       ├── HandlePost.css # Component specific styles
    │       ├── HandlePost.test.js # Component test
    │       ├── index.js # Exports component
    │   ├── Header
    │       ├── Header.js # Renders the header
    │       ├── Header.css # Component specific styles
    │       ├── Header.test.js # Component test
    │       ├── index.js # Exports component
    │   ├── Logo
    │       ├── Logo.js # Renders the logo
    │       ├── Logo.css # Component specific styles
    │       ├── Logo.test.js # Component test
    │       ├── index.js # Exports component
    │   ├── PostsItem
    │       ├── PostsItem.js # Renders a single post in list of posts
    │       ├── PostsItem.css # Component specific styles
    │       ├── PostsItem.test.js # Component test
    │       ├── index.js # Exports component
    │   ├── Spinner
    │       ├── Spinner.js # Renders a loading spinner
    │       ├── Spinner.css # Component specific styles
    │       ├── Spinner.test.js # Component test
    │       ├── index.js # Exports component
    │   ├── Votes
    │       ├── Votes.js # Renders reusable voting buttons
    │       ├── Votes.css # Component specific styles
    │       ├── Votes.test.js # Component test
    │       ├── index.js # Exports component
    ├── containers # React components.
    │   ├── Categories
    │       ├── Categories.js # Fetches categories from dev server and renders a list of clickable categories
    │       ├── Categories.css # Component specific styles
    │       ├── Categories.test.js # Component test
    │       ├── index.js # Exports component
    │   ├── Comments
    │       ├── Comments.js # Fetches comments, renders a list and adds a comment form for a new comment
    │       ├── Comments.css # Component specific styles
    │       ├── Comments.test.js # Component test
    │       ├── index.js # Exports component
    │   ├── CreateComments
    │       ├── CreateComments.js # Creates a comment
    │       ├── CreateComments.css # Component specific styles
    │       ├── CreateComments.test.js # Component test
    │       ├── index.js # Exports component
    │   ├── CreatePost
    │       ├── CreatePost.js # Creates a post
    │       ├── CreatePost.css # Component specific styles
    │       ├── CreatePost.test.js # Component test
    │       ├── index.js # Exports component
    │   ├── EditComment
    │       ├── EditComment.js # Edits a comment
    │       ├── EditComment.css # Component specific styles
    │       ├── EditComment.test.js # Component test
    │       ├── index.js # Exports component
    │   ├── Login
    │       ├── Login.js # Depending on state it renders a simple user login form or logged in message
    │       ├── Login.css # Component specific styles
    │       ├── Login.test.js # Component test
    │   ├── index.js # Exports component
    │   ├──    PostDetails
    │       ├── PostDetails.js # Shows post details with related comments
    │       ├── PostDetails.css # Component specific styles
    │       ├── PostDetails.test.js # Component test
    │       ├── index.js # Exports component
    │   ├── PostForm
    │       ├── PostForm.js # Renders a post form with validation
    │       ├── PostForm.css # Component specific styles
    │       ├── PostForm.test.js # Component test
    │       ├── index.js # Exports component
    │   ├── Posts
    │       ├── Posts.js # Renders a list of posts
    │       ├── Posts.css # Component specific styles
    │       ├── Posts.test.js # Component test
    │       ├── index.js # Exports component
    │   ├── Sort
    │       ├── Sort.js # Renders a select box to sort posts
    │       ├── Sort.css # Component specific styles
    │       ├── Sort.test.js # Component test
    │       ├── index.js # Exports component
    ├── Reducers # Redux reducers.
    │       ├── categoriesReducer.js # Category related reducer
    │       ├── commentsReducer.js # Comments related reducer
    │       ├── loginReducer.js # Login related reducer
    │       ├── postsReducerjs # Posts related reducer
    │       ├── sortReducer.js # Sort related reducer
    │       ├── index.js # Exports reducer
    ├── util # Redux actions.
    │       ├── categoriesApiUtil.js # Category related thunks
    │       ├── commentsApiUtil.js # Comments related thunks
    │       ├── postsApiUtil # Posts related thunks
    ├── index.css # Global styles. You probably won't need to change anything here.
    ├── index.js # You should not need to modify this file. It is used for DOM rendering only.
    ├── registerServiceWorker.js # Create React App file
    └── setupTests.js # Enzyme configuration file
```

## Important

Please 

## Create React Native App

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).
