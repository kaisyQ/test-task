import React from "react"

import {connect} from 'react-redux'

import NewsView from './NewsView'

let mapStateToProps = (state) => {
    return {
        items: state.news.items
    }
}

export default connect(mapStateToProps, {})(NewsView)