<svelte:head>
  <title>Ionic Companion - Discover</title>
</svelte:head>
<ion-header>
  <ion-toolbar color="primary">
    <ion-searchbar
      placeholder="Filter Search"
      inputmode="search"
      type="search"
      on:input="{handler}"
      showCancelButton="always"
    ></ion-searchbar>

  </ion-toolbar>
</ion-header>
<ion-content fullscreen>
  {#await promise}
    <p>...waiting</p>
  {:then users}
    {#each users as user}
      <!-- svelte-ignore missing-declaration -->
      <!-- {@debug user} -->
      <Profile {...user} />
    {/each}
  {:catch error}
    <p style="color: red">{error.data}</p>
  {/await}
</ion-content>

<script>
  import Profile from "../../components/Profile.svelte";
  import Fuse from "fuse.js/";
  import * as user from "./users.json";

  let promise = getRandomUser();
  async function getRandomUser() {
    const res = await fetch("./users.json");
    const data = await res.json();

    if (res.ok) {
      return data.results;
    } else {
      throw new Error(data);
    }
  }

  async function handler(event) {
    const pattern = event.target.value;
    log(user);
  }
</script>
