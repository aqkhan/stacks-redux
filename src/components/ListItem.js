import React, { Component } from 'react';
import { CardSection } from "./common";
import {
    Text,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation
} from "react-native";
import * as actions from '../actions';
import { connect } from 'react-redux';

class ListItem extends Component {

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    addSelectionLocal(id) {
        this.props.selectLibrary(id);
    }

    renderDescription() {
        const { library, expanded } = this.props;
        if (expanded) {
            return(
                <CardSection>
                    <Text>{ library.description }</Text>
                </CardSection>
            );
        }
    }

    render() {
        const { id, title, description } = this.props.library;
        //console.log('Coming from list item', this.props);
        return(
            <TouchableWithoutFeedback onPress={ () => this.addSelectionLocal(id) }>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>{ title }</Text>
                    </CardSection>
                    { this.renderDescription() }
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = ( state, ownProps ) => {
    const expanded = state.selectedLibraryID === ownProps.library.id;
    return {
        expanded: expanded
    }
};

// We don't need mapState to props so we will pass null as first argument for connect function

export default connect(mapStateToProps, actions)(ListItem);