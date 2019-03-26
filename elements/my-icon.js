(function() {
  const template = document.createElement('template');

  template.innerHTML = `
      <style>
        :host {
          display: inline-block;
          mask: url("./icons/medium/Magnifier.svg") center / 100%;
          -webkit-mask: url("./icons/medium/Magnifier.svg") center / 100%;
        }
      </style>
  `;

  class MyIcon extends HTMLElement {

    // A getter/setter for an open property.
    get icon() {
      if( this.hasAttribute('icon') ){
        return this.getAttribute('icon');
      }
      return 'Magnifier.svg';
    }

    get size() {
      if( this.hasAttribute('size') ){
        return this.getAttribute('size');
      }
      return '16px';
    }

    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
      this.style.width = this.size;
      this.style.height = this.size;
      this.style.maskImage = `url("./icons/medium/${this.icon}")`;
      // console.log(i.style );
    }
  }

  window.customElements.define('my-icon', MyIcon);
})();