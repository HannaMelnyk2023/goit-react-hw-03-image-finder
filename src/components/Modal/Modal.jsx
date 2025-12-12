import React, { Component } from "react";
import css from './Modal.module.css'
export class Modal extends Component {
    render() {
        const { isOpen, onClose, children } = this.props;
        if (!isOpen) {
            return null;
        }
        return (
            <div className={css.backdrop}
                onclick={onClose}>
                <div className={css.modal}
                    onCLick={e => e.stopPropagation()}>
                    {children}
                    <button className={css.closeButton}
                        onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        );

    }
}
