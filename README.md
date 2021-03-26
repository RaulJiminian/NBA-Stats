# NBA STATS

- [Overview](#overview)
- [Useful Features](#useful-features)
  - [Interactivity](#interactivity)
  - [Data Visualization](#data-visualization)
- [Libraries and Dependencies](#libraries-and-dependencies)
- [Component Hierarchy](#component-hierarchy)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**NBA STATS** is a web application that consumes basketball data, relevant to the NBA, and displays it via an easy-to-use UI that incorporates data visualization.

<br>

## Deployed Site

Please visit NBA Stats' deployed site:

- <a href="https://nba-stat.netlify.app" target="_blank" rel="noopener">NBA STATS</a>

##### * Please note, due to a cross-origin reference error, a CORS extension is necessary to view the site

<br>

## Useful Features

A variety of features were included in this web app that were intended to make navigation easier for a user. A few of those features include:

- ### Interactivity

  - _A search bar on the main page that filters teams based on input; this includes local storage which prevents loss of search results on refresh_
  - _NAV bar that allows you to return to main page from anywhere in the app. The NAV bar retracts when scrolling through the site_
  - _List of team banners on main page that, when clicked, sends you to a detailed team page_
  - _The team roster section, on the detailed team page, renders an interactive table that allows you to filter table results based on a variety of statistics (eg, points, assists, etc.)_
  - _The team roster table allows you to click on any of the highlighted players; this will take you to a detailed player page_
  - _Ability to click on the team name, while on the detailed player page, in order to return to the detailed team page_
  - _Ability to scroll through a variety of data charts in the detailed player page_
  - _Completely responsive design for all screen sizes_

- ### Data Visualization

  - _Team roster, on the detailed team page, in table format with the ability to filter based on stats_
  - _Bar charts, on the detailed player page, that show a player's stats over time for a variety of stats_

  <br>

## Libraries and Dependencies

|   Library    | Description                                                                                     |
| :----------: | :---------------------------------------------------------------------------------------------- |
|    React     | _an open-source, front end, JavaScript library for building user interfaces or UI components_   |
| React Router | _a collection of navigational components that serves as the standard routing library for React_ |
|    Axios     | _a Javascript library used to make http requests from node.js_                                  |
| Material UI  | _a component library that allows for easy styling using pre-built styled components_            |
|      D3      | _a JavaScript library for producing dynamic, interactive data visualizations in web browsers_   |
|      SportRadar API      | _a application programming interface (API) that provides sports data_   |

<br>

## Component Hierarchy

```structure

src
|__ App.js/
|__ screens/
       |__Home.jsx
       |__PlayerPage.jsx
       |__TeamPage.jsx
|__ components/
    |__shared/
       |__Theme.jsx
    |__BarGraphAssists.jsx
    |__BarGraphBlocks.jsx
    |__BarGraphPoints.jsx
    |__BarGraphRebounds.jsx
    |__BarGraphSteals.jsx
    |__BarGraphTurnovers.jsx
    |__Footer.jsx
    |__Layout.jsx
    |__MiniDraftTable.jsx
    |__MiniRankTable.jsx
    |__MiniSeasonTable.jsx
    |__NAV.jsx
    |__PlayerDraftCard.jsx
    |__PlayerImageCard.jsx
    |__PlayerProfileCard.jsx
    |__PlayerScrollTab.jsx
    |__SearchInput.jsx
    |__SeasonStatsCard.jsx
    |__TeamCard.jsx
    |__TeamCardFull.jsx
    |__TeamRoster.jsx
    |__VenueCard.jsx
|__ utilities/
    |__TeamContext.js
    |__teamInfo.js


```

<br>

---

## Code Issues & Resolutions

The vast majority of issues revolved around limitations set by the 3rd party API consumed. Although it is the best I have come across, in regard to the free tier version, here are some of the complications:

- A CORS issue I was unable to get around without a chrome extension (ie, redirecting via heroku or attaching headers did not function)
- The API had limited information available and did not include advanced stats like "Direct Offensive Contribution (DOC)". Only basic stats were available
- The API limited calls to one request at a time; this made things difficult when data from different endpoints were necessary for a single page render
