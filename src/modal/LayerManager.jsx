import React from 'react'

export default modals => WrappedComponent => class LayerManager extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
    this.layers = {}
  }

  componentDidMount() {
    modals.forEach(ele => {
      const { key, component } = ele;
      this.layers[key] = component
    })
  }

  render() {
    return <WrappedComponent
      layers={this.layers}
    />
  }
}