// Below script is to make affect on menu icons when the selections changes.

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("header a");

window.addEventListener("scroll", () => {
let scrollPosition = window.scrollY + 80;

sections.forEach((section) => {
    if (scrollPosition >= section.offsetTop) {
    links.forEach((link) => {
        link.classList.remove("active");
        if (
        section.getAttribute("id") ===
        link.getAttribute("href").substring(1)
        ) {
        link.classList.add("active");
        }
    });
    }
});
});

// Below script is for Menu toggle in responsive mode.

function showHeader () {
const header = document.getElementById("header");
const menuBtn = document.getElementById("menu-btn");
if (menuBtn.classList.contains("active")) {
    header.classList.remove("responsive");
    menuBtn.classList.remove("active");
    menuBtn.innerHTML = `<ion-icon name="menu-outline"></ion-icon>`;
}else{
    header.classList.add("responsive");
    menuBtn.classList.add("active");
    menuBtn.innerHTML = `<ion-icon name="close-outline"></ion-icon>`;
}
}

// Below script is to show and hide the mini profile in responsive mode.

function showPro () {
const profile = document.getElementById("profile");
const proBtn = document.getElementById("pro-ball");
if (proBtn.classList.contains("active")) {
    profile.classList.remove("responsive");
    proBtn.classList.remove("active");
}else{
    profile.classList.add("responsive");
    proBtn.classList.add("active");
}
}


// The whole data is stored in one object "saleeemData" below.

const saleemData = {
    skills: [
        {
        name: "HTML",
        icon: "fa-brands fa-html5",
        health: "95",
        },
        {
        name: "CSS",
        icon: "fa-brands fa-css3-alt",
        health: "90",
        },
        {
        name: "Bootstrap",
        icon: "fa-brands fa-bootstrap",
        health: "95",
        },
        {
        name: "Tailwind CSS",
        icon: "fa-brands fa-envira",
        health: "75",
        },
        {
        name: "Javascript",
        icon: "fa-brands fa-square-js",
        health: "85",
        },
        {
        name: "ReactJs",
        icon: "fa-brands fa-react",
        health: "90",
        },
        {
        name: "NextJs",
        icon: "fa-solid fa-play fa-rotate-270",
        health: "85",
        },
        {
        name: "WordPress",
        icon: "fa-brands fa-wordpress",
        health: "70",
        },
        {
        name: "Adobe Photoshop",
        icon: "fa-solid fa-palette",
        health: "65",
        },
        {
        name: "Adobe Illustrator",
        icon: "fa-solid fa-bezier-curve",
        health: "60",
        },
    ],
    experiences: [
        {
        title: "Web Developer and Graphics Designer",
        org: "Fiverr.com",
        details:
            "Complete projects with 100% positive review (rating). www.fiverr.com/saliyousafzai",
        startDate: "Dec 2014",
        endDate: "Continue...",
        },
        {
        title: "Full stack Developer Training",
        org: "URRAAN - Runway To Digital Flight",
        details:
            "Complete Complete the Tasks in the following: HTML, CSS, Bootstrap, Javascript, jQuery, PHP, MySql and WordPress",
        startDate: "01 May 2019",
        endDate: "30 Jun 2019",
        },
    ],
    education: [
        {
        title: "BCS Hons (Bachlor In Computer Science)",
        org: "Hazara University Mansehra Pakistan",
        details:
            "Major Subjects: Data Structure, Analysis of Algorithems,Theory of Automata, Database (DBMS) Relational Database (RDBMS), Operating System, ECommerece, Artificial Intelligence, Modren Programming Languages (MPL), Software Engineering, Graphics and Computer Networking, etc . . .",
        startDate: "Mar 2014",
        endDate: "Feb 2018",
        },
        {
        title: "FSc (Computer Science)",
        org: "Tameer e Millat Hazara Public School & College Shinkiari Mansehra Pakistan",
        details: "Major Subjects: Computer Science, Mathematics and Physics.",
        startDate: "2010",
        endDate: "2012",
        },
        {
        title: "SSC (Science)",
        org: "Govt High School Shinkiari Mansehra Pakistan",
        details:
            "Major Subjects: Biology, Chemistry, Mathematics and Physics.",
        startDate: "2008",
        endDate: "2010",
        },
    ],
    awards: [
        {
        title: "Best Certificate Designer Award",
        org: "COMSATS University Abbottabad",
        details:
            "In certificate designing competition of COMSATS IT Center's Wintercamp 2017 ",
        startDate: "25 Feb 2017",
        endDate: "",
        },
    ],
    certificates: [
        {
        title: "COMSATS IT Center Wintercamp 2018",
        org: "COMSATS University Abbottabad Pakistan",
        details:
            "Complete the following cource in one weeks: YouTube SEO, WordPress Theme Customization, Linux (Instalation, Applications and Banefits), PMP(Project Management Professional) and Freelancing (Upwork, Freelancer, Peopleperhour and Fiverr)",
        startDate: "12 Feb 2018",
        endDate: "16 Feb 2018",
        },
        {
        title: "MOS Certifide",
        org: "Microsoft",
        details:
            "Online Microsoft word test, Passed with 96.3% marks (963 out of 1000) AT Hazara University Mansehra Pakistan",
        startDate: "31 Dec 2017",
        endDate: "",
        },
        {
        title: "COMSATS IT Center Wintercamp 2017",
        org: "COMSATS University Abbottabad Pakistan",
        details:
            "Complete the following cource in four weeks: HTML and CSS, PHP, ASP.NET, Graphics Designing, Android Application Development, Open Source Applications (WordPress, Joomla, Zencart e.t.c) and Freelancing (Upwork, Freelancer, Peopleperhour and Fiverr)",
        startDate: "01 Feb 2017",
        endDate: "25 Feb 2017",
        },
        {
        title: "COMSATS IT Center Workshop 2016",
        org: "COMSATS University Abbottabad Pakistan",
        details:
            "Two days workshop on Freelancing (Upwork, Freelancer, Peopleperhour and Fiverr)",
        startDate: "03 Dec 2016",
        endDate: "04 Dec 2016",
        },
    ],
    socialLinks: [
        {
        name: "Github",
        url: "https://github.com/saleemullahkhansaleem",
        icon: "fa-brands fa-github",
        },
        {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mrsaleem/",
        icon: "fa-brands fa-linkedin",
        },
        {
        name: "Youtube",
        url: "https://www.youtube.com/@saleemullahkhansaleem",
        icon: "fa-brands fa-youtube",
        },
        {
        name: "Facebook",
        url: "https://web.facebook.com/saliyousafzai",
        icon: "fa-brands fa-facebook",
        },
        {
        name: "Twitter",
        url: "https://twitter.com/khan_sali",
        icon: "fa-brands fa-x-twitter",
        },
        {
        name: "Instagram",
        url: "https://www.instagram.com/saleemullahkhansaleem1/",
        icon: "fa-brands fa-instagram",
        },
        {
        name: "TikTok",
        url: "https://www.tiktok.com/@saleemullahkhansaleem1",
        icon: "fa-brands fa-tiktok",
        },
    ],
    services: [
        {
        name: "Custom Web Development",
        description:
            "Create fully customized websites tailored to your client's specific needs and requirements.",
        },
        {
        name: "Front-end Development",
        description:
            "Develop interactive and user-friendly front-end interfaces using HTML, CSS, and JavaScript.",
        },
        {
        name: "React Application Development",
        description:
            "Build modern and dynamic web applications using the React library for efficient UI rendering.",
        },
        {
        name: "Responsive Design",
        description:
            "Ensure that websites and applications are optimized for various screen sizes and devices.",
        },
        {
        name: "UI/UX Design",
        description:
            "Design intuitive and visually appealing user interfaces and user experiences for better engagement.",
        },
        {
        name: "Single-Page Applications (SPAs)",
        description:
            "Develop single-page applications that provide a seamless browsing experience by loading content dynamically.",
        },
        {
        name: "Progressive Web Apps (PWAs)",
        description:
            "Convert websites into PWAs, offering native app-like experiences, offline access, and improved performance.",
        },
        {
        name: "Web Performance Optimization",
        description:
            "Improve website performance through techniques like minification, compression, and lazy loading.",
        },
        {
        name: "API Integration",
        description:
            "Integrate third-party APIs to extend functionality and offer features such as payment gateways, social media integration, and more.",
        },
        {
        name: "E-commerce Solutions",
        description:
            "Build online stores with secure payment gateways, product catalogs, shopping carts, and inventory management.",
        },
        {
        name: "Content Management Systems (CMS)",
        description:
            "Develop custom CMS solutions using platforms like WordPress, Drupal, or headless CMS architectures.",
        },
        {
        name: "Web Accessibility (a11y)",
        description:
            "Ensure that your websites are accessible to users with disabilities, following accessibility guidelines.",
        },
        {
        name: "Cross-Browser Compatibility",
        description:
            "Test and ensure that websites work seamlessly across different web browsers.",
        },
        {
        name: "Website Maintenance",
        description:
            "Offer ongoing maintenance and updates to keep websites secure, functional, and up-to-date.",
        },
        {
        name: "Code Review and Refactoring",
        description:
            "Review existing codebases, identify areas for improvement, and refactor to enhance performance and maintainability.",
        },
        {
        name: "Technical Consulting",
        description:
            "Provide expert advice on technology choices, best practices, and solutions for specific technical challenges.",
        },
        {
        name: "Training and Workshops",
        description:
            "Conduct training sessions or workshops to educate clients or their teams on web development or React.",
        },
        {
        name: "Version Control and Deployment",
        description:
            "Set up version control (e.g., Git) and implement deployment strategies for continuous integration and deployment (CI/CD).",
        },
        {
        name: "Custom Web Components",
        description:
            "Develop reusable and customizable web components for consistent design and functionality.",
        },
        {
        name: "Integration with Backend Services",
        description:
            "Collaborate with backend developers to integrate front-end interfaces with server-side services and databases.",
        },
    ],
};

// Below script is for Add social links.
saleemData.socialLinks.map((item) => {
document.getElementById(
    "socialIcon"
).innerHTML += `<a href="${item.url}"><div class="social-icon hidden-right"><i class="${item.icon}"></div></i></a>`;
});

// Below script is for Add skills.
saleemData.skills.map((item) => {
document.getElementById(
    "skillsBlock"
).innerHTML += `<div class="skill-progress-box hide">
            <div class="skill-name-box">
                <i class="${item.icon}"></i>
            <p>${item.name}</p>
            </div>
            <div class="skill-progress-bar" style="--val: ${item.health}">
            <small>%</small>
            </div>
        </div>`;
});

// Below script is for Add Experiences, Educations, Awards and Certificates.

showData("Experience", "fas fa-briefcase", saleemData.experiences);
showData("Education", "fas fa-user-graduate", saleemData.education);
showData("Awards", "fas fa-award", saleemData.awards);
showData("Certificats", "fas fa-certificate", saleemData.certificates);

function showData(heading, iconClass, arr) {
document.getElementById("resume").innerHTML += `<div class="mt-4">
                <div class="mt-5">
                    <span class="heading"><i class="${iconClass}"></i> ${heading}</span>
                </div>
                <div class="block-detail">
                    <div class="vline"></div>
                    <table id="${heading}" class="mt-3 ms-3 "></table>
                </div>
            </div>`;
arr.map((item) => {
    document.getElementById(heading).innerHTML += `<tr class="hidden-right">
                <td class="align-top py-3"><img src="icon/circle.png" width="12px" class="circle"></td>
                <td class="date clr-theme align-top py-3"><span class="clr-highlight">From:</span> ${item.startDate} <br><span
                        class="clr-highlight">To:</span> ${item.endDate}</td>
                <td class="p-3">
                    <div class="field-heading">${item.title}</div>
                    <span class="clr-theme">ON</span> <span class="clr-highlight fw-light">${item.org}</span><br>
                    <p>${item.details}</p>
                </td>
            </tr>`;
});
}

// Below script is for Add services.

saleemData.services.map((service) => {
document.getElementById(
    "services-container"
).innerHTML += `<div class="service hidden-left">
    <h3>${service.name}</h3>
    <p>${service.description}</p>
    <a href="#" class="my-btn">Learn More</a>
    </div>`;
});
const service = document.querySelectorAll('.service');
const serviceBtn = document.getElementById('service-btn');
function showServices () {
    service.forEach((item)=>{
        if (item.classList.contains('show-service')) {
            item.classList.remove('show-service');
            serviceBtn.innerHTML='Show More Services';
        }
        else{
            item.classList.add('show-service');
            serviceBtn.innerHTML='Show Less Services';
        }
    });
}

// Below script is for Toggle dark mode and light mode.

const root = document.querySelector(":root");
function toggleMode() {
const mode = document.getElementById("modeToggle");
if (mode.classList.contains("dark")) {
    mode.innerHTML = '<ion-icon name="moon-outline"></ion-icon>';
    mode.classList.remove("dark");
    root.style.setProperty("--bg", "#fff");
    root.style.setProperty("--clr-primary", "#000");
    root.style.setProperty("--clr-border", "#ccc");
    root.style.setProperty("--bg-blur", "#fffa");
} else {
    mode.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>';
    mode.classList.add("dark");
    root.style.setProperty("--bg", "#234");
    root.style.setProperty("--clr-primary", "#fff");
    root.style.setProperty("--clr-border", "#345");
    root.style.setProperty("--bg-blur", "#234a");
}
}

// Below script is for Change the color themes.

function changeTheme(color) {
root.style.setProperty("--clr-theme", color);
}

var typed = new Typed("#element", {
strings: ["A <i>web</i> developer.", "&amp; a React.js expert!"],
typeSpeed: 50,
backSpeed: 50,
backDelay: 1000,
loop: true,
});