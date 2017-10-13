import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardText} from 'material-ui/Card';
import CardWrapper from './CardWrapper';

/* eslint-disable react/prefer-stateless-function */
class Member extends React.PureComponent {

    static propTypes = {
        name: PropTypes.string,
    };

    render () {
        return (
            <CardWrapper>
                <Card>
                    <CardText>
                        <div>{this.props.name}</div>
                    </CardText>
                </Card>
            </CardWrapper>
        );
    }
}

export default Member;