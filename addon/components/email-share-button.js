import ShareButton from '../components/share-button';
import { get, set, computed } from '@ember/object';
import layout from '../templates/components/email-share-button';

export default ShareButton.extend({
  tagName: 'a',
  layout,
  classNames: ['email-share-btn'],
  attributeBindings: ['target', 'href'],
  target: '_top',

  // Props
  recipient: '',
  subject: '',
  body: '',


  // Computed
  href: computed('recipient', 'subject', 'title', function() {
  	let recipient = get(this, 'recipient');
  	let subject = get(this, 'subject');
  	let title = get(this, 'title');
  	return `mailto:${recipient}?subject=${subject}&amp;body=${title}`;
  })

});
