import React from 'react';
import PropTypes from 'prop-types';

class AllListItem extends React.Component {
    componentWillUnmount(){
        console.log('A All List Item was removed!')
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log(`Well... should ${this.props.todo.text} update?`)
        
        const {todo: {text: newText, isCompleted: newIsCompleted} } = nextProps;
        if (this.props.todo.text === newText && this.props.todo.isCompleted === newIsCompleted) {
            console.log(`Not!, ${this.props.todo.text} Should not Update`);
            return false;
        } else {
            console.log(`Yes! ${this.props.todo.text} Should Update`)
            return true;
        }
    }

    render() {
        console.log('AllListItem Rendering')
        const {todo, onComplete, onDelete} = this.props;
        const {text, isCompleted} = todo;

        return (
            <div>
                <h3>{text}</h3>
                {isCompleted && <p>Completed!</p>}
                {!isCompleted && <button onClick={onComplete}>Mark As Completed</button>}
                {isCompleted && <button onClick={onDelete}>Delete</button>}
            </div>
        );
    }
}

AllListItem.propTypes = {
    todo: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            text: PropTypes.string,
            isCompleted: PropTypes.bool,
        }),
    ),
        onComplete: PropTypes.func,
        onDelete: PropTypes.func,
}

export {AllListItem};