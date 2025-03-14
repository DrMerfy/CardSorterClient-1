"use client"

import React, {ChangeEvent, useEffect} from 'react';

import L from 'localization/LocalizedText';
import {useDispatch, useSelector} from "react-redux";
import StateSchema from "reducers/StateSchema";
import * as studyCreationAction from "actions/studyCreationAction";
import * as ActionStatus from 'actions/ActionStatus';
import {Dispatch} from "@reduxjs/toolkit";
import {useRouter} from "next/navigation";
import {createStudy} from "actions/studyCreationAction";

export default function Page() {
  const router = useRouter();

  // State
  const message = useSelector((state: StateSchema) => (state.studyCreation.thanksMessage));
  const studyTitle = useSelector((state: StateSchema) => state.studyCreation.title);
  const studyDescription = useSelector((state: StateSchema) => state.studyCreation.description);
  const studyCards = useSelector((state: StateSchema) => state.studyCreation.cards);
  const studyMessage = useSelector((state: StateSchema) => state.studyCreation.thanksMessage);
  const link = useSelector((state: StateSchema) => state.studyCreation.externalSurveyLink);
  const errorMessage = useSelector((state: StateSchema) =>
    (state.studyCreation.errorMessage));
  const studySendingStatus = useSelector((state: StateSchema) =>
    (state.studyCreation.ui.studySendingStatus));

  // Dispatch
  const dispatch: Dispatch<any> = useDispatch();

  const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(studyCreationAction.toggleThanksError({status: false})); // Clear errors
    dispatch(studyCreationAction.changeThanksMessage({message: e.target.value}));
  }

  const onLink = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(studyCreationAction.changeExternalSurveyLink({link: e.target.value}));
  }

  const onNext = () => {

    // Check for errors
    if (!studyMessage || studyMessage.length === 0) {
      dispatch(studyCreationAction.toggleThanksError({status: true}));
      setTimeout(() => studyCreationAction.toggleThanksError({status: false}), 5000);
      return;
    }

    dispatch(studyCreationAction.sendStudy({
      title: studyTitle || "",
      description: studyDescription || "",
      cards: studyCards,
      message: studyMessage,
      link: link,
    }));
  }

  const onPrev = () => {
    router.push("/create/add-cards");
  }

  useEffect(() => {
    if(studySendingStatus === ActionStatus.SUCCESS) {
      // Clear fetching status from local storage
      dispatch(createStudy({status: undefined, error: false}));
      // Redirect to success page
      router.push("/create/success");
    }
  }, [studySendingStatus])

  useEffect(() => {
    // Redirect to previous step if items not filled
    if (Object.values(studyCards).length === 0 && studySendingStatus !== ActionStatus.SUCCESS && studySendingStatus !== ActionStatus.IS_FETCHING) {
      router.push("/create/add-cards");
    }
  }, [router, studyCards]);


  return (
    <div className="study-creation-card">
      <h1>{L?.text?.createStudy}</h1>
      <h2>{L?.text?.message}</h2>

      <form>
        <div className="error-holder">
          <textarea className='userForm' cols={30} rows={5} onChange={(e) => onLink(e)}
            placeholder={L?.text?.linkProvide}>
          </textarea>
          <textarea className="thanks message" cols={30} rows={10}
            onChange={(e) => onMessageChange(e)}
            placeholder={L?.text?.thanksMessage}
            defaultValue={message}>
          </textarea>
          {
            errorMessage &&
            <div className="error-message"><p>{L?.text?.fillMeOut}</p></div>
          }
        </div>
      </form>

      <div className="bottom-container">

        <div className="btn-container">
          <button className="prev" onClick={onPrev} disabled={studySendingStatus === ActionStatus.IS_FETCHING}>
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button className="create" onClick={onNext}  disabled={studySendingStatus === ActionStatus.IS_FETCHING}>
            {
              studySendingStatus === ActionStatus.IS_FETCHING &&
                <span>{L?.text?.creatingStudy}</span>
            }
            {
              studySendingStatus !== ActionStatus.IS_FETCHING &&
                L?.text?.create
            }
          </button>
        </div>
        <div className="page-no-container">
          <p>3</p>
          <p>{L?.text?.of}</p>
          <p>3</p>
        </div>
      </div>
    </div>
  );
}