<ion-card class="act-card" _value="act-card">
  <ion-card-header>
    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
    <ion-card-title>{title}</ion-card-title>
  </ion-card-header>
  <ion-card-content>
    <ion-col>
      <ion-button fill="clear" on:click={toggle}  active=true>
        <ion-icon slot="icon-only" ios="heart-outline" md="heart-sharp-outline"></ion-icon>
      </ion-button>
      <ion-button fill="clear">
        <ion-icon slot="icon-only" ios="share-outline" md="share-sharp-outline"></ion-icon>
      </ion-button>
      <ion-chip>
        <ion-avatar>
          <img
            alt="avatar"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjYzVkYmZmIiBkPSJNMCAwaDUxMnY1MTJIMHoiLz48cGF0aCBkPSJNMjU2IDMwNGM2MS42IDAgMTEyLTUwLjQgMTEyLTExMlMzMTcuNiA4MCAyNTYgODBzLTExMiA1MC40LTExMiAxMTIgNTAuNCAxMTIgMTEyIDExMnptMCA0MGMtNzQuMiAwLTIyNCAzNy44LTIyNCAxMTJ2NTZoNDQ4di01NmMwLTc0LjItMTQ5LjgtMTEyLTIyNC0xMTJ6IiBmaWxsPSIjODJhZWZmIi8+PC9zdmc+"
          />
        </ion-avatar>
        <ion-label>Avatar</ion-label>
      </ion-chip>
    </ion-col>
  </ion-card-content>
</ion-card>

<script>
export let title = "Card Title";
export let content = "Content form Card.svetle";
export let link = "appLink";
export let website = "webHosting";
export let rating = 9;
export let like = false

	function toggle() {
		button.toggle = !button.toggle;
	}

  const handleClick = () => {
  console.log("User Click!");
};
</script>
<style>
  :active{
    color:aquamarine
  }
</style>