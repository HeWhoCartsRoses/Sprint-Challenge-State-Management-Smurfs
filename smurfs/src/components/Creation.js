import React from "react";
import { addSmurf } from "../actions/general";
class Creation extends React.Component {
    state = {
        newSmurf: {
            name: '',
            age: '',
            height: ''
        }
    };

    handleChanges = e => {
        this.setState({ newSmurf: e.target.value });
    };

    render() {
        return (
            <React.Fragment>
                <form>
                    <label>Name:
                <input
                            type="text"
                            value={this.state.newSmurf.name}
                            onChange={this.handleChanges}
                            placeholder="Name"
                        />
                    </label>
                    <label>Age:
                <input
                            type="text"
                            value={this.state.newSmurf.age}
                            onChange={this.handleChanges}
                            placeholder="Age"
                        />
                    </label>
                    <label>Height:
                <input
                            type="text"
                            value={this.state.newSmurf.height}
                            onChange={this.handleChanges}
                            placeholder="Height"
                        />
                    </label>
                </form>
                <button onClick={() => {
                    addSmurf({ type: 'UPDATE_SMURF', payload: this.state.newSmurf });
                }}>
                    Add Smurf
				</button>

            </React.Fragment>
        );
    }
}
const mapState = state => {
    console.log(state)
    return ' i got here dude'
};

export default Creation;