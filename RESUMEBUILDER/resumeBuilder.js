document.getElementById('resumeForm').addEventListener('submit', function(e) {
  e.preventDefault();
  generateResume();
});

function generateResume() {
  const form = document.getElementById('resumeForm');
  const preview = document.getElementById('previewContent');

  let file=document.getElementById('img-field').files[0];
  let reader=new FileReader()
  reader.readAsDataURL(file)

  reader.onloadend=function(){
  document.getElementById('set-image').src=reader.result;
  }

  preview.innerHTML = `
    <img src="" id="set-image" class="image-set">
    <h3 id="form-style">${form.fullName.value}</h3>
    <p class="styles-form">${form.email.value} ${form.phone.value}<br>${form.address.value}<br>${form.linkedinUrl.value}<br>${form.linkedinUrl.value}</p>
   
    <h3 id="form-style">Education</h3>
    <p class="styles-form">Degree:${form.educationTitle.value}</p>
    <p class="styles-form">Institution:${form.educationInstitution.value}</p>
    <p class="styles-form">Completion Date:${form.educationDate.value}</p>
    <p class="styles-form">Degree:${form.educationTitle.value}</p>
    <p class="styles-form">Institution:${form.educationInstitution.value}</p>
    <p class="styles-form">Completion Date:${form.educationDate.value}</p>
    <p class="styles-form">Degree:${form.educationTitle.value}</p>
    <p class="styles-form">Institution:${form.educationInstitution.value}</p>
    <p class="styles-form">Completion Date:${form.educationDate.value}</p>

    <h3 id="form-style">Work Experience</h3>
    <p class="styles-form">Work Title:${form.workTitle.value}</p>
    <p class="styles-form">Company:${form.workCompany.value}</p>
    <p class="styles-form">date:${form.JoiningDate.value}</p>
    <p class="styles-form">date:${form.resignDate.value}</p>
    <p class="styles-form"> Work Description:${form.workDescription.value}</p>
    <p class="styles-form">Work Title:${form.workTitle.value}</p>
    <p class="styles-form">Company:${form.workCompany.value}</p>
    <p class="styles-form">date:${form.JoiningDate.value}</p>
    <p class="styles-form">date:${form.resignDate.value}</p>
    <p class="styles-form"> Work Description:${form.workDescription.value}</p>

    <h3 id="form-style">Internship and Fields</h3>
    <p class="styles-form">Internship Field:${form.internshipFieldName.value}</p>
    <p class="styles-form">Organisation Name:${form.orgName.value}</p>
    <p class="styles-form">Passing Date:${form.passingDate.value}</p>
    <p class="styles-form">Marks:${form.aggregateMark.value}</p>
    <p class="styles-form">Internship Field:${form.internshipFieldName.value}</p>
    <p class="styles-form">Organisation Name:${form.orgName.value}</p>
    <p class="styles-form">Passing Date:${form.passingDate.value}</p>
    <p class="styles-form">Marks:${form.aggregateMark.value}</p>

    <h3 id="form-style">Certifications</h3>
    <p class="styles-form">Certificate:${form.Certificate.value}</p>
    <p class="styles-form">Certificate:${form.Certificate.value}</p>
    <p class="styles-form">Certificate:${form.Certificate.value}</p>
    <p class="styles-form">Certificate:${form.Certificate.value}</p>
    <p class="styles-form">Certificate:${form.Certificate.value}</p>

    <h3 id="form-style">Projects</h3>
    <p class="styles-form">Project Title:${form.projectTitle.value}</p>
    <p class="styles-form">Project Description:${form.projectDescription.value}</p>
    <p class="styles-form">Project Title:${form.projectTitle.value}</p>
    <p class="styles-form">Project Description:${form.projectDescription.value}</p>

    <h3 id="form-style">Skills</h3>
    <p class="styles-form">Skills:${form.skill.value}</p>
    <p class="styles-form">Skills:${form.skill.value}</p>
    <p class="styles-form">Skills:${form.skill.value}</p>
    <p class="styles-form">Skills:${form.skill.value}</p>
    <p class="styles-form">Skills:${form.skill.value}</p>

    <h3 id="form-style">Languages</h3>
    <p class="styles-form">Languages:${form.language.value}</p>
    <p class="styles-form">Languages:${form.language.value}</p>

    <!-- Add more fields as needed -->
  `;

  document.getElementById('preview').style.display = 'block';
}

function download() {
  debugger
  var element = document.getElementById('previewContent');
  // define optional configuration
  var options = { filename: 'my-file.pdf' };

  var exporter = new html2pdf(element, options);
  // download the pdf
  exporter.getPdf(true).then((pdf) => { console.log('pdf downloaded!', pdf); });
}

