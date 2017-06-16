import { deliveryAccessToken, galleryTypeId, spaceId } from 'config/contentful'
import { makeReducer } from './util'

export const app = makeReducer(function (action) {
  switch (action.type) {
    case 'LOADED_CLIENT':
      return {authState: action.authState}
    default:
      return {}
  }
}, { authState: 'loading', deliveryAccessToken, galleryTypeId, spaceId })
