import React from 'react';
import PropTypes from 'prop-types';
import { AllListItem } from './AllListItem';
import styles from './AllList.Module.css'

class AllList extends React.PureComponent {
    componentDidUpdate(prevProps, prevState) {

        if (this.props.all.length > prevProps.all.length) {
            alert('Successfully added new TODO!');
        }
    }

    render() {
        console.log('Redering AllList');
        const {all, onCompleteAll, onDeleteAll} = this.props;
        return (
            <div className={styles.listContainer}>
                <h3>Todos:</h3>
                {all.map(todo => (
                    <AllListItem 
                    key={todo.id} 
                    todo={todo} 
                    onComplete={() => onCompleteAll(todo.id)}
                    onDelete={() => onDeleteAll(todo.id)} />
                ))}
            </div>
        );
    }
}



AllList.propTypes = {
    all: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            text: PropTypes.string,
            isCompleted: PropTypes.bool,
        }),
    ),
    onCompleteAll: PropTypes.func,
    onDeleteAll: PropTypes.func,
}

AllList.defaultProps = {
    all: [],
    onCompleteAll: () => {},
    onDeleteAll: () => {},
}

export {AllList};