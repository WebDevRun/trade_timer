import { randomUUID } from 'crypto'

export class Id {
  public id: string = randomUUID()

  createId() {
    this.id = randomUUID()
  }

  get() {
    this.createId()
    return this.id
  }
}
