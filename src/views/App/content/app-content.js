import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../home';
import Header from '../header';
import Footer from '../footer';
import PageNotFound from '../../Errors';

import ImportComponent from '../../Import';

class Content extends Component {
    render() {
        return (
            <main className='content'>
                <Header />
                <div className='app-content'>
                    {<Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/import' component={ImportComponent} />
                        <Route component={PageNotFound} />
                    </Switch>}
                </div>
                <Footer />
            </main>
        );
    }
}

export default Content;
