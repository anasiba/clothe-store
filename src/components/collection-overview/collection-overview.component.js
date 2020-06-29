import React from 'react'
import { createStructuredSelector } from 'reselect'

import CollectionPreview from '../collection-preview/collection-preview.component'
import { selectCollectionsFroPreview } from '../../redux/shop/shop.selector'
import { connect } from 'react-redux'

const CollectionOverview = ({ collections }) => (
    <div className='collections-overview'>
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }

    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsFroPreview
})

export default connect(mapStateToProps)(CollectionOverview)