const fs = require('fs');

let content = fs.readFileSync('script.js', 'utf8');

const match = content.match(/const deptData = (\{[\s\S]*?\n  \});\n\n  \/\/ Provide a fallback/);
if (!match) throw new Error("Could not find deptData block");

let deptDataStr = match[1];
let deptData = eval('(' + deptDataStr + ')');

if (deptData.cse) {
   deptData.cse.facilities_desc = "The department library constitutes more than 1000 volumes of books with varied titles catering to the need of members of the faculty and students. The volumes in the library are regularly updated to the needs on yearly basis. The department also maintains digital library, which enables the students to have an access to the digital contents for the better understanding of theory.";
   
   const originalLabs = deptData.cse.labs;
   if (originalLabs && typeof originalLabs[0] === 'string') {
       deptData.cse.labs = originalLabs.map(img => {
           let name = "Lab Facility";
           if (img.includes('img1.jpg')) name = "CSE Block - GCEE";
           else if (img.includes('img2.jpg')) name = "CSE Lab-1 - GCEE";
           else if (img.includes('img3.jpg')) name = "CSE Lab-2 - GCEE";
           else if (img.includes('img4.jpg')) name = "CSE Lab-3 - GCEE";
           else if (img.includes('img5.jpg')) name = "Hardware Lab";
           else if (img.includes('img6.jpg')) name = "Server Room";
           return { img: img, name: name };
       });
   }
}

Object.keys(deptData).forEach(k => {
    if (k !== 'cse' && deptData[k].labs && typeof deptData[k].labs[0] === 'string') {
        deptData[k].labs = deptData[k].labs.map((img, i) => ({ img: img, name: 'Facility ' + (i+1) }));
    }
});

const newDeptDataStr = JSON.stringify(deptData, null, 2).replace(/^/gm, '  ');

let modalLogicStart = content.indexOf("const deptKey = card.getAttribute('data-dept');");
let modalLogicEnd = content.indexOf("modalOverlay.classList.add('active');");

const newModalLogic = `const deptKey = card.getAttribute('data-dept');
      const data = deptData[deptKey] || { ...defaultDept, title: card.querySelector('h3').innerText };
      
      const navHtml = \`
        <div class="modal-nav sticky-nav">
          <button class="modal-nav-btn active" data-scroll="modal-about">Info</button>
          \${data.hod || (data.staff && data.staff.length) ? '<button class="modal-nav-btn" data-scroll="modal-staff">Staff</button>' : ''}
          \${data.projects && data.projects.length ? '<button class="modal-nav-btn" data-scroll="modal-projects">Activities</button>' : ''}
          \${data.labs && data.labs.length ? '<button class="modal-nav-btn" data-scroll="modal-labs">Facilities</button>' : ''}
        </div>
      \`;

      let filterHtml = '';
      if (data.staff && data.staff.length > 0) {
        filterHtml = \`
          <div class="staff-filter-controls" style="margin-bottom: 2rem; display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
            <button class="btn btn-outline filter-btn active" data-filter="all" style="padding: 0.5rem 1rem; border-radius: 8px;">All</button>
            <button class="btn btn-outline filter-btn" data-filter="professor" style="padding: 0.5rem 1rem; border-radius: 8px;">Professors</button>
            <button class="btn btn-outline filter-btn" data-filter="associate" style="padding: 0.5rem 1rem; border-radius: 8px;">Associate Prof.</button>
            <button class="btn btn-outline filter-btn" data-filter="assistant" style="padding: 0.5rem 1rem; border-radius: 8px;">Assistant Prof.</button>
            <button class="btn btn-outline filter-btn" data-filter="staff" style="padding: 0.5rem 1rem; border-radius: 8px;">Staff</button>
          </div>
        \`;
      }

      let hodHtml = '';
      if (data.hod) {
         hodHtml = \`
           <h3 style="margin-top: 1rem; margin-bottom: 1.5rem; font-size: 1.8rem; border-bottom: 2px solid var(--surface-border); padding-bottom: 0.5rem; display: inline-block;">Head of the Department</h3>
           <div class="staff-card hod-card" style="max-width: 400px; margin: 0 auto 3rem; background: rgba(99, 102, 241, 0.05); border-color: rgba(99, 102, 241, 0.3);">
            <img src="\${data.hod.img}" alt="\${data.hod.name}" class="staff-img" onerror="this.src='https://via.placeholder.com/120x120?text=HOD'">
            <h4 style="font-size: 1.3rem;">\${data.hod.name}</h4>
            <p style="color: var(--primary-color); font-weight: bold;">\${data.hod.role}</p>
            <div class="details" style="font-size: 0.9rem; word-wrap: break-word;">\${data.hod.details}</div>
          </div>
         \`;
      }

      let staffHtml = '';
      if (data.staff && data.staff.length > 0) {
          data.staff.forEach(s => {
            let roleCat = 'staff';
            if(s.role.toLowerCase().includes('assistant professor')) roleCat = 'assistant';
            else if(s.role.toLowerCase().includes('associate professor')) roleCat = 'associate';
            else if(s.role.toLowerCase().includes('professor')) roleCat = 'professor';

            staffHtml += \`
              <div class="staff-card filter-item" data-role="\${roleCat}">
                <img src="\${s.img}" alt="\${s.name}" class="staff-img" onerror="this.src='https://via.placeholder.com/120x120?text=Staff'">
                <h4>\${s.name}</h4>
                <p>\${s.role}</p>
                <div class="details" style="word-wrap: break-word;">\${s.details}</div>
              </div>
            \`;
          });
      }

      let projHtml = '';
      if (data.projects && data.projects.length > 0) {
        projHtml = '<div id="modal-projects" class="modal-section" style="padding-top: 4rem;"><h3 style="margin-bottom: 1.5rem; font-size: 1.8rem; border-bottom: 2px solid var(--surface-border); padding-bottom: 0.5rem; display: inline-block;">Activities & Funded Projects</h3>' +
          '<div class="projects-container" style="display: flex; gap: 1.5rem; overflow-x: auto; padding-bottom: 1.5rem; scroll-snap-type: x mandatory; scrollbar-width: thin; scrollbar-color: var(--primary-color) var(--surface-color);">' + 
          data.projects.map((p, i) => \`
            <div class="project-card interactive-card glow-on-hover" style="min-width: 320px; max-width: 350px; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; padding: 2rem; scroll-snap-align: start; flex-shrink: 0; backdrop-filter: blur(10px); position: relative; overflow: hidden; transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); text-align: left;">
              <div style="position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: linear-gradient(to bottom, var(--primary-color), var(--secondary-color));"></div>
              \${p.amount !== '--' && p.amount !== '----' && p.amount ? \`<div style="position: absolute; top: 15px; right: 15px; background: rgba(99, 102, 241, 0.15); color: #fff; font-size: 0.75rem; font-weight: bold; padding: 0.4rem 0.8rem; border-radius: 20px; border: 1px solid rgba(99,102,241,0.3); box-shadow: 0 4px 10px rgba(0,0,0,0.2);">\${p.amount}</div>\` : ''}
              <div style="font-size: 3rem; color: rgba(255, 255, 255, 0.05); font-weight: 800; font-family: var(--font-heading); margin-bottom: 0.5rem; line-height: 1; position: absolute; right: 20px; bottom: 10px;">0\${p.sno}</div>
              <h4 style="font-size: 1.15rem; color: var(--text-primary); margin-bottom: 1.5rem; line-height: 1.5; padding-right: 2rem;">\${p.title}</h4>
              <p style="font-size: 0.85rem; color: var(--primary-color); font-weight: 600; margin-bottom: 0.5rem; display: flex; align-items: flex-start; gap: 8px;"><svg style="min-width: 16px; margin-top:2px;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg> <span style="flex:1;">\${p.agency}</span></p>
              \${p.year !== '----' ? \`<p style="font-size: 0.85rem; color: var(--text-secondary); display: flex; align-items: center; gap: 8px;"><svg style="min-width: 16px;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> Year: \${p.year}</p>\` : ''}
            </div>
          \`).join('') +
          '</div></div>';
      }

      let facilitiesDescHtml = '';
      if (data.facilities_desc) {
          facilitiesDescHtml = \`<p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 2rem; padding: 10px 0;">\${data.facilities_desc}</p>\`;
      }

      let labHtml = '';
      if (data.labs && data.labs.length > 0) {
        labHtml = \`<div id="modal-labs" class="modal-section" style="padding-top: 4rem;">
          <h3 style="margin-bottom: 1.5rem; font-size: 1.8rem; border-bottom: 2px solid var(--surface-border); padding-bottom: 0.5rem; display: inline-block;">Department Facilities</h3>
          <div style="text-align: left;">\${facilitiesDescHtml}</div>
          <div class="staff-grid" style="margin-bottom: 2rem;">\` + 
          data.labs.map(lab => \`
            <div class="facility-card glow-on-hover" style="text-align: center; background: rgba(255, 255, 255, 0.02); border-radius: 15px; border: 1px solid var(--surface-border); overflow: hidden; transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); cursor: pointer; padding-bottom: 10px;">
              <img src="\${lab.img}" alt="\${lab.name}" style="width:100%; height:200px; object-fit:cover; margin-bottom: 10px;">
              <h4 style="color: var(--text-primary); font-size: 1.1rem; padding: 5px; font-weight: 500;">\${lab.name}</h4>
            </div>
          \`).join('') +
          '</div></div>';
      }
      
      modalBody.innerHTML = \`
        \${navHtml}
        <div id="modal-about" class="modal-section dept-header" style="padding-top: 3rem;">
          <img src="\${data.img}" alt="\${data.title}" class="dept-hero-img" onerror="this.src='https://via.placeholder.com/600x250?text=Department'">
          <div class="dept-info">
            <h2 class="text-gradient" style="margin-bottom: 1rem; font-size: 2.2rem;">\${data.title}</h2>
            <p style="color: var(--text-secondary); line-height: 1.8; text-align: left;">\${data.desc}</p>
          </div>
        </div>
        
        \${(hodHtml || staffHtml) ? \`<div id="modal-staff" class="modal-section" style="padding-top: 4rem;">
            \${hodHtml}
            \${filterHtml ? '<h3 style="margin-bottom: 1.5rem; font-size: 1.8rem; border-bottom: 2px solid var(--surface-border); padding-bottom: 0.5rem; display: inline-block;">Staff Directory</h3>' : ''}
            \${filterHtml}
            <div class="staff-grid" id="modal-staff-grid">
            \${staffHtml.length > 0 ? staffHtml : (filterHtml ? '<p>No staff directory records found.</p>' : '')}
            </div>
        </div>\` : ''}
        
        \${projHtml}
        \${labHtml}
      \`;

      // Navigation Logic
      const navBtns = modalBody.querySelectorAll('.modal-nav-btn');
      navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const targetId = btn.getAttribute('data-scroll');
          const targetEl = modalBody.querySelector('#' + targetId);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            navBtns.forEach(b => {
                b.classList.remove('active');
                b.style.color = 'var(--text-secondary)';
                b.style.borderBottom = '2px solid transparent';
            });
            btn.classList.add('active');
            btn.style.color = 'var(--primary-color)';
            btn.style.borderBottom = '2px solid var(--primary-color)';
          }
        });
      });
      // Set initial styles for nav
      if(navBtns.length > 0) {
          navBtns.forEach(b => {
              b.style.background = 'transparent';
              b.style.border = 'none';
              b.style.borderBottom = '2px solid transparent';
              b.style.color = 'var(--text-secondary)';
              b.style.padding = '10px 15px';
              b.style.fontWeight = 'bold';
              b.style.cursor = 'pointer';
              b.style.fontSize = '1.1rem';
              b.style.transition = 'all 0.3s';
          });
          navBtns[0].classList.add('active');
          navBtns[0].style.color = 'var(--primary-color)';
          navBtns[0].style.borderBottom = '2px solid var(--primary-color)';
      }

      // Filter Logic
      const filterBtns = modalBody.querySelectorAll('.filter-btn');
      const filterItems = Array.from(modalBody.querySelectorAll('.filter-item'));
      
      if(filterBtns.length > 0) {
        filterBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            filterBtns.forEach(b => {
              b.classList.remove('active');
              b.style.background = 'transparent';
              b.style.color = 'var(--text-primary)';
            });
            btn.classList.add('active');
            btn.style.background = 'linear-gradient(135deg, var(--primary-color), #8b5cf6)';
            btn.style.color = 'white';
            
            const category = btn.getAttribute('data-filter');
            filterItems.forEach(item => {
              if (category === 'all' || item.getAttribute('data-role') === category) {
                item.style.display = 'block';
              } else {
                item.style.display = 'none';
              }
            });
          });
        });
        
        // Initial state styled as active button
        filterBtns[0].style.background = 'linear-gradient(135deg, var(--primary-color), #8b5cf6)';
        filterBtns[0].style.color = 'white';
      }

      // Add neat interactive effects for the horizontal project scroll
      const projectCards = modalBody.querySelectorAll('.project-card');
      projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          card.style.transform = 'translateY(-10px) scale(1.02)';
          card.style.boxShadow = '0 15px 35px rgba(0,0,0,0.5), inset 0 0 20px rgba(99, 102, 241, 0.1)';
        });
        card.addEventListener('mouseleave', () => {
          card.style.transform = 'translateY(0) scale(1)';
          card.style.boxShadow = 'none';
        });
      });
      `;

let finalContent = content.substring(0, match.index) + 
                   "const deptData = " + newDeptDataStr.trim() + ";\n\n  // Provide a fallback" +
                   content.substring(match.index + match[0].length, modalLogicStart) +
                   newModalLogic + 
                   content.substring(modalLogicEnd);

fs.writeFileSync('script.js', finalContent);
console.log("Updated script.js successfully");
