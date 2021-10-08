export abstract class ClickListener<Handler extends Function> {
  protected _handler: Handler | undefined
  protected event: MouseEvent

  set handler(h: Handler) {
    this._handler = h
  }

  constructor(protected readonly element: HTMLElement) {
    this.element.addEventListener('click', event => {
      this.event = event
      this.onClicked()
    })
  }

  protected getClosestElement(selectors: string): HTMLElement | null {
    return (this.event.target as HTMLElement).closest(selectors)
  }

  protected abstract onClicked(): void
}
