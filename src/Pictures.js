import React, { Component } from 'react';

import Lightbox from 'react-images';
import Gallery from 'react-photo-gallery';
import $ from 'jquery';
import _ from 'lodash';

class Pictures extends Component {
  state = {
    photos: [],
    pageNum: 0,
    totalPages: Infinity,
    loading: false
  }

  componentWillMount () {
    this.loadMorePhotos();
  }

  loadMorePhotos () {
    if (this.state.pageNum > this.state.totalPages) return;
    this.setState({loading: true}, () => {
      $.ajax({
        url: 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=152a216d6abe1226244dc61bb0992439&photoset_id=72157672679560685&user_id=144523740@N02&format=json&per_page=9&page='+(this.state.pageNum+1)+'&extras=url_o,url_m,url_l,url_c',
        dataType: 'jsonp',
        jsonpCallback: 'jsonFlickrApi',
        cache: false,
        success: (data) => {
          let photoSet = data.photoset || {photo:[], pages:this.state.totalPages};
          let newPhotos = photoSet.photo.map(function(obj,i) {
            let aspectRatio = parseFloat(obj.width_o / obj.height_o);
            return {
              src: (aspectRatio >= 3) ? obj.url_c : obj.url_m,
              width: parseInt(obj.width_o, 10),
              height: parseInt(obj.height_o, 10),
              aspectRatio: aspectRatio,
              lightboxImage:{src: obj.url_l, caption: obj.title}
            };
          });
          this.setState({
            loading: false,
            photos: [
              ...this.state.photos,
              ...newPhotos
            ],
            pageNum: this.state.pageNum + 1,
            totalPages: photoSet.pages
          });
        },
        error: (xhr, status, err) => {
          console.error(status, err.toString());
          this.setState({loading:false});
        }
      });
    });
  }

  handleScroll = _.throttle(() => {
    console.log('handleScroll', this.container.offsetHeight + this.container.scrollTop >= this.container.scrollHeight - 200);

    if (this.container.offsetHeight + this.container.scrollTop >= this.container.scrollHeight - 200) {
      console.log('containerBottom')
      this.loadMorePhotos();
    }
  },200);

  render () {
    return(
      <div className="pictures" ref={(el) => this.container = el} onScroll={this.handleScroll}>
	      <Gallery photos={this.state.photos} />
        {this.state.loading && (
          <span>Loading...</span>
        )}
      </div>
	  );
  }
}

export default Pictures;
