const folders = {
  inbox: [
    ["Casting Team", "Audition Result", "Today", true, "Unfortunately, after careful consideration, we will not be moving forward...", `Dear Applicant,

Thank you for attending the audition.

Unfortunately, after careful consideration, we will not be moving forward with your application.

We truly appreciate your interest and effort.

Regards,
Casting Team`],
    ["KL Live House", "Performance Opportunity Update", "Yesterday", true, "At this moment, we have decided to proceed with another candidate.", `Hi,

Thank you for your submission and for preparing your set.

At this moment, we have decided to proceed with another candidate whose profile is closer to our current booking direction.

We appreciate your passion and wish you the best.`],
    ["星途制作", "关于您的试镜结果", "Mon", true, "我们这次决定选择其他更适合角色的表演者。", `您好，

感谢您参与本次试镜。

经过讨论后，我们这次决定选择其他更适合角色的表演者。

祝您未来一切顺利。`],
    ["Open Mic MY", "Lineup Confirmation", "May 17", true, "We are unable to include you in this month's final lineup.", `Hello,

Thank you for applying for this month's showcase.

The number of submissions was higher than expected, and we are unable to include you in the final lineup.

Please feel free to submit again in future rounds.`],
    ["Music Collaboration Application", "Application Status", "May 14", false, "Your vocal tone is strong, but the team is looking for a different market image.", `Hi,

We reviewed your demo carefully.

Your vocal tone is strong, but the team is looking for a different market image for this project. We will keep your details on file.

Thank you for understanding.`],
    ["Casting Office", "Casting Decision", "May 11", true, "The director has chosen to move forward with another performer.", `Dear Applicant,

Thank you for your patience.

The director has chosen to move forward with another performer. This was not an easy decision, and we appreciate your effort during callbacks.`],
    ["品牌活动部", "面试结果通知", "May 09", true, "很遗憾，本次活动暂时无法与您合作。", `您好，

感谢您来参与品牌活动面试。

很遗憾，本次活动暂时无法与您合作。希望未来还有机会。`],
    ["Talent Portal", "Profile Review", "May 06", false, "Please continue updating your portfolio for future consideration.", `Hello,

Your performer profile has been reviewed.

There are no matching opportunities at the moment. Please continue updating your portfolio for future consideration.`],
    ["Indie Label A&R", "Demo Submission", "May 02", true, "We do not have space in our development roster this quarter.", `Hello,

We listened to the two demos you sent.

You have a clear sense of emotion in your voice. Unfortunately, we do not have space in our development roster this quarter.`],
    ["Mall Event Booking", "Stage Slot Application", "Apr 29", true, "We have selected performers with existing agency representation.", `Dear Performer,

Thank you for applying for the weekend stage slot.

We have selected performers with existing agency representation for this campaign.`],
    ["Video Audition Team", "Round 2 Result", "Apr 21", true, "You will not be invited to the next round.", `Dear Applicant,

After review, you will not be invited to the next round.

We encourage you to keep training and applying.`]
  ],
  starred: [
    ["Voice Coach", "Practice notes", "Apr 12", false, "Do not let the last note collapse. Breathe before the phrase.", "Warm-up reminder: keep the jaw loose, do not push the chorus, and rest if your throat starts hurting."],
    ["Rental Room", "Monthly payment reminder", "May 18", true, "Please settle outstanding payment before the end of this week.", "This is a reminder that room payment is still outstanding. Please settle before the end of this week."]
  ],
  sent: [
    ["To: Casting Office", "Re: Casting Decision", "May 11", false, "Thank you for the opportunity. I will keep improving.", "Thank you for the opportunity. I understand the decision and will keep improving."],
    ["To: Open Mic MY", "Application - Acoustic Set", "May 15", false, "Attached is a short performance clip and set list.", "Hello, attached is a short performance clip and my proposed set list. Thank you for considering my application."]
  ],
  drafts: [
    ["Draft", "Maybe one more demo", "2:04 AM", true, "I know the last demo was not perfect, but...", "I know the last demo was not perfect, but I can record it again if you are still open to listening."]
  ],
  auditions: [],
  trash: []
};

folders.auditions = folders.inbox.filter((mail) => /Audition|Casting|试镜|面试|Round/.test(mail[1]));

const list = document.getElementById("mailList");
const reader = document.getElementById("reader");

document.querySelectorAll("[data-folder]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-folder]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    openFolder(button.dataset.folder);
  });
});

function openFolder(folder) {
  if (folder === "compose") {
    list.innerHTML = "";
    reader.innerHTML = `
      <div class="compose-panel">
        <header>New Message</header>
        <div>To</div>
        <div>Subject</div>
        <div style="height:240px">The draft is empty.</div>
      </div>
    `;
    return;
  }

  const mails = folders[folder] || [];
  if (!mails.length) {
    list.innerHTML = "";
    reader.innerHTML = `<div class="empty"><div><h2>No mail here</h2><p>This folder has no messages.</p></div></div>`;
    return;
  }

  list.innerHTML = mails.map((mail, index) => `
    <button class="mail-row ${mail[3] ? "unread" : ""} ${index === 0 ? "active" : ""}" data-index="${index}">
      <span class="dot" style="${mail[3] ? "" : "opacity:0"}"></span>
      <span class="mail-copy">
        <span class="sender">${mail[0]}</span>
        <span class="subject">${mail[1]}</span>
        <span class="snippet">${mail[4]}</span>
      </span>
      <span class="time">${mail[2]}</span>
    </button>
  `).join("");

  list.querySelectorAll(".mail-row").forEach((row) => {
    row.addEventListener("click", () => {
      list.querySelectorAll(".mail-row").forEach((item) => item.classList.remove("active"));
      row.classList.add("active");
      renderMail(mails[Number(row.dataset.index)]);
    });
  });

  renderMail(mails[0]);
}

function renderMail(mail) {
  reader.innerHTML = `
    <h1>${mail[1]}</h1>
    <div class="meta">
      <strong>${mail[0]}</strong><br>
      <span>to You &lt;you@mail.com&gt; · ${mail[2]}</span>
    </div>
    ${mail[5].split("\n\n").map((paragraph) => `<p>${paragraph.replaceAll("\n", "<br>")}</p>`).join("")}
  `;
}

openFolder("inbox");
