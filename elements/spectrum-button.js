(function() {
  const template = document.createElement('template');

  template.innerHTML = `
    <style>
      .spectrum-ActionButton {
        display: inline-flex;
        box-sizing: border-box;
        background-color: rgb(250, 250, 250);
        border-color: rgb(225, 225, 225);
        color: rgb(75, 75, 75);
        position: relative;
        height: 32px;
        min-width: 32px;
        padding: 0 6px;
        border-width: 1px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 400;
        align-items: center;
        justify-content: center;
        overflow: visible;
        margin: 0;
        border-style: solid;
        white-space: nowrap;
        text-transform: none;
      }
      
    </style>
    <button class="spectrum-ActionButton">
      <span class="spectrum-ActionButton-label">Edit</span>
    </button>
  `;

  class SpectrumButton extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

  window.customElements.define('spectrum-button', SpectrumButton);
})();