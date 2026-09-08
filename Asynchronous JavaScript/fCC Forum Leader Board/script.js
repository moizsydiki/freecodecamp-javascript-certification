const forumLatest =
  "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://cdn.freecodecamp.org/curriculum/forum-latest";

const allCategories = {
  299: { category: "Career Advice", className: "career" },
  409: { category: "Project Feedback", className: "feedback" },
  417: { category: "freeCodeCamp Support", className: "support" },
  421: { category: "JavaScript", className: "javascript" },
  423: { category: "HTML - CSS", className: "html-css" },
  424: { category: "Python", className: "python" },
  432: { category: "You Can Do This!", className: "motivation" },
  560: { category: "Back-End Development", className: "backend" },
};

// 1. Calculate how long ago a post was created/updated
const timeAgo = (timestamp) => {
  const currentTime = new Date();
  const postTime = new Date(timestamp);

  const difference = currentTime - postTime;

  const minutes = Math.floor(difference / (1000 * 60));
  const hours = Math.floor(difference / (1000 * 60 * 60));
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  if (minutes < 60) {
    return `${minutes}m ago`;
  } else if (hours < 24) {
    return `${hours}h ago`;
  } else {
    return `${days}d ago`;
  }
};

// 2. Format view count
const viewCount = (views) => {
  if (views >= 1000) {
    return `${Math.floor(views / 1000)}k`;
  }

  return views;
};

// 3. Generate category link
const forumCategory = (id) => {
  const category = allCategories[id] || {
    category: "General",
    className: "general",
  };

  return `<a class="category ${category.className}" href="${forumCategoryUrl}${category.className}/${id}">${category.category}</a>`;
};

// 4. Generate avatars
const avatars = (posters, users) => {
  return posters
    .map((poster) => {
      const user = users.find((user) => user.id === poster.user_id);

      let src = user.avatar_template.replace("{size}", "30");

      if (src.startsWith("/")) {
        src = avatarUrl + src;
      }

      return `<img alt="${user.name}" src="${src}"/>`;
    })
    .join("");
};

// 5. Display latest posts
const showLatestPosts = (data) => {
  const { users, topic_list } = data;
  const { topics } = topic_list;

  document.querySelector("#posts-container").innerHTML = topics
    .map((topic) => {
      const {
        id,
        title,
        views,
        posts_count,
        slug,
        posters,
        category_id,
        bumped_at,
      } = topic;

      return `
  <tr>
    <td>
      <a class="post-title" href="${forumTopicUrl}${slug}/${id}">
        ${title}
      </a>
      ${forumCategory(category_id)}
    </td>
    <td>
      <div class="avatar-container">${avatars(posters, users)}</div>
    </td>
    <td>${posts_count - 1}</td>
    <td>${viewCount(views)}</td>
    <td>${timeAgo(bumped_at)}</td>
  </tr>
`;
    })
    .join("");
};

// 6. Fetch forum data
const fetchData = async () => {
  try {
    const response = await fetch(forumLatest);
    const data = await response.json();

    showLatestPosts(data);
  } catch (error) {
    console.log(error);
  }
};

// Run the function
fetchData();
