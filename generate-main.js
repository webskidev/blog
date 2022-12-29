const { readdirSync, writeFileSync } = require('fs');
const { renderMainPageTemplate } = require('./templates/main-page');

const postsDir = './posts';

let postsMetadata = [];

readdirSync(postsDir).forEach(postDir => {
  readdirSync(`${postsDir}/${postDir}`).forEach(file => {
    const fileExtension = file.split('.')[1];
    if (fileExtension !== 'json') return;

    const path = `${postsDir}/${postDir}/${file}`;
    const metadata = require(path);

    postsMetadata.push(metadata);
  })
});

writeFileSync('index.html', renderMainPageTemplate(postsMetadata));

