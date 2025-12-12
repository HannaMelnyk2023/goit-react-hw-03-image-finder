import React, { Component } from "react";
import css from "./Searchbar.module.css";

export class Searchbar extends Component{
    state = {
        value: "",
    };
    handleChange = (e) => {
        this.setState({ value: e.target.value })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.value.trim()) {
            alert("Enter a word for search!");
            return;
        }
        this.props.onSubmit(this.state.value);
        this.setState({ value: "" })
    };
    render() {
        return (
            <header className={css.searchbar}>
                <form className={css.searchForm} onSubmit={this.handleSubmit}>
                    <button type="submit" className={css.searchFormButton}>
                        <span className={css.searchFormButtonLabel}>Search</span>
                    </button>
                    <input
                        className={css.searchFormInput}
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos" />
                </form>
            </header>
        );
    }
}
