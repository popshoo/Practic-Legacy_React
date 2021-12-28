import React from 'react';

export class DoNothing extends React.Component {
    render() {
        const {name} = this.props;
        console.log('Rendering DoNothing');

        return (
            <p>Iam just a do-nothing component name {name}</p>
        );
    }
}