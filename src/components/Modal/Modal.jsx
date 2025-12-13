import React, { Component } from "react";
import css from './Modal.module.css';

export class Modal extends Component {
    render() {
        const { onClose, largeImageURL } = this.props;
    
        return (
            <div className={css.overlay}
                onClick={e => {
                    if (e.target === e.currentTarget) { onClose() }
                }
                } >
                <div className={css.modal}
                    onClick={e => e.stopPropagation()}>
                    <img src = {largeImageURL} alt = "" />
                </div>
            </div>
        );

    }
}
