const getPostsCardsFromMetadata = (postsMetadata) => {
  return postsMetadata.reduce((html, postMetadata) => {
    return html += (`<div>
      <div>${postMetadata.emoji}</div>
      <h3>${postMetadata.title}</h3>
      <span>${postMetadata.submissionDate}</span>
      <p>${postMetadata.description}</p>
    </div>`)
  }, ''
  )
}

const renderMainPageTemplate = (postsMetadata) => {
  return `<!DOCTYPE html>
      <html lang="en">
      
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Blog</title>
      </head>
      
      <body>
        <blog-navbar></blog-navbar>
      
        <h1>My Blog</h1>

        <section>
          ${getPostsCardsFromMetadata(postsMetadata)}
        </section>
      
        <blog-footer></blog-footer>
        <script src="./index.js" type="module"></script>
      </body>
      
      </html>`
}

module.exports = {
  renderMainPageTemplate
};