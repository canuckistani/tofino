/* @flow */

/*
 Copyright 2016 Mozilla

 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software distributed
 under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 CONDITIONS OF ANY KIND, either express or implied. See the License for the
 specific language governing permissions and limitations under the License.
 */

import Immutable from 'immutable';

import electron from 'electron';

import * as profileActionTypes from './../constants/profile-action-types';

export type ProfileAction = { type: string, payload: Object };

/**
 * The set of bookmarks is different.
 */
export function bookmarkSet(bookmarks: Immutable.Set<string>): ProfileAction {
  return {
    type: profileActionTypes.DID_CHANGE_BOOKMARKS,
    payload: bookmarks,
  };
}

/**
 * The list of Top Sites is different.
 */
export function topSites(topSitesList: Immutable.List<string>): ProfileAction {
  return {
    type: profileActionTypes.DID_SET_TOP_SITES_LIST,
    payload: topSitesList,
  };
}

export function completionsFor(text: string,
                               completionList: Immutable.List<string>): ProfileAction {
  return {
    type: profileActionTypes.DID_SET_COMPLETION_LIST_FOR,
    payload: {
      text,
      completionList,
    },
  };
}

export function createBrowserWindow(browserWindow: electron.BrowserWindow): ProfileAction {
  return {
    type: profileActionTypes.DID_CREATE_BROWSER_WINDOW,
    payload: {
      browserWindow,
    },
  };
}

export function closeBrowserWindow(browserWindow: electron.BrowserWindow): ProfileAction {
  return {
    type: profileActionTypes.DID_CLOSE_BROWSER_WINDOW,
    payload: {
      browserWindow,
    },
  };
}
