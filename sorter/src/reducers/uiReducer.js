import * as uiAction from '../actions/uiAction';

/**
 *
 * @param {BoardState} state
 * @param {UIAction} action
 * @return {BoardState}
 */
export default function ui(state={}, action) {
  switch (action.type) {
    case uiAction.TOOGLE_ON_BOARDING: {
      return Object.assign({}, state, {
        'showOnBoarding': action.payload.showOnBoarding,
      });
    }
    case uiAction.SHOW_TITLE_BOX: {
      return Object.assign({}, state, {
        'changeTitle': action.payload.categoryID,
      });
    }
    case uiAction.HIDE_ALL_BOXES: {
      return Object.assign({}, state, {
        'changeTitle': undefined,
      });
    }
    case uiAction.SAVE_STUDY_ID: {
      return Object.assign({}, state, {
        'studyID': action.payload.studyID,
      });
    }
    case uiAction.SENDING_SORT: {
      return Object.assign({}, state, {
        'sendingSort': action.payload.status,
      });
    }
    case uiAction.SAVE_THANKS_MESSAGE: {
      return Object.assign({}, state, {
        'thanksMessage': action.payload.message,
      });
    }
    case uiAction.RENDER_THANKS_MESSAGE: {
      return Object.assign({}, state, {
        'renderThanks': true,
      });
    }
    case uiAction.TOGGLE_POPUP: {
      const newState = Object.assign({}, state);
      newState.popup.show = action.payload.flag;
      newState.popup.title = action.payload.title;

      return newState;
    }
    case uiAction.POPUP_CHANGE_CONTENT: {
      const newState = Object.assign({}, state);
      newState.popup.content = action.payload.content;

      return newState;
    }
    case uiAction.START_SORT: {
      return Object.assign({}, state, {
        'timeStarted': Date.now(),
      });
    }
    case uiAction.END_SORT: {
      return Object.assign({}, state, {
        'timeEnded': Date.now(),
      });
    }
    default: {
      return state;
    }
  }
}
