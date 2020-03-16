import React, { Component } from 'react';


class PersonStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            feeling: ''
        }
    }
    //record name entry
    nameEntry = (event) => {
        this.setState(
            {
                name: event.target.value
            }
        )
    }

    //record age entry
    ageEntry = (event) => {
        this.setState(
            {
                age: event.target.value
            }
        )
    }

    //record feeling Entry
    feelingEntry = (event) => {
        this.setState(
            {
                feeling: event.target.value
            }
        )
    }
    //function for submit button
    submitEntry = (event) => {
        event.preventDefault();
        //reference elements needed
        const log = document.getElementById("entrylog");

        //create template literal for entry log
        const entry = `Hello ${this.state.name}. Your age is ${this.state.age} and you're feeling ${this.state.feeling}.`

        //display entry in the DOM
        return log.innerText = entry;
    }


    render() {

        return (
            <div>
                <form action="">
                    <fieldset>
                        <legend>Your Stats</legend>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" onChange={this.nameEntry} value={this.state.name} />
                        <br />
                        {/* would have made sense for this to be a number input */}
                        <label htmlFor="age">Age:</label>
                        <input type="text" id="age" onChange={this.ageEntry} value={this.state.age} />
                        <br />
                        {/* would have made sense for this to be a text area input */}
                        <label htmlFor="feeling">Feeling:</label>
                        <input type="text" id='feeling' onChange={this.feelingEntry} value={this.state.feeling} />
                        <br />
                        <button onClick={this.submitEntry}>Submit</button>
                    </fieldset>
                </form>
                <div id="entrylog">

                </div>

            </div>
        )

    }

}

export default PersonStats;