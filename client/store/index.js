import {
  observable,
  computed,
  action
} from 'mobx'

export class AppState {
  @observable count = 0

  @observable name = 'jekorx'

  @computed get msg () {
    return `${this.name} and ${this.count}`
  }

  @action add () {
    this.count += 1
  }

  @action changeName (name) {
    this.name = name
  }
}

export default new AppState()
