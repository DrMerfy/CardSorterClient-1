import {createAction, Dispatch, ThunkAction, UnknownAction} from '@reduxjs/toolkit';
import * as ActionStatus from 'actions/ActionStatus';
import * as studyActions from './studyAction';
import api from './api';
import StateSchema from "../reducers/StateSchema";

export const changeTitle = createAction<{ title: string }>('studyCreation/changeTitle');
export const changeDescription = createAction<{ description: string }>('studyCreation/changeDescription');
export const addCard = createAction<{ id: number }>('studyCreation/addCard');
export const addXCards = createAction<{ no: number }>('studyCreation/addXCards');
export const deleteCard = createAction<{ id: number }>('studyCreation/deleteCard');
export const changeCardName = createAction<{ id: number; name: string }>('studyCreation/changeCardName');
export const changeCardDescription = createAction<{
  id: number;
  description: string
}>('studyCreation/changeCardDescription');
export const changeThanksMessage = createAction<{ message: string }>('studyCreation/changeThanksMessage');
export const changeExternalSurveyLink = createAction<{ link: string }>('studyCreation/changeExternalSurveyLink');
export const toggleTitleError = createAction<{ status: boolean }>('studyCreation/toggleTitleError');
export const toggleDescriptionError = createAction<{ status: boolean }>('studyCreation/toggleDescriptionError');
export const toggleCardError = createAction<{ status: boolean }>('studyCreation/toggleCardError');
export const toggleCardDuplicate = createAction<{ status: boolean }>('studyCreation/toggleCardDuplicate');
export const toggleThanksError = createAction<{ status: boolean }>('studyCreation/toggleThanksError');

export interface StudyCreationResponse {
  id: string,
  title: string,
  abandonedNo: number,
  completedNo: number,
  editDate: Date,
  isLive: boolean,
  launchedDate: Date,
}

export const createStudy = createAction<{
  status: ActionStatus.ActionStatus;
  study?: StudyCreationResponse ;
  error: boolean
}>('studyCreation/createStudy');

export function sendStudy(study: object): ThunkAction<void, StateSchema, unknown, UnknownAction> {
  return function (dispatch: Dispatch, getState: () => StateSchema) {
    dispatch(createStudy({status: ActionStatus.IS_FETCHING, error: false}));
    fetch(api + '/studies_endpoint', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: getState().auth.token,
        'Access-Control-Allow-Credentials': 'true',
      },
      body: JSON.stringify(study),
    }).then((response) =>
      response.json().then((json) => {
        if (response.status === 401) {
          setTimeout(() => window.location.reload(), 1000);
          window.location.replace(json.location);
        } else {
          dispatch(studyActions.addStudy(json.study));
          dispatch(createStudy({status: ActionStatus.SUCCESS, study: json.study, error: false}));
        }
      })
    );
  };
}
