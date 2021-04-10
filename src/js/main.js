class Counter {
  _counter = 0;

  increase() {
    this._counter++
    this.update()
  }

  decrease() {
    this._counter--
    this.update()
  }

  reset() {
    this._counter = 0
    this.update()
  }

  update() {
    const counterHTML = document.querySelector('#counter')

    counterHTML.textContent = this._counter.toString()

    counterHTML.style.color = this._counter === 0
      ? 'black'
      : this._counter > 0 ? 'green' : 'red'

  }
}

/* main module */
((counter) => {
  const actions = document.querySelector('#action-buttons')

  actions.addEventListener('click', (e) => {
    if (e.target === actions) return;

    counter[e.target.id.slice(4)]()
  })

})(new Counter);