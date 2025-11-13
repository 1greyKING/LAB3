const API_URL = "https://jsonplaceholder.typicode.com/posts";
const statsDiv = document.getElementById("stats");

fetch(API_URL)
  .then(response => response.json())
  .then(posts => {
    const totalPosts = posts.length;
    const totalTitleLength = posts.reduce((sum, post) => sum + post.title.length, 0);
    const avgTitleLength = totalTitleLength / totalPosts;
    const postsOfUser1 = posts.filter(post => post.userId === 1).length;

    statsDiv.innerHTML = `
      <p><strong>Total posts:</strong> ${totalPosts}</p>
      <p><strong>Average title length:</strong> ${avgTitleLength.toFixed(2)}</p>
      <p><strong>Posts by userId=1:</strong> ${postsOfUser1}</p>
    `;
  })
  .catch(err => {
    statsDiv.innerHTML = "<p style='color:red;'>Error loading posts</p>";
  });
