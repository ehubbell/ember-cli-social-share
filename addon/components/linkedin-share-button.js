import ShareButton from '../components/share-button';
import layout from '../templates/components/linkedin-share-button';

export default ShareButton.extend({
  layout,
  shareURL: 'https://www.linkedin.com/shareArticle',
  classNames: ['linkedin-share-btn'],
  hashtags: '',

  
  click() {
    let url = this.get('shareURL');
    url += '?mini=true';
    url += '&url=' + encodeURIComponent(this.getCurrentUrl());
    url += '&title=' + this.get('title');
    url += '&summary=' + this.get('text');
    url += this.get('via') ? '&source=' + this.get('via') : '';

    this.openSharePopup(url);
  }
});
