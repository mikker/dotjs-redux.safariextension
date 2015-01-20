This version doesn't do any jQuery nor eval. Modern browsers want none of the latter, modern developers want none of the first. Other than that most of the following is still true:

..................... dotjs ........................

dotjs  is a  <del>Google Chrome</del>  extension  that executes
JavaScript files in `~/.js` based on their filename.

If  you navigate to  `http://www.google.com/`, dotjs
will execute `~/.js/google.com.js`.

This makes it super  easy to spruce up your favorite
pages using JavaScript.

<del>Bonus:  files in `~/.js`  have jQuery  1.4.4 loaded,
  regardless  of  whether  the  site  you're  hacking
  uses jQuery.</del>

GreaseMonkey user scripts are great, but you need to
publish them  somewhere and re-publish  after making
modifications. With dotjs, just add or edit files in
`~/.js`.

## Installation

1. Ensure you have defunkt's dotjs installed and running.
2. [Install the extension](#)

## How It Works

<del>The dotjs Safari extension then makes ajax requests
  to http://localhost:3131/convore.com.js any time you
  hit a page on convore.com, for example, and executes
  the returned JavaScript.</del>

After page load dotjs inserts a `<script src='//domain.com.js'></script>` tag at the bottom of the page.

## Requires

- dotjs installed (https://github.com/defunkt/dotjs.git)
- Safari

## Credits

- DotJS code: <https://github.com/defunkt/dotjs>
- Icon: <http://raphaeljs.com/icons/>
- jQuery: <http://jquery.com/>
- Ryan Tomayko for:

> "I almost wish you could just
   stick JavaScript in ~/.js. Do
   you know what I'm saying?"
