import React, { Component } from 'react';
import './RecommendationsList.css';

import Recommendation from '../Recommendation/Recommendation';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import withApiAccess from '../ApiWrapper/ApiWrapper';
import baseUrl from '../../config';

class RecommendationsList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recommendations: [],
      error: null
    }
  }

  componentDidMount() {
    this.props.makeGetRequest(`${baseUrl}/api/recommendations`)
    .then((response) => {
      this.setState({ recommendations: response });
    }).catch((error) => {
      this.setState({ error: "fetching your recommendations"});
    });
  }

  handleAddToList = (urlToAdd) => {
    this.props.makePostRequest(`${baseUrl}/api/articles`, {url: urlToAdd})
    .then((response) => {
      this.props.addToState(response)
      this.setState({ error: null });
    }).catch((error) => {
      this.setState({ error: "adding your article"});
    });
  }

  render() {
    const { recommendations, error } = this.state;

    return (
      <div className="component-recommendations-list">
        <h3 className="title-text">Your Recommendations</h3>

        { error &&
          <ErrorMessage errorType={ error }/>
        }

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
