import React from 'react';
import {v4 as uuid} from 'uuid';
import PropTypes from 'prop-types';



class NewAllForm extends React.Component {
    state = {newAllText: ''};

    render() {
        const {onAddAll} = this.props;
        const {newAllText} = this.state;
    
        return (
            <div>
                <h3>Add New All</h3>
                <input 
                placeholder="i.e Buy Groceries" 
                value={this.state.newAllText}
                onChange={e => this.setState({newAllText: e.target.value})} />
                <button onClick={() => { 
                    onAddAll({
                        id: uuid(),
                        text: newAllText,
                        isComplete: false,
                    });
                    this.setState({newAllText: ''});
                }}>Add</button>
            </div>
        );
    }
}



NewAllForm.propTypes = {
    onAddAll: PropTypes.func,
};

NewAllForm.defaultProps = {
    onAddAll: () => {},
}

export {NewAllForm};





// export class NewAllForm extends React.Component {
//     state = {newAllText: ''};

//     render() {
//         const {onAddAll} = this.props;
//         const {newAllText} = this.state;
    
//         return (
//             <div>
//                 <h3>Add New All</h3>
//                 <input 
//                 placeholder="i.e Buy Groceries" 
//                 value={this.state.newAllText}
//                 onChange={e => this.setState({newAllText: e.target.value})} />
//                 <button onClick={() => 
//                     onAddAll(newAllText)}>Add</button>
//             </div>
//         );
//     }
// }