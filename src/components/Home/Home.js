import React, { Component } from 'react'
import Header from '../../User';
import Nvbar from '../../Navbar';
import Charts from '../../Chart';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Nvbar />
                <Charts />
            </div>
        )
    }
}
