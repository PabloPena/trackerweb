import {
  CrawlerActions
} from '../actions';
import { CrawlerResponseApi } from '../models/crawlerResponseApi.model';


export interface State {
  responses: CrawlerResponseApi[];
}

const initialState: State = {
  responses: []
};

export function reducer(
  state: State = initialState,
  action: CrawlerActions.CrawlerActionsUnion
): State {
  let clonedResponses;
  switch (action.type) {
    case CrawlerActions.CrawlerActionTypes.CrawlURLStart:
      clonedResponses = JSON.parse(JSON.stringify(state.responses));
      clonedResponses.push(action.payload);
      return {
        ...state,
        responses: clonedResponses,
      };  
    case CrawlerActions.CrawlerActionTypes.CrawlURLUpdate:
      if (action.payload.requestID){
        clonedResponses = JSON.parse(JSON.stringify(state.responses));
        clonedResponses.splice(clonedResponses.findIndex(response => response.requestID === action.payload.requestID), 1, action.payload)
        return {
          ...state,
          responses: clonedResponses,
        }; 
      } else {
        return state
      }
    default:
      return state;
  }
}

export const getCurrentRequests = (state: State) => state.responses;
