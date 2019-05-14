import React, { Component, Fragment } from 'react';
import ReduxToastr from 'react-redux-toastr';
import { Switch, Route } from 'react-router-dom';

import Popup from '../PopUp';
import { LeftSidebar, RightSidebar } from '../Sidebar';
import Content from './content';

import '../../styles/app.css';
import '../../styles/index.css';
import '../../styles/forms.css';
import '../../styles/popup.css';
import '../../styles/sidebar.css';

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

class App extends Component {
    render() {
        return (
            <Fragment>
                <main className='wrapper'>
                    <Switch>
                        <Route render={() => (
                            <Fragment>
                                <LeftSidebar />
                                <Content />
                                <RightSidebar />
                            </Fragment>
                        )} />
                    </Switch>
                </main>
                <Popup />
                <ReduxToastr
                    timeOut={4000}
                    newestOnTop={false}
                    preventDuplicates
                    position='top-right'
                    transitionIn='fadeIn'
                    transitionOut='fadeOut'
                    progressBar
                    closeOnToastrClick
                />
            </Fragment>
        );
    }
}

export default App;
