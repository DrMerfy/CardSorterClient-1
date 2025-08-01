"use client"

import {useEffect} from "react";
import {useDispatch} from "react-redux";
import * as sortingBoardState from "actions/sorting/sortingBoardAction";
import * as uiAction from "actions/sorting/uiAction";

export default function LoadSortData({id}: {id: string}) {

  // Dispatch
  const dispatch = useDispatch<any>();// Dispatch

  useEffect(() => {
    // Invalidate previous state if it was saved more than 24 hours ago
    const dateMinus24hours = Date.now() - 24 * 60 * 60 * 1000;
    const latestSortingSave = localStorage.getItem("latestSortingSave");
    if (!latestSortingSave) {
      dispatch(uiAction.setTimeStarted(new Date()));
      dispatch(uiAction.fetchStudyForSorting({studyID: id, preloaded: false}));
      return;
    }

    if (Date.parse(latestSortingSave) < dateMinus24hours) {
      dispatch(uiAction.setTimeStarted(new Date())); //Currently timer resets when the user closes an unfinished cardsort. We can find a way to calculate total time
      dispatch(uiAction.fetchStudyForSorting({studyID: id, preloaded: false}));
      return;
    }

    const sortingBoard = localStorage.getItem('sortingBoard');
    const sortingUI = localStorage.getItem('sortingUi');

    if (!sortingUI || !sortingBoard) {
      dispatch(uiAction.setTimeStarted(new Date()));
      dispatch(uiAction.fetchStudyForSorting({studyID: id, preloaded: false}));
      return;
    }

    const sortingBoardPreloaded = JSON.parse(sortingBoard);
    const sortingUIPreloaded = JSON.parse(sortingUI);

    // Don't preload if the id in the url doesn't match the saved it
    if (!id || id !== sortingUIPreloaded.studyID) {
      dispatch(uiAction.setTimeStarted(new Date()));
      dispatch(uiAction.fetchStudyForSorting({studyID: id, preloaded: false}));
      return;
    }

    // Don't preload if the user didn't start the sort or if they started it more than 24 hours ago
    if (!sortingUIPreloaded.timeStarted || Date.parse(sortingUIPreloaded.timeStarted) < dateMinus24hours) {
      dispatch(uiAction.setTimeStarted(new Date()));
      dispatch(uiAction.fetchStudyForSorting({studyID: id, preloaded: false}));
      return;
    }

    dispatch(uiAction.fetchStudyForSorting({studyID: id, preloaded: true}));

    dispatch(sortingBoardState.loadSavedState({
      categories: sortingBoardPreloaded.categories,
      unsortedCards: sortingBoardPreloaded.unsortedCards,
    }));

    dispatch(uiAction.loadSavedState({
      showOnBoarding: sortingUIPreloaded.showOnboarding,
      timeStarted: new Date(sortingUIPreloaded.timeStarted), // TODO: Calculate only active time
      studyID: sortingUIPreloaded.studyID,
      sortType: sortingUIPreloaded.sortType,
      userComment: sortingUIPreloaded.userComment,
    }));
  }, [id]);

  return <></>;
}