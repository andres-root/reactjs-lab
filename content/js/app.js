'use strict';

var CommentBox = React.createClass({
	render: function() {
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList />
				<CommentForm />
			</div>
		);
	}
});

var CommentList = React.createClass({
	render: function() {
		return (
			<div className="commentList">
				this is a comment list!
			</div>
		);
	}
});

var CommentForm = React.createClass({
	render: function () {
		return (
			<div className="commentForm">
				this is a comment form!
			</div>
		);
	}
});

var Comment = React.createClass({
	render: function () {
		return (
			<div className="comment">
				<h2 className="commentAuthor">
					{ this.props.author }
				</h2>
				{ this.props.children }
			</div>
		);
	}
});

React.render(
	<CommentBox />,
	document.getElementById('main')
);