<svelte:head>
  <title>Ionic Companion - Discover</title>
</svelte:head>
   <ion-header translucent>
      <ion-toolbar>
        <ion-searchbar></ion-searchbar>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen>
      <ion-list>
       {#await promise then items}
         <!-- promise was fulfilled -->
         {#if items}
            <!-- content here -->
            {#each items as item,i}
               <!-- content here -->
                {item}
            {/each}
         {/if}
       {/await}
      </ion-list>
    </ion-content>

<script>
  
  import User from "./_User.svelte";
  import Fuse from "fuse.js/";
  let promise = getRandomUser();

  async function getRandomUser() {
    const res = await fetch(`https://randomuser.me/api/?results=50`);
    const data = await res.json();
    if (res.ok) return data.results;
    else {
      return error;
    }
  }

  async function handler(event) {
    const res = await fetch(`https://randomuser.me/api/?results=50`);
    const list = await res.json();

    const options = {
      includeScore: true,
      useExtendedSearch: true,
      // equivalent to `keys: [['author', 'tags', 'value']]`
    };
    const fuse = new Fuse(list, options);

    const result = fuse.search("s");
    console.log(result);
  }

</script>
