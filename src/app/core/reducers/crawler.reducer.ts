import {
  CrawlerActions
} from '../actions';
import { CrawlerResponse } from '../models/crawler-response.model';


export interface State {
  responses: CrawlerResponse[];
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
    case CrawlerActions.CrawlerActionTypes.CrawlURLDiscard:
      const ocurrenceIdx = state.responses.findIndex(response => action.payload.requestID ? response.requestID === action.payload.requestID : response.requestedUrl === action.payload.requestedUrl);
      clonedResponses = JSON.parse(JSON.stringify(state.responses));
      if (ocurrenceIdx >= 0) clonedResponses.splice(ocurrenceIdx, 1);
      return {
        ...state,
        responses: clonedResponses,
      };  
    default:
      return state;
  }
}

export const getCurrentRequests = (state: State) => state.responses;
