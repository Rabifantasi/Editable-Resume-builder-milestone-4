
document.addEventListener('DOMContentLoaded', () => {
    

    const generateResume = () => {
        
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('Skills') as HTMLTextAreaElement).value;

       
        const resumeContent = `
            <div class="container">
                <h1 contenteditable="true">Resume</h1>

                <div class="section">
                    <h2>Personal Information</h2>
                    <p class="field-label">Name:</p>
                    <p class="field-value" contenteditable="true">${name}</p>
                    <p class="field-label">Email:</p>
                    <p class="field-value" contenteditable="true">${email}</p>
                    <p class="field-label">Phone:</p>
                    <p class="field-value" contenteditable="true">${phone}</p>
                </div>

                <div class="section">
                    <h2>Experience</h2>
                    <p contenteditable="true">${experience}</p>
                </div>

                <div class="section">
                    <h2>Education</h2>
                    <p contenteditable="true">${education}</p>
                </div>

                <div class="section">
                    <h2>Skills</h2>
                    <p contenteditable="true">${skills}</p>
                </div>
            </div>
        `;

        const resumeOutput = document.getElementById('resume-output') as HTMLDivElement;
        const resumeContentDiv = document.getElementById('resume-content') as HTMLDivElement;

        if (resumeContentDiv && resumeOutput) {
            resumeContentDiv.innerHTML = resumeContent;
            resumeOutput.style.display = 'block'; 
        }
    };

   
    const generateButton = document.getElementById('generate-resume') as HTMLButtonElement;
    if (generateButton) {
        generateButton.addEventListener('click', generateResume);
    }


    const editButton = document.getElementById('edit-resume') as HTMLButtonElement;
    if (editButton) {
        editButton.addEventListener('click', () => {
        
            alert('You can now edit the resume directly by clicking on the fields.');
        });
    }
});
