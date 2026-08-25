import { html, LitElement, css } from "lit";
import { property, customElement } from "lit/decorators.js";

@customElement("title-bar")
export class WindowTitleBar extends LitElement {

    static styles = [css`
        :host {
            display: block; 
            padding: 8px;
            box-sizing: border-box;
            background-color: navy;
        }

        @media(min-width: 768px) {
            .title-bar-buttons {
                padding: 8px 12px;
                font-size: 22px;
            }
        
            .title-bar {
                width: 24px;
                height: 24px;
                line-height: 20px;
                font-size: 18px;
            }

            span {
                font-size: 22px;
            }
        }

        .title-bar {
            width: 100%;
            box-sizing: border-box;
        }

        .title-bar {
            color: white;
            padding: 6px 8px;
            font-size: 18px;
            font-weight: bold;
            display: flex;
            justify-content: space-between;
            align-items: center;

            padding: 4px;

        }

        .title-bar-buttons {
            display: flex;
            gap: 4px;
        }

        .title-bar-button {
            background-color: #c0c0c0;
            border: 2px outset #fff;
            width: 20px;
            height: 20px;
            text-align: center;
            line-height: 16px;
            font-size: 14px;
            cursor: pointer;
        }

    `]

    @property()
    accessor windowTitle = "Window";

    closeWindow() {
        if (confirm("Are you sure you want to close this window?")) {
            alert(`Because of "Security Concerns" we cannot close this tab, however we are able to redirect you`)
            window.open("https://zombo.com/", "_top")
        }
    }

    render() {
        return html`
        <div class="title-bar">
            <span>${this.windowTitle}</span>
            <div class="title-bar-buttons">
                <div class="title-bar-button">_</div>
                <div class="title-bar-button">□</div>
                <div @click=${this.closeWindow} class="title-bar-button">×</div>
            </div>
        </div>
        `
    }

}