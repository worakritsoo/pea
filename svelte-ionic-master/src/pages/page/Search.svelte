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
      <!-- svelte-ignore missing-declaration -->
      <Profile {user} />
    {/each}
  {:catch error}
    <p style="color: red">{error.data}</p>
  {/await}
</ion-content>

<script>
  import Profile from "../../components/Profile.svelte";
  import Fuse from "fuse.js/";
  const list =  getRandomUser();
  let promise = getRandomUser();

  async function getRandomUser() {
    const res = await fetch(`https://randomuser.me/api/?results=50`);
    const data = await res.json();
    if (res.ok) {
      return data.results;
    } else {
      throw new Error(data);
    }
  }

  async function handler(event) {
    const res = await getRandomUser();
    const list = res;
    const options = {
      includeScore: true,
      // equivalent to `keys: [['author', 'tags', 'value']]`
      keys: ['value']
    };
    const fuse = new Fuse(list, options);
    console.log(fuse,list);
    const result = fuse.search(`${event.target.value}`);

    return result
  }
</script>
