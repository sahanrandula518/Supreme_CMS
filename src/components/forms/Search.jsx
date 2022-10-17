import React, { Component } from "react";
import "./SearchStyle.css";

class Search extends Component {
  render() {
    return (
      <div className="Search-parent">
        <div className="Search-name"></div>
        <h1 className="title-Search">Search</h1>
        <div className="Search-form"></div>

        <form>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Name</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Search Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Content ID</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Search Content ID"
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Language</label>
            <select id="inputState" class="form-control">
                 <option selected>Select Language</option>
                 <option>English</option>
                 <option>Sinhala</option>
                 <option>Tamil</option>
            </select>
            
            
          </div>
          
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Search Category</th>
              <th colSpan={10}>Available Option to Search with</th>
              
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>MO</td>
              <td colSpan="2">Name</td>
              <td colSpan="2">Content ID</td>
              <td colSpan="2">Landuage</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>ET</td>
              <td colSpan="2">Name</td>
              <td colSpan="2">Content ID</td>

            </tr>
            <tr>
              <th scope="row">3</th>
              <td>TD</td>  
              <td colSpan="2">Name</td>
              <td colSpan="2">Content ID</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>RL</td>
              <td colSpan="2">Name</td>
              <td colSpan="2">Content ID</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>CT</td>
              <td colSpan="2">Name</td>
              <td colSpan="2">Content ID</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>RL</td>
              <td colSpan="2">Name</td>
              <td colSpan="2">Content ID</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>ED</td>
              <td colSpan="2">Name</td>
              <td colSpan="2">Content ID</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>SP</td>
              <td>Name</td>
              <td>Content ID</td>
              <td>Sport</td>
              <td>Tournament</td>
              <td>Year</td>
              <td>Teams</td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>DC</td>
              <td colSpan="2">Name</td>
              <td colSpan="2">Content ID</td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>CM</td>
              <td colSpan="2">Name</td>
              <td colSpan="2">Content ID</td>
            </tr>
            <tr>
              <th scope="row">11</th>
              <td>TC</td>
              <td colSpan="2">Name</td>
              <td colSpan="2">Content ID</td>
            </tr>
            <tr>
              <th scope="row">12</th>
              <td>NL</td>
              <td colSpan="2">Name</td>
              <td colSpan="2">Content ID</td>
            </tr>
            <tr>
              <th scope="row">13</th>
              <td>PL</td>
              <td colSpan="2">Name</td>
              <td colSpan="2">Content ID</td>
            </tr>
            <tr>
              <th scope="row">14</th>
              <td>NE</td>
              <td colSpan="2">Name</td>
              <td colSpan="2">Content ID</td>
            </tr>
            <tr>
              <th scope="row">15</th>
              <td>PROMO</td>
              <td colSpan="2">Name</td>
              <td colSpan="2">Content ID</td>
            </tr>
            <tr>
              <th scope="row">16</th>
              <td>NNL</td>
              <td colSpan="2">Name</td>
              <td colSpan="2">Content ID</td>
            </tr>
            <tr>
              <th scope="row">17</th>
              <td>FIL</td>
              <td colSpan="2">Name</td>
              <td colSpan="2">Content ID</td>
            </tr>
            <tr>
              <th scope="row">18</th>
              <td>SPTR</td>
              <td colSpan="2">Name</td>
              <td colSpan="2">Content ID</td>
            </tr>

          </tbody>
        </table>
      </div>
    );
  }
}

export default Search;
