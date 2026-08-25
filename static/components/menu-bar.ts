import { html, LitElement, css } from "lit";
import { property, customElement } from "lit/decorators.js";

@customElement("menu-bar")
export class MenuBar extends LitElement {
    static styles = [css`
        :host {
            width: 100%;
            box-sizing: border-box;
        }

        :host {
            display: flex;
            flex-wrap: wrap;
            background-color: #c0c0c0;
            padding: 4px 8px;
            border-bottom: 2px solid #808080;
            font-size: 16px;
            gap: 10px;
            font-family: win-95-font, sans-serif;
        }
        
    `]

    render() {
        return html`<slot></slot>`
    }
}

@customElement("menu-bar-item")
export class MenuBarElement extends LitElement {

    static styles = [
        css`

        :host a:hover {
            background-color: navy;
            color: white;
        }

        :host a {
            cursor: pointer;
            padding: 4px 6px;
            white-space: nowrap;  

            text-decoration: none;
            color: #000000;

            font-size: 16px;

            display: block;
        }

        :host a::first-letter {
            text-decoration: underline;
        }

        :host div {
            display: inline;
        }
        `
    ]

    @property({reflect: true})
    accessor label = "";

    @property({reflect: true})
    accessor href = "";

    // btw this stupid DIV! is so the ::first-letter pseudo-selector works correctly. - oscar
    render() {
        return html`
            <div>
            <a href=${this.href}>${this.label}</a>
            </div>
        `
    }

}