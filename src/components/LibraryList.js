import React, { Component } from 'react';
import { View } from 'react-native';
// When child component has to ask data from provider, we will use connect function
import { connect } from 'react-redux';

class LibraryListComp extends Component {
    render() {
        console.log('Props of component', this.props);
        return(
            <View>

            </View>
        );
    }
}

// Converts current state to props that can be used by component in scope
const mapStateToProps = state => {
    return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryListComp);