import React from "react";
import "./App.css";

  export default function App() {
  return (
    <div>
      <h1>STUDENT REGISTRATION FORM</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <table>
          <tbody>
            <tr>
              <th>FIRST NAME</th>
              <td>
                <input type="text" /> (max 30 characters a-z and A-Z)
              </td>
            </tr>

            <tr>
              <th>LAST NAME</th>
              <td>
                <input type="text" /> (max 30 characters a-z and A-Z)
              </td>
            </tr>

            <tr>
              <th>DATE OF BIRTH</th>
              <td>
                <select>
                  <option>Day</option>
                  {[...Array(31)].map((_, i) => (
                    <option key={i}>{i + 1}</option>
                  ))}
                </select>

                <select>
                  <option>Month</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i}>{i + 1}</option>
                  ))}
                </select>

                <select>
                  <option>Year</option>
                  {[2008,2009,2010,2011,2012,2013,2014,2015,2016].map(y => (
                    <option key={y}>{y}</option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <th>EMAIL ID</th>
              <td><input type="email" /></td>
            </tr>

            <tr>
              <th>MOBILE NUMBER</th>
              <td><input type="number" /> (10 digit number)</td>
            </tr>

            <tr>
              <th>GENDER</th>
              <td>
                Male <input type="radio" name="gender" />
                Female <input type="radio" name="gender" />
              </td>
            </tr>

            <tr>
              <th>ADDRESS</th>
              <td><textarea rows="3"></textarea></td>
            </tr>

            <tr>
              <th>CITY</th>
              <td><input type="text" /></td>
            </tr>

            <tr>
              <th>PIN CODE</th>
              <td><input type="password" /></td>
            </tr>

            <tr>
              <th>STATE</th>
              <td><input type="text" /></td>
            </tr>

            <tr>
              <th>COUNTRY</th>
              <td><input type="text" /></td>
            </tr>

            <tr>
              <th>HOBBIES</th>
              <td>
                Drawing <input type="checkbox" />
                Singing <input type="checkbox" />
                Dancing <input type="checkbox" />
                Sketching <input type="checkbox" />
                Others <input type="checkbox" /> <input type="text" />
              </td>
            </tr>
          </tbody>
        </table>

        <br />

        {/* Qualification Table */}
        <table id="abc" border="1">
          <tbody>
            <tr>
              <th>Qualification</th>
              <th>SI.NO</th>
              <th>Examination</th>
              <th>Board</th>
              <th>Percentage</th>
              <th>Year</th>
            </tr>

            {["Class X", "Class XII", "Graduation", "Master"].map((item, i) => (
              <tr key={i}>
                <td></td>
                <td>{i + 1}</td>
                <td>{item}</td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
            ))}
          </tbody>
        </table>

        <br />

        {/* Course */}
        <table>
          <tbody>
            <tr>
              <th>APPLIED FOR</th>
              <td>
                BCA <input type="radio" name="course" />
                B.Com <input type="radio" name="course" />
                B.A <input type="radio" name="course" />
              </td>
            </tr>
          </tbody>
        </table>

        <br />

        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}

 