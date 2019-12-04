import ShareButton from '../components/share-button';
import layout from '../templates/components/google-share-button';

export default ShareButton.extend({
  layout,
  shareURL: '//plus.google.com/share',
  classNames: ['google-share-btn', 'share-btn'],


  click() {
    let url = this.get('shareURL');
    url += '?url=' + encodeURIComponent(this.getCurrentUrl());
    this.openSharePopup(url);
  }
});
