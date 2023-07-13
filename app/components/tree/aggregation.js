import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, computed } from '@ember/object';

export default class TreeAggregationComponent extends Component {
  // @action
  // didRender() {
  //   console.log(Date.now(), 'this should be the date');
  //   console.log(Date.now(), 'this should be date after render');
  // }

  @tracked isRendered = false;
  @tracked numberOfRows = 10;
  @tracked updated = false;
  @computed('numberOfRows')
  get fakeArray() {
    return Array(parseInt(this.numberOfRows));
  }

  @action
  handleClick() {
    this.isRendered = !this.isRendered;
  }
  @action
  deleteRow() {
    this.numberOfRows -= 1;
  }

  @action
  updateRows() {
    this.updated = !this.updated;
  }

  isMod10 = (index) => index % 10 === 0 && this.updated;
}
