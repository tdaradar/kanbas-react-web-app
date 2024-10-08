export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
      The assignment is available online

      Links to an external site.

      Submit a link to the landing page of your Web application running on Netlify.

      The landing page should include the following:

          Your full name and section
          Links to each of the lab assignments
          Link to the Kanbas application
          Links to all relevant source code repositories
      The Kanbas application should include a link to navigate back to the landing page.
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="assignments">ASSIGNMENTS</option>
              <option value="exams">EXAMS</option>
              <option value="quizzes">QUIZZES</option>
              <option value="project">PROJECT</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade As</label>
          </td>
          <td>
              <select id="wd-display-grade-as">
                  <option value="percentage">Percentage</option>
              </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
              <select id="wd-submission-type">
                  <option value="Percentage">Online</option>
              </select>
              <div>
                  Online Entry Options<br />
                  <input type="checkbox" id="wd-text-entry" value="text-entry" />
                      <label htmlFor="wd-text-entry">Text Entry</label>
                  <input type="checkbox" id="wd-media-recordings" value="media-recordings" /> 
                      <label htmlFor="wd-media-recordings">Media Recordings</label>
                  <input type="checkbox" id="wd-student-annotation" value="student-annotation" />
                      <label htmlFor="wd-student-annotation">Student Annotation</label>
                  <input type="checkbox" id="wd-file-upload" value="file-upload" />
                      <label htmlFor="wd-file-upload">File Upload</label>
                      
              </div>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td>
              Assign to<br />
            <input id="wd-assign-to" value={'Everyone'} />
            <br /><br />
            Due<br />
            <input id="wd-due-date" type="date" value="2024-05-13" />
            <br /><br />
            
            Available from<br />
            <input id="wd-available-from" type="date" value="2024-05-06" />
            Until<br />
            <input id="wd-available-until" type="date" value="2024-05-20" />

          </td>
        </tr>
      </table>
      <hr />
      <div>
          <button>Cancel</button><button>Save</button>
      </div>
    </div>
);}
