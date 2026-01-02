const toggle=document.getElementById("theme-toggle");
const navbar=document.querySelector(".navbar");
const sections=document.querySelectorAll("section");
const modal=document.getElementById("project-modal");
const modalTitle=document.getElementById("modal-title");
const modalDesc=document.getElementById("modal-desc");
const modalLink=document.getElementById("modal-link");

// Dark/Light toggle
toggle.addEventListener("click",()=>{document.body.classList.toggle("dark");toggle.textContent=document.body.classList.contains("dark")?"☀️":"🌙";});

// Navbar shadow
window.addEventListener("scroll",()=>{if(window.scrollY>20)navbar.classList.add("scrolled");else navbar.classList.remove("scrolled");});

// Fade-in sections
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("fade-up-visible");});},{threshold:0.15});
sections.forEach(section=>section.classList.add("fade-up"));
sections.forEach(section=>observer.observe(section));

// Modal for projects
const projects={
  portfolio:{title:"Portfolio Website",desc:"Modern portfolio showcasing my work and skills.",link:"https://github.com/yourusername/portfolio"},
  todo:{title:"Todo App",desc:"Task management app built with React.",link:"https://github.com/yourusername/todo-app"},
  chat:{title:"Chat App",desc:"Real-time messaging app with Node.js and Socket.io.",link:"https://github.com/yourusername/chat-app"}
};
function openModal(project){modal.style.display="flex";modalTitle.textContent=projects[project].title;modalDesc.textContent=projects[project].desc;modalLink.href=projects[project].link;}
function closeModal(){modal.style.display="none";}
window.onclick=e=>{if(e.target==modal)closeModal();}

// Drag scroll for carousels
document.querySelectorAll('.carousel-container').forEach(container=>{
  let isDown=false,startX,scrollLeft;
  container.addEventListener('mousedown',e=>{isDown=true;container.classList.add('active');startX=e.pageX-container.offsetLeft;scrollLeft=container.scrollLeft;});
  container.addEventListener('mouseleave',()=>{isDown=false;container.classList.remove('active');});
  container.addEventListener('mouseup',()=>{isDown=false;container.classList.remove('active');});
  container.addEventListener('mousemove',e=>{if(!isDown)return;e.preventDefault();const x=e.pageX-container.offsetLeft;const walk=(x-startX)*2;container.scrollLeft=scrollLeft-walk;});
});