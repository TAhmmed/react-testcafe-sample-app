import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardText} from 'material-ui/Card';

/* eslint-disable react/prefer-stateless-function */
class Member extends React.PureComponent {

    static propTypes = {
        name: PropTypes.string,
    };

    render () {
        return (
            <Card>
                <CardText>
                    <span>Member {this.props.name}</span>
                </CardText>
            </Card>
        );
    }
}

export default Member;