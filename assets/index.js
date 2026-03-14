class Carousel extends HTMLUListElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const scrollAmount = this.getBoundingClientRect().width / 5;
    let previousPosition = 0;

    this.timer = setInterval(() => {
      this.scrollBy({ left: scrollAmount, behavior: "smooth" });
      const newPosition = this.children[0].getBoundingClientRect().x;
      if (previousPosition == newPosition) {
        this.scrollBy({ left: -100 * scrollAmount, behavior: "smooth" });
      }
      previousPosition = newPosition;
    }, 5000);
  }

  disconnectedCallback() {
    clearInterval(this.timer);
  }
}

customElements.define("afoep-carousel", Carousel, { extends: "ul" });
