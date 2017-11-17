import React, { Component } from 'react';
import { View, ListView } from 'react-native';
// When child component has to ask data from provider, we will use connect function
import { connect } from 'react-redux';
import ListItem from  './ListItem'

class LibraryList extends Component {

    componentWillMount() {
        // Have to tell component to get data for ListView
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    // Helper method to render a row
    renderRow(library) {
        return <ListItem library={ library }/>;
    }

    render() {
        return(
            // We've to specifically tell the ListView the data source and how to render a row
            <ListView
                dataSource = { this.dataSource }
                renderRow = { this.renderRow }
            />
        );
    }
}

// Converts current state to props that can be used by component in scope
const mapStateToProps = state => {
    return {
        // libraries could be anything it's just a key
        libraries: state.libraries
    };
};

export default connect(mapStateToProps)(LibraryList);