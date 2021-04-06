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
    ></ion-searchbar>

  </ion-toolbar>
</ion-header>
<ion-content fullscreen>
  {#await promise}
    <p>...waiting</p>
  {:then users}
    {#each users as user}
      <Profile {...user} />
    {/each}
  {:catch error}
    <p style="color: red">{error.data}</p>
  {/await}
</ion-content>

<script>
  import Profile from "../../components/Profile.svelte";
  import Fuse from "fuse.js/";
  let promise = getRandomUser();

  async function getRandomUser() {
    const res = await fetch(`https://randomuser.me/api/?results=50`);
    const data = await res.json();
   
  }

  async function handler(event) {
    const res = await fetch(`https://randomuser.me/api/?results=50`);
    const list = await res.json()
    
    const options = {
      includeScore: true,
      useExtendedSearch: true,
      // equivalent to `keys: [['author', 'tags', 'value']]`
    };
   const fuse = new Fuse(list, options)

    const result = fuse.search('s')
    console.log(result);
  }
  getRandomUser();
</script>
