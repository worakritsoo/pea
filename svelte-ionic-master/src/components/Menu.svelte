<ion-menu
  side="{side}"
  content-id="main"
  menu-id="mainmenu"
  class:menuhide="{hideMenu}"
>
  {#if menuItems.length > 0}
    <ion-header>
      <ion-toolbar translucent="true">
        <ion-avatar slot="start">
          <img alt="avatar" src="../assets/img/ionic/avatar.svg" />
        </ion-avatar>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        {#each menuItems as menuItem, i}
          <ion-item
            on:click="{() => {
              closeAndNavigate(menuItem.url);
            }}"
          >
            <ion-icon
              name="{menuItem.icon}"
              slot="start"
             
            ></ion-icon>
            <ion-label>{menuItem.label}</ion-label>
          </ion-item>
        {/each}
      
      </ion-list>
    </ion-content>
  {/if}
</ion-menu>

<style>
ion-item {
  cursor: pointer;
}
ion-avatar{
  --keyboard-offset: 0px; --overflow: auto; --offset-top: 76px; --offset-bottom: 1px; list-style-type: none; --border-width: 0px; --border-style: solid; --padding-top: 0px; --padding-bottom: 0px; --padding-end: 0px; --inner-padding-top: 0px; --inner-padding-bottom: 0px; --inner-padding-start: 0px; --inner-box-shadow: none; --show-full-highlight: 0; --show-inset-highlight: 0; --detail-icon-color: initial; --detail-icon-font-size: 20px; --detail-icon-opacity: 0.25; --color-activated: var(--color); --color-focused: var(--color); --color-hover: var(--color); --ripple-color: currentColor; -webkit-font-smoothing: antialiased; --min-height: 48px; --background: var(--ion-item-background, var(--ion-background-color, #fff)); --background-activated: transparent; --background-focused: currentColor; --background-hover: currentColor; --background-activated-opacity: 0; --background-focused-opacity: 0.12; --background-hover-opacity: 0.04; --transition: opacity 15ms linear, background-color 15ms linear; --padding-start: 16px; --color: var(--ion-item-color, var(--ion-text-color, #000)); --border-color: var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13)))); --inner-padding-end: 16px; --inner-border-width: 0 0 1px 0; --highlight-height: 2px; --highlight-color-focused: var(--ion-color-primary, #3880ff); --highlight-color-valid: var(--ion-color-success, #2dd36f); --highlight-color-invalid: var(--ion-color-danger, #eb445a); font-family: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; letter-spacing: inherit; text-indent: inherit; text-transform: inherit; text-align: inherit; white-space: inherit; color: inherit; border-radius: var(--border-radius); display: block; --border-radius: 50%; width: 40px; height: 40px; margin-top: 8px; margin-bottom: 8px; margin-right: unset; margin-inline-end: 16px; box-sizing: border-box; -webkit-tap-highlight-color: transparent; visibility: inherit;
}

.ion-menu{
  max-width: 10%!important;
}
</style>

<script lang="ts">
import { fromFetch } from "rxjs/fetch";
import { goto } from "@roxi/routify";
import { getIonicMenu } from "./../services/IonicControllers";

import { routes } from "./../routes/routes";

import { path } from "../services/routestore";

import firebase from "firebase/app";

let hideMenu = true; // a hack because the menu shows before the splash (in Chrome on Windows)
const defaultAnalytics = firebase.analytics();

export let side = "start";

const getRandomColor = () => {
  const items = [
    "secondary",
    "primary",
    "danger",
    "warning",
    "dark",
    "medium",
    "success",
    "tertiary",
  ];
  return items[Math.floor(Math.random() * items.length)];
};

const excludedPaths = [
  "Pane", // buggy component
  "AltDetails",
  "ModalExtra",
  "NavDetail",
  "NavList",
  "Games",
  "Music",
  "PopoverExtra",
];

// let's use the generated routes for making the menu items
// and skip a few ones for the menu
let menuItems: Array<{ url: string; label: string; icon: string }> = routes
  .filter((route) => route.path.includes("page"))
  .filter((route) => {
    let found = false;
    excludedPaths.forEach((exclude) => {
      found = found || route.path.includes(exclude);
    });
    return !found;
  })
  .map((route) => {
    if (route.name.includes("[tab]")) {
      route.name = "Tab";
    }
    return {
      url: route.path,
      label: route.name.replace("ionic/", ""),
      icon: "home",
    };
  })
  .sort(function (a, b) {
    var nameA = a.label.toUpperCase(); // ignore upper and lowercase
    var nameB = b.label.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });

// randomize the icons for the menu
// using RXJS for fun
let icons;
fromFetch("/assets/json/ionicons.json").subscribe(
  (response) => {
    response.json().then((json) => {
      icons = json.icons;
      menuItems.map((menuItem) => {
        //   menuItem.icon = "at";
        menuItem.icon = icons[Math.floor(Math.random() * icons.length)];
      });
      menuItems = [...menuItems];
    });
  },
  (error) => {
    console.error("Error HTTP", error);
  }
);

const closeAndNavigate = (url) => {
  console.log("Navigate url", url);

  defaultAnalytics.logEvent("page_view", { page_title: url });

  path.set(url);
  $goto(url);

  getIonicMenu("mainmenu")
    .close(true)
    .then(() => {});
};

const goToReview = () => {
  path.set("/RateMe");
  getIonicMenu("mainmenu")
    .close(true)
    .then(() => {});
};

const GITHUBclick = () => {
  defaultAnalytics.logEvent("page_view", { page_title: "GITHUB_go" });
};

const FORUMclick = () => {
  defaultAnalytics.logEvent("page_view", { page_title: "FORUM_go" });
};

// hack because of visibility of menu in Chrome/Windows
setTimeout(() => {
  hideMenu = false;
}, 1000);
</script>
