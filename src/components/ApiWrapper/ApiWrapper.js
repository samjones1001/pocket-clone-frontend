import React, { Component } from 'react';
import './ApiWrapper.css';
import axios from 'axios';

const withApiAccess = (WrappedComponent) => {
  class ApiWrapper extends Component {
    async getRequest(url) {
      const result = await axios.get(url)
      return result.data
    }

    async postRequest(url, postData) {
      const result = await axios.post(url, postData)
      return result.data
    }

    async deleteRequest(url) {
      const result = await axios.delete(url)
      return result.data
    }

    async putRequest(url, postData) {
      const result = await axios.put(url, postData)
      return result.data
    }

    render() {
      return(
        <WrappedComponent
          makeGetRequest={ this.getRequest }
          makePostRequest={ this.postRequest }
          makeDeleteRequest={ this.deleteRequest }
          makePutRequest={ this.putRequest }
          { ...this.props }
        />
      )
    }
  }

  return ApiWrapper;
}

export default withApiAccess;
