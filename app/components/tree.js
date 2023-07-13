import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TreeComponent extends Component {
  @tracked isRendered = false;
  @tracked numberOfRows = 10;

  @action
  toggleRender() {
    console.log('I was clicked');
    if (!this.isRendered) {
      this.renderTree();
    }
    this.isRendered = !this.isRendered;
  }
  @action
  renderTree() {
    this.message = 'hello I am a tree, kappa';
  }
}
