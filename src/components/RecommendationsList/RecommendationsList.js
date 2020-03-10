import React, { Component } from 'react';
import './RecommendationsList.css';

import Recommendation from '../Recommendation/Recommendation';
import withApiAccess from '../ApiWrapper/ApiWrapper';
import baseUrl from '../../config';

class RecommendationsList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recommendations: []
    }
  }

  componentDidMount() {
    this.props.makeGetRequest(`${baseUrl}/api/recommendations`)
    .then((response) => {
      this.setState({ recommendations: response})
    }).catch((error) => {
    });
  }

  handleAddToList = (urlToAdd) => {
    this.props.makePostRequest(`${baseUrl}/api/articles`, {url: urlToAdd})
    .then((response) => {
      this.props.addToState(response)
    }).catch((error) => {
    });
  }

  render() {
    const { recommendations } = this.state;

    return (
      <div className="component-recommendations-list">
        <h3 className="title-text">Your Recommendations</h3>
        <section className="element-recomendations">
          { recommendations.map((recommendation, index) => (
            <Recommendation
              key={index}
              title={ recommendation.title }
              url={ recommendation.url }
              handleAddToList={ this.handleAddToList }
            />
          ))}
        </section>
      </div>
    )
  }
}

const WrappedRecommendationsList = withApiAccess(RecommendationsList)

export { RecommendationsList, WrappedRecommendationsList }
