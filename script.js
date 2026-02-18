const jobList = document.getElementById("jobList");
const empty = document.getElementById("empty");

// Demo job data (since real APIs need keys)
const demoJobs = [
  { title: "Frontend Developer", company: "Tech Corp", location: "Remote" },
  { title: "Backend Engineer", company: "CodeWorks", location: "Bangalore" },
  { title: "Full Stack Developer", company: "Innovate Ltd", location: "Hyderabad" },
  { title: "Software Intern", company: "Startup Hub", location: "Remote" }
];

function searchJobs() {
  const keyword = document.getElementById("keyword").value.toLowerCase();
  const location = document.getElementById("location").value.toLowerCase();

  const results = demoJobs.filter(job =>
    job.title.toLowerCase().includes(keyword) &&
    job.location.toLowerCase().includes(location)
  );

  renderJobs(results);
}

function renderJobs(jobs) {
  jobList.innerHTML = "";

  if (jobs.length === 0) {
    empty.textContent = "No jobs found";
    empty.style.display = "block";
    return;
  }

  empty.style.display = "none";

  jobs.forEach(job => {
    const div = document.createElement("div");
    div.className = "job";

    div.innerHTML = `
      <h3>${job.title}</h3>
      <div class="company">${job.company} • ${job.location}</div>
      <button class="apply-btn" onclick="alert('Application submitted!')">Apply</button>
    `;

    jobList.appendChild(div);
  });
}
