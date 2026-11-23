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
        description: "Personal portfolio showcasing software, hardware, UI/UX, and data projects.",
        image: "Assets/projects/portfolio.png",
        url: "https://zem464.github.io/Portfolio/"
      },
      {
        title: "Basic Learning Codes",
        tags: "Python · Beginner-level Programming Exercises",
        description: "Foundational Python exercises covering variables, control flow, loops, and functions.",
        image: "Assets/projects/basic-learning-codes.png",
        url: "https://github.com/zem464/Basic-Learning-Codes.git"
      },
      {
        title: "Simple Calculator",
        tags: "Python · Arithmetic Operations",
        description: "Command-line calculator supporting core arithmetic operations and input handling.",
        image: "Assets/projects/simple-calculator.png",
        url: "https://github.com/zem464/Simple-Calculator.git"
      },
      {
        title: "Calculator",
        tags: "Python · Object-Oriented Programming",
        description: "Refactored Python calculator structured around object-oriented classes and methods.",
        image: "Assets/projects/calculator-oop.png",
        url: "https://github.com/zem464/Calculator-OOP.git"
      },
      {
        title: "Contact Tracing",
        tags: "Python · GUI tkinter",
        description: "Desktop GUI application built with Tkinter for recording and managing contact tracing logs.",
        image: "Assets/projects/contact-tracing.png",
        url: "https://github.com/zem464/Contact-Tracing.git"
      },
      {
        title: "Cosmic Node",
        tags: "HTML · Python · CSS · JavaScript",
        description: "Group portfolio web project combining front-end styling, interactivity, and Python tooling.",
        image: "Assets/projects/cosmic-node.png",
        url: "https://github.com/zem464/DSA-Group-Portfolio_Revamped.git"
      },
      {
        title: "Thesis Management System",
        tags: "TypeScript · PHP · PUP Project",
        description: "Web-based system built for organizing and tracking academic thesis workflows.",
        image: "Assets/projects/thesis-management-system.png",
        url: "https://github.com/LEGENDFVRYz/thesis-management-system.git"
      },
      {
        title: "StockFlow",
        tags: "Base44 · JavaScript · CSS",
        description: "A specialized inventory and analytics dashboard designed for local small businesses to track daily metrics, monthly sales, and real-time stock.",
        image: "Assets/projects/stockflow.png",
        url: "https://stock-flow-0a6878b5.base44.app/"
      },
      {
        placeholder: "More software projects landing here soon"
      }
    ],
    hardware: [
      {
        title: "PPG Collector",
        tags: "C++ · IoT · ESP8266",
        description: "ESP8266 firmware in C++ for capturing photoplethysmography (PPG) signals over IoT.",
        image: "Assets/projects/ppg-collector.png",
        url: "https://github.com/zem464/PPG-Collector.git"
      },
      {
        title: "AnemiAlert Hardware",
        tags: "C++ · ESP32-S3 · MAX30105",
        description: "Non-invasive prototype hardware pairing an ESP32-S3 with a MAX30105 optical sensor.",
        image: "Assets/projects/anemialert-hardware.png",
        url: "https://github.com/zem464/Thesis-AnemiAlert_Hardware.git"
      }
    ],
    design: [
      {
        title: "Thesis Management System",
        tags: "Figma · UI/UX Design",
        description: "Interface wireframes and design flows for managing thesis submissions and reviews.",
        image: "Assets/projects/ui-thesis-management.png",
        url: "https://www.figma.com/design/PqYufY825to2xjqxMSF16k/Thesis-Management-System?m=auto&t=90az6BrxnnTMXIin-1"
      },
      {
        title: "AnemiAlert UI",
        tags: "Figma · UI/UX Design",
        description: "Screen layouts and user flows designed around AnemiAlert health-screening workflows.",
        image: "Assets/projects/ui-anemialert.png",
        url: "https://www.figma.com/design/NwL7n2sVmtLM4U0fCbOhRm/AnemiAlert?m=auto&t=90az6BrxnnTMXIin-1"
      },
      {
        title: "Revamped Design of DSA Group Portfolio",
        tags: "Figma · UI/UX Redesign",
        description: "Visual refresh and layout structure for the DSA group portfolio website.",
        image: "Assets/projects/ui-dsa-portfolio.png",
        url: "https://www.figma.com/design/RJ7cC3XOLvTAZ9TLcssuV0/Cosmic-Node?m=auto&t=90az6BrxnnTMXIin-1"
      },
      {
        title: "S-Plit UI",
        tags: "Figma · Mobile UI Design",
        description: "UI design concepts for splitting shared expenses cleanly and intuitively.",
        image: "Assets/projects/ui-split.png",
        url: "https://www.figma.com/design/ecJ4BahJ5RLxuu54Av5HV5/S-Plit?m=auto&t=90az6BrxnnTMXIin-1"
      }
    ],
    sheets: [
      {
        title: "Finance Manager",
        tags: "Google Sheets · Digital Management",
        description: "Structured spreadsheet for managing finances and wallets.",
        image: "Assets/projects/sheets-finance-manager.png",
        url: "https://docs.google.com/spreadsheets/d/1A1aNs2ImC6HfvCiaI9kn-aVo3XvWcz-KXHRxTqopxno/edit?usp=sharing"
      },
      {
        title: "Shopee Tracker",
        tags: "Google Sheets · Automation",
        description: "Spreadsheet tracker organized to monitor orders, statuses, and spending activity.",
        image: "Assets/projects/sheets-shopee-tracker.png",
        url: "https://docs.google.com/spreadsheets/d/1j6aFZnzoqhpR-z90CAzYEo4SVI-T4KPd11Qxqpec4DY/edit?usp=sharing"
      },
      {
        title: "Job Application Tracker",
        tags: "Google Sheets · Automation",
        description: "Structured spreadsheet log for tracking applications, roles, and follow-up stages.",
        image: "Assets/projects/sheets-job-tracker.png",
        url: "https://docs.google.com/spreadsheets/d/1p9_FT6QRkd_pfowb7SXiNEn7tDSu7H6RZ4sx6uyNFrA/edit?usp=sharing"
      }
    ],
    data: [
      {
        title: "DepEd Enrollment Dashboard",
        tags: "Dashboard · Plotly",
        description: "An interactive, user-friendly dashboard designed to visualize and analyze comprehensive DepEd enrollment data, providing educators, policymakers, and stakeholders with valuable insights to support effective, data-driven decision-making in education planning and policy formulation. ",
        image: "Assets/projects/data-deped.png",
        url: "https://github.com/liabilitea/DepEd-Enrollment-Dashboard.git"
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

    const thumbMarkup = item.image
      ? `<img src="${item.image}" alt="${item.title} preview" class="card-thumb" loading="lazy" onerror="this.replaceWith(createGradientThumb())">`
      : `<div class="card-thumb thumb-gradient" aria-hidden="true"></div>`;

    const tagsMarkup = item.tags
      ? `<p class="font-mono text-uppercase text-secondary small mb-1">${item.tags}</p>`
      : "";

    const descriptionMarkup = item.description
      ? `<p class="text-secondary small mt-2 mb-0">${item.description}</p>`
      : "";

    return `
      <div class="col">
        <div class="card card-glow h-100">
          ${thumbMarkup}
          <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="card-body text-decoration-none d-flex justify-content-between align-items-start">
            <div>
              ${tagsMarkup}
              <h5 class="card-title mb-0 text-white">${item.title}</h5>
              ${descriptionMarkup}
            </div>
            <svg class="arrow-icon text-secondary flex-shrink-0 ms-3 mt-1" width="20" height="20" fill="currentColor" aria-hidden="true">
              <use href="#icon-arrow"></use>
            </svg>
          </a>
        </div>
      </div>
    `;
  }).join("");
}

/**
 * Creates a fallback gradient thumbnail element if an image fails to load.
 * @returns {HTMLDivElement}
 */
function createGradientThumb() {
  const fallback = document.createElement("div");
  fallback.className = "card-thumb thumb-gradient";
  fallback.setAttribute("aria-hidden", "true");
  return fallback;
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
  renderProjectGrid("grid-sheets", PORTFOLIO_DATA.projects.sheets);
  renderProjectGrid("grid-data", PORTFOLIO_DATA.projects.data);
  renderStack("stack-container", PORTFOLIO_DATA.stack);
});