const { marked } = require('marked');
const { readdirSync, readFileSync, writeFileSync } = require('fs');
const hljs = require('highlight.js');

marked.setOptions({
  langPrefix: 'hljs language-',
  highlight: function(code, lang) {
    return hljs.highlight(lang, code).value;
  }
});

const postsDir = './posts';
const distDir = './../posts/dist';

readdirSync(postsDir).forEach(postDir => {

  const postDirPath = `${postsDir}/${postDir}`;

  readdirSync(postDirPath).forEach(file => {

    const fileExtension = file.split('.')[1];

    if (fileExtension !== 'md') return;

    const path = `${postsDir}/${postDir}/${file}`;

    const markdown = readFileSync(path, { encoding: 'utf8' });
    const parsedMarkdown = marked.parse(markdown);

    const cssStyles = readFileSync('./node_modules/highlight.js/styles/a11y-dark.css', "utf8");

    const template = `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Blog</title>
        <style>${cssStyles}</style>
      </head>
      <body>
        <blog-navbar></blog-navbar>
        ${parsedMarkdown}

        <blog-footer></blog-footer>
        <script src="../index.js" type="module"></script>
      </body>
      </html>`

    const filename = file.split('.')[0];
    writeFileSync(`${distDir}/${filename}.html`, template);
    
    console.log(template);

  })
  
  
});

