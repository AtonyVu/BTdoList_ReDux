import React, { Component } from "react";
import ItemTask from "./item-task";
import { connect } from 'react-redux'
class ListTask extends Component {
  renderTable = () => {



  }
  renderUncomplete = () => {
    const { dataList } = this.props;
    return dataList.map((item) => {
      if (item.status === 'uncomple') {
        return (
          <ItemTask key={item.id} dataTask={item} />
        )

      }
    })
  }
  rendercomplete = () => {
    const { dataList } = this.props;
    return dataList.map((item) => {
      if (item.status === 'comple') {
        return (
          <ItemTask dataTask={item} key={item.id} />
        )

      }
    })
  }
  render() {
    return (
      <>
        <ul className="todo" id="todo">
          {this.renderUncomplete()}
        </ul>
        <br />
        <ul className="todo" id="completed">
          {this.rendercomplete()}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataList: state.taskReducer.dataList
  }
}

export default connect(mapStateToProps, null)(ListTask)
