export class Timer {
  private interval: NodeJS.Timer | undefined
  private startMinutes: number | undefined
  private startSeconds: number | undefined

  constructor(public minutes: number, public seconds: number) {}

  minusSeconds() {
    if (this.seconds === 0) {
      this.seconds = 59
      this.minusMinutes()
    }

    this.seconds -= 1
  }

  minusMinutes() {
    this.minutes -= 1
  }

  start() {
    this.startMinutes = this.minutes
    this.startSeconds = this.seconds

    clearInterval(this.interval)

    this.interval = setInterval(() => {
      if (this.minutes <= 0 && this.seconds <= 0) {
        clearInterval(this.interval)

        if (this.startMinutes) this.minutes = this.startMinutes
        if (this.startSeconds) this.seconds = this.startSeconds
        return
      }

      this.minusSeconds()
    }, 1000)
  }

  get() {
    const minutes = this.minutes < 10 ? `0${this.minutes}` : `${this.minutes}`
    const seconds = this.seconds < 10 ? `0${this.seconds}` : `${this.seconds}`

    return `${minutes}:${seconds}`
  }
}
