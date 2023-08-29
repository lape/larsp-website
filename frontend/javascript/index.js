import "index.css"
import "popper.js"
import "jquery.js"
import "bootstrap.min.js"

// Fontawesome
import "solid.min.js"
import "brands.min.js"
import "fontawesome.min.js"

// CommentBox.io
import commentBox from "commentbox.io";
commentBox('5766294217424896-proj', {
  sortOrder: 'newest'
});

// Import all JavaScript & CSS files from src/_components
import components from "bridgetownComponents/**/*.{js,jsx,js.rb,css}"
