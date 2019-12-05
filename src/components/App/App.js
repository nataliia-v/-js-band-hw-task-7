import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import ModalContext from '../../contexts/ModalContext';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Todos from '../Todos/Todos';
import ModalRoot from '../ModalRoot/ModalRoot';

import styles from './App.module.scss';

const internName = 'Nataliia Verbenska';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { activeModal: null };
  }

  openModal = modalConfig => {
    this.setState({
      activeModal: modalConfig
    });
  };

  closeModal = () => {
    this.setState({
      activeModal: null
    });
  };

  render() {
    const { activeModal } = this.state;

    return (
      <ModalContext.Provider
        value={{
          activeModal,
          openModal: this.openModal,
          closeModal: this.closeModal
        }}
      >
        <div className={styles.app}>
          <Header />
          <HashRouter>
            <div className={styles.mainContent}>
              <Switch>
                <Route path="/todos" component={Todos} />
                <Redirect from="/" to="/todos" exact />
                <Route path="*">Oops..not found</Route>
              </Switch>
              <ModalRoot
                activeModal={activeModal}
                closeModal={this.closeModal}
              />
            </div>
          </HashRouter>
          <Footer internName={internName} />
        </div>
      </ModalContext.Provider>
    );
  }
}

export default App;
