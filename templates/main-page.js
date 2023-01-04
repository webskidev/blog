const getPostsCardsFromMetadata = (postsMetadata) => {
  return postsMetadata.reduce((html, { title, submissionDate, description }) => {
    return html += (/* html */`
      <article class="post-card">
        <img class="post-image" src="https://picsum.photos/400" alt="" srcset="">
        <h3><a href="#" class="post-title">${title}</a></h3>
        <span class="post-date">${submissionDate}</span>
        <p class="post-description">${description}</p>
      </article>
      `)
  }, ''
  )
}

const renderMainPageTemplate = (postsMetadata) => {
  return /* html */ `
      <!DOCTYPE html>
      <html lang="en">
      
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Epilogue&family=Inter:wght@400;700;800&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
        <title>My Blog</title>
      </head>
      
      <body>
        <blog-navbar></blog-navbar>
      
        <section class="hero">
          <div class="hero-details">
            <h1 class="hero-title">web up to the sky 🚀</h1>
            <p class="hero-description">My name is Piotr and I’m frontend developer. This is a place where I share some of my code, ideas and other stuff.</p>
            <blog-button>Check it out</blog-button>
          </div>
            <img class="hero-image" src="./assets/blobs.png" alt="hero image" srcset="">
        </section>
      
        
        <main id="main">
          <section class="posts">
            <h2 class="posts-header">Recent posts</h2>
            <div class="posts-wrapper">
              ${getPostsCardsFromMetadata(postsMetadata)}
            </div>
          </section>
        </main>
      
        <blog-footer></blog-footer>
        <script src="./index.js" type="module"></script>
      </body>
      
      </html>`
}

module.exports = {
  renderMainPageTemplate
};