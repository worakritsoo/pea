<script>

  import { onMount } from "svelte";

  let users = [];

  onMount(async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
     users = await res.json();
     console.log(users);
  });
</script>
<svelte:head>
  <title>Ionic Companion - Setting</title>
</svelte:head>
<ion-header translucent="true">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button></ion-menu-button>
      </ion-buttons>
      <ion-title>UserList</ion-title>
    </ion-toolbar>
  </ion-header>
<ion-content fullscreen>
<div>
    <h1>Users List</h1>
    {#each users as user}
      <ul>
         <li>{user.id} - {user.name}</li>
         <li>{user.email}</li>
     </ul>
   {:else}
     <!-- this block renders when users.length === 0 -->
      <p>loading...</p>
   {/each}
</div>

</ion-content>