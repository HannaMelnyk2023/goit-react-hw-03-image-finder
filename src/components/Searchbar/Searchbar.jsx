import React, { Component } from "react";


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
            alert("enter a word for search!");
            return;
        }
        this.props.onSubmit(this.state.value);
        this.setState({ value: "" })
    };
    render() {
        return (
            <header className="searchbar">
                <form className="form" onSubmit={this.handleSubmit}>
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>
                    <input
                        className="input"
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
