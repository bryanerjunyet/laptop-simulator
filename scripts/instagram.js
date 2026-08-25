const account = {
  username: "@x0427.wav",
  display: "X.0427",
  bio: ["唱歌的人 | 舞台 | 练习中 🎤", "“如果光还没有照到我，那我就先继续唱。”"],
  stats: { posts: 24, followers: "12.4k", following: 532 }
};

const posts = [
  {
    image: "../assets/images/posts/zhuiguang-performance-1.jfif",
    likes: 8421,
    caption: "今晚真的像梦一样。谢谢台下每一个跟我一起唱的人。那一刻我真的以为，自己离那个舞台没有那么远。✨",
    comments: [
      ["coco_19", "你真的会红的😭"],
      ["stagekid_8", "下次开演唱会我要第一排🔥"],
      ["yunnn", "声音太稳了吧，现场直接起鸡皮疙瘩"],
      ["musicclub_24", "今晚全场最亮就是你✨"],
      ["mango.wav", "拜托不要放弃唱歌🥺"]
    ]
  },
  {
    image: "../assets/images/posts/zhuiguang-performance-2.jfif",
    likes: 6983,
    caption: "有些梦到现在还是很远。可是也许就是因为很远，才值得一直走过去。🌙",
    comments: [
      ["lin_33", "你一定做得到的💪"],
      ["noisyroom", "真的很喜欢你的声音🎧"],
      ["a7_notes", "以后大红了我就是老粉"],
      ["bluehour", "你属于舞台🌟"],
      ["tinyamp", "这张照片好像电影画面🎞️"]
    ]
  }
];

const content = document.getElementById("content");
const modal = document.getElementById("postModal");
const commentList = document.getElementById("commentList");
let activePost = 0;

document.querySelectorAll(".nav").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".nav").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderView(button.dataset.view);
  });
});

document.getElementById("closeModal").addEventListener("click", closePost);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closePost();
});

document.getElementById("commentForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("commentInput");
  const text = input.value.trim();
  if (!text) return;

  posts[activePost].comments.push(["you", text]);
  input.value = "";
  renderComments();
  renderProfile();
});

function renderView(view) {
  if (view === "profile") {
    renderProfile();
    return;
  }

  const copy = {
    search: ["搜索", "搜索栏暂时没有输入记录。最近搜过：录音棚、公开试镜、兼职演出。"],
    explore: ["探索", "这里大多是舞台片段、乐队排练和演唱会短视频。越看越像提醒。"],
    reels: ["Reels", "草稿箱里有 7 支未发布短片，最后一次编辑停在凌晨 2:06。"],
    messages: ["消息", "有几条未读鼓励，也有很多已读不回。"],
    saved: ["收藏", "收藏夹：发声练习、便宜录音设备、面试穿搭、租房资讯。"]
  }[view];

  content.innerHTML = `
    <section class="placeholder">
      <h2>${copy[0]}</h2>
      <p>${copy[1]}</p>
      <div class="placeholder-grid">
        <div class="placeholder-card">声乐训练：混声稳定练习</div>
        <div class="placeholder-card">公开招募：校园音乐节嘉宾</div>
        <div class="placeholder-card">收藏帖子：如何在小房间录干净人声</div>
      </div>
    </section>
  `;
}

function renderProfile() {
  content.innerHTML = `
    <section class="profile">
      <header class="profile-head">
        <img class="profile-photo" src="${posts[0].image}" alt="profile">
        <div class="profile-main">
          <div class="profile-row">
            <h1>${account.username}</h1>
            <button class="follow" type="button">Following</button>
          </div>
          <div class="stats">
            <strong>${account.stats.posts}</strong><span>帖子</span>
            <strong>${account.stats.followers}</strong><span>粉丝</span>
            <strong>${account.stats.following}</strong><span>关注</span>
          </div>
          <div class="bio">
            <strong>${account.display}</strong>
            <p>${account.bio[0]}<br>${account.bio[1]}</p>
          </div>
        </div>
      </header>
      <div class="post-grid">
        ${posts.map((post, index) => `
          <article class="post-card">
            <img src="${post.image}" alt="performance post ${index + 1}" data-post="${index}">
            <div class="post-body">
              <div class="actions">
                <button type="button" data-like="${index}">♡</button>
                <button type="button" data-post="${index}">💬</button>
                <button type="button">↗</button>
              </div>
              <strong class="likes">${post.likes.toLocaleString()} likes</strong>
              <p class="caption"><strong>${account.username}</strong> ${post.caption}</p>
              <div class="comments-preview">
                ${post.comments.slice(0, 3).map((comment) => `<span><strong>${comment[0]}</strong> ${comment[1]}</span>`).join("")}
              </div>
              <button class="view-comments" type="button" data-post="${index}">查看全部 ${post.comments.length} 条评论</button>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;

  content.querySelectorAll("[data-post]").forEach((item) => {
    item.addEventListener("click", () => openPost(Number(item.dataset.post)));
  });

  content.querySelectorAll("[data-like]").forEach((item) => {
    item.addEventListener("click", () => {
      const post = posts[Number(item.dataset.like)];
      if (item.textContent === "♡") {
        item.textContent = "♥";
        post.likes += 1;
      } else {
        item.textContent = "♡";
        post.likes -= 1;
      }
      renderProfile();
    });
  });
}

function openPost(index) {
  activePost = index;
  const post = posts[index];
  document.getElementById("modalImage").src = post.image;
  document.getElementById("modalCaptionUser").textContent = account.username;
  document.getElementById("modalCaption").textContent = post.caption;
  renderComments();
  modal.classList.remove("hidden");
}

function closePost() {
  modal.classList.add("hidden");
}

function renderComments() {
  commentList.innerHTML = posts[activePost].comments.map((comment) => `
    <div class="comment"><strong>${comment[0]}</strong> <span>${comment[1]}</span></div>
  `).join("");
}

renderProfile();
