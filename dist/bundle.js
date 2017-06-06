(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _post = require('./post');

var _post2 = _interopRequireDefault(_post);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _ui = require('./ui');

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_post2.default.findAll().then(_ui2.default.renderPosts).catch(function (error) {
  return console.log(error);
});

_user2.default.findAllActive().then(_ui2.default.renderActiveUsers).catch(function (error) {
  return console.log(error);
});

},{"./post":2,"./ui":3,"./user":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Post = {
  findAll: function findAll() {
    return new Promise(function (resolve, reject) {
      var uri = "http://localhost:3000/posts";
      var request = new XMLHttpRequest();
      request.open("GET", uri, true);
      request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
          resolve(JSON.parse(request.response));
        }
      };
      request.onerror = function () {
        reject(new Error("Something Went wrong on the API"));
      };
      request.send();
    });
  }
};

exports.default = Post;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ui = {
  renderPosts: function renderPosts(posts) {
    var postElements = posts.map(function (post) {
      var title = post.title,
          lastReply = post.lastReply;

      return articleTemplate(title, lastReply);
    });

    var target = document.querySelector('.container');
    target.innerHTML = postElements.join(''); // map returns an array(elements). convert to string for proper display
  },
  renderActiveUsers: function renderActiveUsers(users) {
    var userElements = users.map(function (user) {
      var name = user.name,
          avatar = user.avatar;

      return sidebarTemplate(name, avatar);
    });
    var target = document.querySelector('.sidebar-content');
    target.innerHTML = userElements.join('');
  }
};

function articleTemplate(title, lastReply) {
  var template = '\n    <article class="post">\n      <h2 class="post-title">\n        ' + title + '\n      </h2>\n      <p class="post-meta">\n        ' + lastReply + '\n      </p>\n    </article>';
  return template;
}

function sidebarTemplate(name, avatar) {
  var template = '\n    <div class="active-avatar">\n      <img width="54" src="assets/images/' + avatar + '">\n      <h5 class="post-author">' + name + '</h5>\n    </div>';
  return template;
}

exports.default = ui;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var User = {
  findAllActive: function findAllActive() {
    return new Promise(function (resolve, reject) {
      var uri = "http://localhost:3000/activeUsers";
      var request = new XMLHttpRequest();
      request.open("GET", uri, true);
      request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
          resolve(JSON.parse(request.response));
        }
      };
      request.onerror = function () {
        reject(new Error("Something Went wrong on the API"));
      };
      request.send();
    });
  }
};

exports.default = User;

},{}]},{},[1]);
