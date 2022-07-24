import React from "react"

import {connect} from 'react-redux'
import { getNewItems } from "../../redux/selectors/news-selector"

import NewsView from './NewsView'

let mapStateToProps = (state) => {
    return {
        items: getNewItems(state)
    }
}

export default connect(mapStateToProps, {})(NewsView)