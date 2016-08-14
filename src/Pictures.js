import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';

class Pictures extends Component {
  render () {
    return(
      <Gallery photos={PHOTO_SET} />
    )
  }
};

const PHOTO_SET = [
  {
    src: 'http://placehold.it/350x150',
    width: 681,
    height: 1024,
    aspectRatio: 1.5,
    lightboxImage:{
    src: 'http://placehold.it/350x150',
    srcset: [
      'http://placehold.it/350x150 1024w',
      'http://placehold.it/350x150 800w',
      'http://placehold.it/350x150 500w',
      'http://placehold.it/350x150 320w',
    ]
    }
  },
  {
    src: 'http://placehold.it/350x150',
    width: 600,
    height: 600,
    aspectRatio: 1,
    lightboxImage:{
    src: 'http://placehold.it/350x150',
    srcset: [
      'http://placehold.it/350x150 1024w',
      'http://placehold.it/350x150 800w',
      'http://placehold.it/350x150 500w',
      'http://placehold.it/350x150 320w',
    ]
    }
  }
];


export default Pictures;
