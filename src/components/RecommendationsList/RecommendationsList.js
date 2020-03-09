import React, { Component } from 'react';
import './RecommendationsList.css';

import withApiAccess from '../ApiWrapper/ApiWrapper';

class RecommendationsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recommendations: []
    }
  }

  componentDidMount() {
    this.props.makeGetRequest('https://protected-harbor-70609.herokuapp.com/api/recommendations')
    .then((response) => {
      this.setState({ recommendations: response})
    }).catch((error) => {
    });
  }

  render() {
    const { recommendations } = this.state;

    return (
      <div className="component-recommendations-list">
        { recommendations.map((recommendation, index) => (
          <div className="element-recommendation" key={index}>{ recommendation.title }</div>
        ))}
      </div>
    )
  }
}

const WrappedRecommendationsList = withApiAccess(RecommendationsList)

export { RecommendationsList, WrappedRecommendationsList }
