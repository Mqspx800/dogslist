import React, {Component} from 'react'
import DogBreedImages from './DogBreedImages'
import request from 'superagent'

export default class DogBreedImagesContainer extends Component {
  state = { images: null }
  breed = this.props.match.params.breed
  componentDidMount() {
    request
      .get(`https://dog.ceo/api/breed/${encodeURIComponent(this.breed)}/images`)
      .then(response =>  this.updateImages(response.body.message))
      .catch(console.error)
  }

  updateImages(images) {
    this.setState({
        images
    })
  }

  render() {
    return <DogBreedImages images={ this.state.images } breed={this.breed} />
  }
}