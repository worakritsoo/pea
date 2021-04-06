<ion-header translucent="Name">
  <ion-toolbar>
    <ion-buttons slot="Name">
      <ion-menu-button></ion-menu-button>
    </ion-buttons>
    <ion-title>Login</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content fullscreen class="ion-padding">

  <ion-item>
    <ion-label color="primary" position="floating">Email</ion-label>
    <ion-input required type="email" name="email"></ion-input>
  </ion-item>
  <ion-item>
    <ion-label color="primary" position="floating">Password</ion-label>
    <ion-input required type="password" name="password"></ion-input>
  </ion-item>
  <ion-button type="submit" expand="block">Log in</ion-button>
  <ion-button type="button" expand="block" color="light">
    Not yet a member? Sign up!
  </ion-button>

  <ion-button type="button" expand="block" color="tertiary">
    <ion-icon name="logo-google" slot="start"></ion-icon>
    Sign in with Google
  </ion-button>
  <ion-button type="button" expand="block" color="tertiary">
    <ion-icon name="logo-apple" slot="start"></ion-icon>
    Sign in with Apple
  </ion-button>
</ion-content>

<style>
  /* your styles go here */
  .grid {
    display: grid;
    place-items: center;
  }
</style>

<script>
  import { expand } from "rxjs/operators";
  let email = "";
  let first = "";
  let password = "";
</script>
