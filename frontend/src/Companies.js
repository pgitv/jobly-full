import React, { Component } from 'react';
import Search from './Search.js';
import JoblyApi from './JoblyApi';
import { Link } from 'react-router-dom';
import CompanyCard from './CompanyCard.js';

//import './Companies.css';

class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: []
    };
    this.searchCompanies = this.searchCompanies.bind(this);
  }

  async componentDidMount() {
    let response = await JoblyApi.getCompanies('/');
    // console.log('get companies', companies);
    this.setState({ companies: response });
  }

  async searchCompanies(searchTerm) {
    let response = await JoblyApi.searchCompanies(searchTerm);
    this.setState({ companies: response });
  }

  passCompanyInfo = handle => {
    let company = this.state.companies.handle;
    return company;
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <Search searchFilter={this.searchCompanies} />
            {this.state.companies.map(company => (
              <Link key={company.handle} to={`/companies/${company.handle}`}>
                <CompanyCard company={company} key={company.handle} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Companies;
