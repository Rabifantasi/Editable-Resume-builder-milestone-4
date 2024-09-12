document.addEventListener('DOMContentLoaded', function () {
    var generateResume = function () {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var experience = document.getElementById('experience').value;
        var education = document.getElementById('education').value;
        var skills = document.getElementById('Skills').value;
        var resumeContent = "\n            <div class=\"container\">\n                <h1 contenteditable=\"true\">Resume</h1>\n\n                <div class=\"section\">\n                    <h2>Personal Information</h2>\n                    <p class=\"field-label\">Name:</p>\n                    <p class=\"field-value\" contenteditable=\"true\">".concat(name, "</p>\n                    <p class=\"field-label\">Email:</p>\n                    <p class=\"field-value\" contenteditable=\"true\">").concat(email, "</p>\n                    <p class=\"field-label\">Phone:</p>\n                    <p class=\"field-value\" contenteditable=\"true\">").concat(phone, "</p>\n                </div>\n\n                <div class=\"section\">\n                    <h2>Experience</h2>\n                    <p contenteditable=\"true\">").concat(experience, "</p>\n                </div>\n\n                <div class=\"section\">\n                    <h2>Education</h2>\n                    <p contenteditable=\"true\">").concat(education, "</p>\n                </div>\n\n                <div class=\"section\">\n                    <h2>Skills</h2>\n                    <p contenteditable=\"true\">").concat(skills, "</p>\n                </div>\n            </div>\n        ");
        var resumeOutput = document.getElementById('resume-output');
        var resumeContentDiv = document.getElementById('resume-content');
        if (resumeContentDiv && resumeOutput) {
            resumeContentDiv.innerHTML = resumeContent;
            resumeOutput.style.display = 'block';
        }
    };
    var generateButton = document.getElementById('generate-resume');
    if (generateButton) {
        generateButton.addEventListener('click', generateResume);
    }
    var editButton = document.getElementById('edit-resume');
    if (editButton) {
        editButton.addEventListener('click', function () {
            alert('You can now edit the resume directly by clicking on the fields.');
        });
    }
});
