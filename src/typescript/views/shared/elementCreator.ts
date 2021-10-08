export class ElementCreator {
  static createElement(data: {
    parentEl?: HTMLElement
    tag: string
    id?: string
    class?: string
    dataSets?: { key: string; value: string }[]
    innerHTML?: string
  }) {
    const element = document.createElement(data.tag)

    if (data.id) element.setAttribute('id', data.id)
    if (data.class) element.setAttribute('class', data.class)

    data.dataSets?.forEach(dataSet => {
      element.dataset[dataSet.key] = dataSet.value
    })

    element.innerHTML = data.innerHTML ?? ''

    data.parentEl?.appendChild(element)

    return element
  }
}
