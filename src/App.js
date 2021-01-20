import React from 'react'
import ModalA from './modal_child/child'
import LayerManager from './modal/LayerManager'
import './App.css'
import 'antd/dist/antd.css'

const modals = [
  {
    component: ModalA,
    key: 'modal_a'
  }
]

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const { handleOpenModal } = this.props
    return <div className="App">
      <button onClick={handleOpenModal}>弹窗A</button>
      <button>弹窗B</button>
    </div>
  }
}

export default LayerManager(modals)(App)
