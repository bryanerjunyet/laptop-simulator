const finderData = {
  shanhong: {
    defaultFolder: "documents",
    folders: {
      documents: {
        title: "Documents",
        files: [
          {
            id: "copyright-plan",
            name: "版权争议处理方案.docx",
            date: "2026.08.23 21:11",
            kind: "Microsoft Word Document",
            body: `
              <h2>版权争议处理方案</h2>
              <p><b>处理对象：</b>《雨后的第七盏灯》相关纸本草稿、修改记录、工作室编号登记页。</p>
              <p><b>处理原则：</b>所有仍可追溯至阿禾个人创作过程的材料，不再进入公开档案。对外统一称为“画廊商业化调整过程文件”。</p>
              <p><b>执行说明：</b>G-07、G-08 箱内文件先由仓储封存。确认无外部调取风险后，按版权争议处理方案销毁剩余原稿及相关创作记录，确保不会留下任何可以追溯至阿禾的证据。</p>
              <p><b>备注：</b>右下角带有 A.H. 标记或 3 月 12 日日期刻痕的纸本，不得拍照、不得转发。</p>
            `
          },
          {
            id: "sales-analysis",
            name: "画廊销售分析_Q2.xlsx",
            date: "2026.05.30 09:25",
            kind: "Microsoft Excel Spreadsheet",
            body: `
              <h2>画廊销售分析 Q2</h2>
              <table>
                <tr><th>作品</th><th>登记作者</th><th>成交价</th><th>分配备注</th></tr>
                <tr><td>雨后的第七盏灯</td><td>柳文清</td><td>RM80,000</td><td>按内部批注拆分</td></tr>
                <tr><td>柳文清</td><td>签约画师</td><td>RM20,000</td><td>公开佣金</td></tr>
                <tr><td>画廊账户</td><td>五煞文创</td><td>RM20,000</td><td>展厅运营</td></tr>
                <tr><td>关联账户</td><td>单鸿指定</td><td>RM40,000</td><td>不进入公开报表</td></tr>
              </table>
              <p>销售建议：弱化个人表达，保留画面中容易被市场接受的光影结构。阿禾可继续作为幕后创作者处理，不建议在资料页署名。</p>
            `
          },
          {
            id: "anniversary-flow",
            name: "周年庆典流程表.pdf",
            date: "2026.08.01 18:10",
            kind: "PDF Document",
            body: `
              <h2>五煞文创综合体周年庆典流程表</h2>
              <p><b>19:30</b> 贵宾入场，中央塔基灯光预热。</p>
              <p><b>20:00</b> 品牌发布开场，介绍五煞文创综合体。</p>
              <p><b>20:40</b> 画廊展区连线，只保留柳文清公开作品介绍。</p>
              <p><b>21:20</b> 续封仪式包装为周年庆特别环节，直播主机位固定在塔基正面。</p>
              <p><b>备注：</b>贵宾动线不经过画廊后仓区域，后仓仅限内部人员通行。</p>
            `
          }
        ]
      },
      downloads: {
        title: "Downloads",
        files: [
          {
            id: "media-comparison",
            name: "对比证据_媒体报道版.png",
            date: "2026.08.02 10:00",
            kind: "PNG Image",
            image: "../assets/images/evidence/ahe-media-comparison.png",
            body: "<p>发给合作媒体的报道对比图。邮件备注要求不要单独放大右下角细节。</p>"
          },
          {
            id: "press-pack",
            name: "媒体发稿包_0802.zip",
            date: "2026.08.02 10:04",
            kind: "ZIP Archive",
            body: `
              <h2>媒体发稿包_0802</h2>
              <p>包含：报道标题建议、对比图、采访回应口径、柳文清作品简介。</p>
              <p>标题方向：年轻画家涉嫌抄袭知名画家柳文清。重点放在构图相似、笔触近似、当事人近期频繁申诉。</p>
              <p>禁止展开：画廊内部登记流程、佣金表、原稿创建时间。</p>
            `
          }
        ]
      },
      archive: {
        title: "Archive",
        files: [
          {
            id: "storage-log",
            name: "后仓原稿箱登记_G-07_G-08.txt",
            date: "2026.08.23 21:50",
            kind: "Text Document",
            body: `
              <h2>后仓原稿箱登记</h2>
              <p>G-07：纸本底稿、局部构图试稿、色彩修改标注。</p>
              <p>G-08：展厅登记复印件、工作室编号页、修改前后对照图。</p>
              <p>备注：部分纸本右下角有手写日期与 A.H. 标记。</p>
            `
          },
          {
            id: "entry-record",
            name: "临时出入记录_0812.csv",
            date: "2026.08.12 08:30",
            kind: "CSV Spreadsheet",
            body: `
              <h2>临时出入记录 0812</h2>
              <table>
                <tr><th>时间</th><th>区域</th><th>记录</th></tr>
                <tr><td>02:13</td><td>画廊后仓</td><td>人员进入，袖口可见五煞文创工作证</td></tr>
                <tr><td>02:21</td><td>画廊后仓</td><td>搬离一整箱画稿</td></tr>
                <tr><td>02:27</td><td>侧门</td><td>画面角度无法确认姓名</td></tr>
              </table>
            `
          }
        ]
      }
    }
  },
  ahe: {
    defaultFolder: "downloads",
    folders: {
      downloads: {
        title: "Downloads",
        files: [
          {
            id: "ahe-comparison",
            name: "对比证据_媒体报道版.png",
            date: "2026.08.07 02:15",
            kind: "PNG Image",
            image: "../assets/images/evidence/ahe-media-comparison.png"
          }
        ]
      },
      pictures: {
        title: "Pictures",
        files: []
      }
    }
  }
};

const finderApp = document.querySelector(".finder-app");
const persona = finderData[finderApp.dataset.persona];
const folderTitle = document.getElementById("folderTitle");
const fileList = document.getElementById("fileList");
const filePreview = document.getElementById("filePreview");

document.querySelectorAll("[data-folder]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-folder]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    openFolder(button.dataset.folder);
  });
});

function openFolder(folderId) {
  const folder = persona.folders[folderId];
  if (!folder) return;

  folderTitle.textContent = folder.title;

  if (!folder.files.length) {
    fileList.innerHTML = "";
    filePreview.innerHTML = `<div class="empty-preview"><h2>No Files</h2><p>This folder is empty.</p></div>`;
    return;
  }

  fileList.innerHTML = folder.files.map((file, index) => `
    <button class="file-row ${index === 0 ? "active" : ""}" type="button" data-file-id="${file.id}">
      <span>${fileIcon(file.kind)}</span>
      <strong>${file.name}</strong>
      <small>${file.date}</small>
    </button>
  `).join("");

  fileList.querySelectorAll(".file-row").forEach((button) => {
    button.addEventListener("click", () => {
      fileList.querySelectorAll(".file-row").forEach((row) => row.classList.remove("active"));
      button.classList.add("active");
      const file = folder.files.find((item) => item.id === button.dataset.fileId);
      renderPreview(file);
    });
  });

  renderPreview(folder.files[0]);
}

function renderPreview(file) {
  if (!file) return;

  const previewBody = file.body ? `<div class="preview-body">${file.body}</div>` : "";

  filePreview.innerHTML = `
    <header>
      <div>
        <h2>${file.name}</h2>
        <p>${file.kind} · ${file.date}</p>
      </div>
    </header>
    ${file.image ? `<img class="preview-image" src="${file.image}" alt="${file.name}">` : ""}
    ${previewBody}
  `;
}

function fileIcon(kind) {
  if (kind.includes("Image")) return "IMG";
  if (kind.includes("Excel") || kind.includes("CSV")) return "XLS";
  if (kind.includes("PDF")) return "PDF";
  if (kind.includes("ZIP")) return "ZIP";
  return "DOC";
}

openFolder(persona.defaultFolder);
