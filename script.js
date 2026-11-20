/* ==========================================================================
   Portfolio Data Store
   Add or update projects and tech stack items here without touching HTML.
   ========================================================================== */

const PORTFOLIO_DATA = {
  projects: {
    software: [
      {
        title: "This portfolio",
        tags: "HTML · CSS · Bootstrap",
        url: "https://zem464.github.io/Portfolio/"
      },
      {
        title: "Basic Learning Codes",
        tags: "Python · Beginner-level Programming Exercises",
        url: "https://github.com/zem464/Basic-Learning-Codes.git"
      },
      {
        title: "Simple Calculator",
        tags: "Python · Arithmetic Operations",
        url: "https://github.com/zem464/Simple-Calculator.git"
      },
      {
        title: "Calculator",
        tags: "Python · Object-Oriented Programming",
        url: "https://github.com/zem464/Calculator-OOP.git"
      },
      {
        title: "Contact Tracing",
        tags: "Python · GUI tkinter",
        url: "https://github.com/zem464/Contact-Tracing.git"
      },
      {
        title: "Cosmic Node",
        tags: "HTML · Python · CSS · JavaScript",
        url: "https://github.com/zem464/DSA-Group-Portfolio_Revamped.git"
      },
      {
        title: "Thesis Management System",
        tags: "TypeScript · PHP · PUP Project",
        url: "https://github.com/LEGENDFVRYz/thesis-management-system.git"
      },
      {
        placeholder: "More software projects landing here soon"
      }
    ],
    hardware: [
      {
        title: "PPG Collector",
        tags: "C++ · IoT · ESP8266",
        url: "https://github.com/zem464/PPG-Collector.git"
      },
      {
        title: "AnemiAlert Hardware",
        tags: "C++ · ESP32-S3 · MAX30105",
        url: "https://github.com/zem464/Thesis-AnemiAlert_Hardware.git"
      }
    ],
    design: [
      {
        title: "Thesis Management System",
        url: "https://www.figma.com/folder_invite/redeem/OZc21n6ipZkUEOS9k8qPqN"
      },
      {
        title: "AnemiAlert UI",
        url: "https://www.figma.com/design/NwL7n2sVmtLM4U0fCbOhRm/AnemiAlert_UI--Copy-?m=auto&t=JCusqzoIOX0OJjTh-1"
      },
      {
        title: "Revamped Design of DSA Group Portfolio",
        url: "https://www.figma.com/design/RJ7cC3XOLvTAZ9TLcssuV0/DSA-Group-Portfolio--Copy-?m=auto&t=JCusqzoIOX0OJjTh-1"
      },
      {
        title: "S-Plit UI",
        url: "https://www.figma.com/design/ecJ4BahJ5RLxuu54Av5HV5/S-Plit--Copy-?m=auto&t=JCusqzoIOX0OJjTh-1"
      }
    ],
    data: [
      {
        title: "Shopee Tracker",
        url: "https://docs.google.com/spreadsheets/d/1j6aFZnzoqhpR-z90CAzYEo4SVI-T4KPd11Qxqpec4DY/edit?usp=sharing"
      },
      {
        title: "Job Application Tracker",
        url: "https://docs.google.com/spreadsheets/d/1p9_FT6QRkd_pfowb7SXiNEn7tDSu7H6RZ4sx6uyNFrA/edit?usp=sharing"
      }
    ]
  },

  stack: [
    { name: "Python", icon: "devicon-python-plain" },
    { name: "HTML5", icon: "devicon-html5-plain" },
    { name: "CSS3", icon: "devicon-css3-plain" },
    { name: "JavaScript", icon: "devicon-javascript-plain" },
    { name: "Bootstrap", icon: "devicon-bootstrap-plain" },
    { name: "Flask", icon: "devicon-flask-plain" },
    { name: "Google Workspace", icon: "devicon-google-plain" },
    { name: "Microsoft Office", icon: "devicon-microsoft-plain" }
  ]
};

/* ==========================================================================
   DOM Rendering Functions
   ========================================================================== */

/**
 * Renders project cards into a target grid container.
 * @param {string} containerId - ID of the row element
 * @param {Array<Object>} items - Array of project or placeholder objects
 */
function renderProjectGrid(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items.map((item) => {
    if (item.placeholder) {
      return `
        <div class="col">
          <div class="card bg-transparent border-secondary-subtle h-100 d-flex align-items-center justify-content-center text-center text-secondary p-4 placeholder-card">
            ${item.placeholder}
          </div>
        </div>
      `;
    }

    const tagsMarkup = item.tags
      ? `<p class="font-mono text-uppercase text-secondary small mb-1">${item.tags}</p>`
      : "";

    return `
      <div class="col">
        <div class="card card-glow h-100">
          <div class="thumb-gradient"></div>
          <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="card-body text-decoration-none d-flex justify-content-between align-items-center">
            <div>
              ${tagsMarkup}
              <h5 class="card-title mb-0 text-white">${item.title}</h5>
            </div>
            <svg class="arrow-icon text-secondary flex-shrink-0 ms-3" width="20" height="20" fill="currentColor" aria-hidden="true">
              <use href="#icon-arrow"></use>
            </svg>
          </a>
        </div>
      </div>
    `;
  }).join("");
}

/**
 * Renders tech stack pills into the stack section.
 * @param {string} containerId - ID of the flex wrapper element
 * @param {Array<Object>} items - Array of stack items with name and icon class
 */
function renderStack(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items.map((tech) => `
    <span class="badge rounded-pill text-bg-secondary font-mono px-3 py-2 d-flex align-items-center gap-2">
      <i class="${tech.icon}" aria-hidden="true"></i>${tech.name}
    </span>
  `).join("");
}

/* ==========================================================================
   Initialize Portfolio on DOM Load
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  renderProjectGrid("grid-software", PORTFOLIO_DATA.projects.software);
  renderProjectGrid("grid-hardware", PORTFOLIO_DATA.projects.hardware);
  renderProjectGrid("grid-design", PORTFOLIO_DATA.projects.design);
  renderProjectGrid("grid-data", PORTFOLIO_DATA.projects.data);
  renderStack("stack-container", PORTFOLIO_DATA.stack);
});