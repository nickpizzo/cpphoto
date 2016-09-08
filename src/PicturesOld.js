import React, { Component } from 'react';

import Lightbox from 'react-images';
import Gallery from 'react-photo-gallery';
import $ from 'jquery';
import _ from 'lodash';

class Pictures extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      pageNum: 1,
      totalPages: 1,
      loadedAll: false
    };

  }

  componentDidMount () {
    debugger;
    this.loadMorePhotos();
    this.loadMorePhotos = _.debounce(this.loadMorePhotos, 200);
    window.addEventListener('scroll', this.handleScroll);
  }

  handelScroll () {
    console.log('handelScroll')
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 50)) {
      this.loadMorePhotos();
    }
  }

  loadMorePhotos (e) {
    if (e) {
      e.preventDefault();
    }
    if (this.state.pageNum > this.state.totalPages) {
      this.setState({loadedAll: true});
      return
    }
    $.ajax({
      url: 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=152a216d6abe1226244dc61bb0992439&photoset_id=72157672679560685&user_id=144523740@N02&format=json&per_page=10&page='+this.state.pageNum+'&extras=url_o,url_m,url_l,url_c',
      dataType: 'jsonp',
      jsonpCallback: 'jsonFlickrApi',
      cache: false,
      success: function (data) {
        let photos = data.photoset.photo.map(function(obj,i) {
          let aspectRatio = parseFloat(obj.width_o / obj.height_o);
          return {
            src: (aspectRatio >= 3) ? obj.url_c : obj.url_m,
            width: parseInt(obj.width_o),
            height: parseInt(obj.height_o),
            aspectRatio: aspectRatio,
            lightboxImage:{src: obj.url_l, caption: obj.title}
          };
        });
        this.setState({
          photos: this.state.photos ? this.state.photos.concat(photos) : photos,
          pageNum: this.state.pageNum + 1,
          totalPages: data.photoset.pages
        });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(status, err.toString());
      }.bind(this)
    });
  }

  renderGallery () {
    return(
	     <Gallery photos={this.state.photos} />
	  );
  }


  render () {
    return(
      <div className="App">
        {this.renderGallery()}
      </div>
    );
  }


  renderOld () {
    if (this.state.photos && this.state.loadedAll){
      return(
		    <div className="App">
		      {this.renderGallery()}
		    </div>
      );
    } else if (this.state.photos) {
	    return(
		    <div className="App">
		      {this.renderGallery()}
			    <div className="loading-msg" id="msg-loading-more">Loading</div>
		    </div>
	    );
	  } else {
      return(
		    <div className="App">
			    <div id="msg-app-loading" className="loading-msg">Loading</div>
		    </div>
      );
    }
  }
};

export default Pictures;
