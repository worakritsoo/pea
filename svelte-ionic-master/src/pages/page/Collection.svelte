 <script>
    

 </script>
 
 <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Card</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true}>
        <ion-card class="action-card">
          <img class="header-img" alt="card-top-img" src="/assets/card-top-img.png" />
          <ion-card-header>
            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            <ion-card-title>Card Title</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Here's a small text description for the card content. Nothing more, nothing less.
            <ion-grid>
              <ion-row>
                <ion-col>
                  <ion-button size="small">Action</ion-button>
                </ion-col>
                <ion-col>
                  <ion-button fill="clear">
                    <ion-icon name="heart-outline"  active="true"></ion-icon>
                  </ion-button>
                  <ion-button fill="clear">
                    <ion-icon name="bookmark" ></ion-icon>
                  </ion-button>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card-content>
        </ion-card>

        <ion-card class="apps-card">
          <ion-card-header>
            <ion-card-subtitle>Your Daily List</ion-card-subtitle>
            <ion-card-title>Ionic Apps We Think You'll Love.</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-list>
              <ion-item>
                <ion-thumbnail slot="start">
                  <img  alt="logo-sworkit" src="/assets/logo-sworkit.png"/>
                </ion-thumbnail>
                <ion-label>
                  <h3>Sworkit</h3>
                  <p>The number one fitness app</p>
                </ion-label>
              </ion-item>
              <ion-item>
                <ion-thumbnail slot="start">
                  <img alt="logo-untappd" src="/assets/logo-untappd.png"/>
                </ion-thumbnail>
                <ion-label>
                  <h3>Untappd</h3>
                  <p>Discover and share beer</p>
                </ion-label>
              </ion-item>
              <ion-item>
                <ion-thumbnail slot="start">
                  <img alt="logo-shipt" src="/assets/logo-shipt.png"/>
                </ion-thumbnail>
                <ion-label>
                  <h3>Shipt</h3>
                  <p>Bring the store to your door</p>
                </ion-label>
              </ion-item>
              <ion-item lines="none">
                <ion-thumbnail slot="start">
                  <img alt="logo-amtrak" src="/assets/logo-amtrak.png"/>
                </ion-thumbnail>
                <ion-label>
                  <h3>Amtrak</h3>
                  <p>Book a trip today</p>
                </ion-label>
              </ion-item>
            </ion-list>
          </ion-card-content>
        </ion-card>

        <ion-card class="coworker-card">
          <img alt="card-coworker-header.png"  src="/assets/card-coworker-header.png" class="header-img"/>
          <ion-card-content>
            <ion-list lines="none">
              <ion-item>
                <ion-avatar slot="start">
                  <img src="/assets/card-coworker-header.png"/>
                </ion-avatar>
                <ion-label>
                  <h1>John Parks</h1>
                  <p>Co-worker</p>
                </ion-label>
              </ion-item>
              <ion-item>
                <ion-icon name="call" slot="start"></ion-icon>
                <ion-label>
                  <h2>(555) 418-5602</h2>
                  <p>Mobile phone</p>
                </ion-label>
              </ion-item>
              <ion-item>
                <ion-icon name="mail" slot="start"></ion-icon>
                <ion-label>
                  <h2>jparks@workmail.com</h2>
                  <p>Work email</p>
                </ion-label>
              </ion-item>
              <ion-item>
                <ion-icon name="mail" slot="start"></ion-icon>
                <ion-label>
                  <h2>john.parks92@email.com</h2>
                  <p>Personal email</p>
                </ion-label>
              </ion-item>
            </ion-list>
          </ion-card-content>
        </ion-card>

        <ion-card class="music-card">
          <ion-card-header>
            <img src="/assets/card-album.png"/>
          </ion-card-header>
          <ion-card-content text-center>
            <h2>29 #Strafford APTS</h2>
            <p>Bon Iver — 22, A Million</p>

            <ion-progress-bar value={.25}></ion-progress-bar>

            <ion-button color="dark" fill="clear" size="small">
              <ion-icon slot="icon-only" name="shuffle"></ion-icon>
            </ion-button>
            <ion-button color="dark" fill="clear" size="large">
              <ion-icon slot="icon-only" name="play-back"></ion-icon>
            </ion-button>
            <ion-button color="dark" fill="clear" class="button-largest">
              <ion-icon slot="icon-only" name="play"></ion-icon>
            </ion-button>
            <ion-button color="dark" fill="clear" size="large">
              <ion-icon slot="icon-only" name="play-forward"></ion-icon>
            </ion-button>
            <ion-button color="dark" fill="clear" size="small">
              <ion-icon slot="icon-only" name="repeat"></ion-icon>
            </ion-button>
          </ion-card-content>
        </ion-card>

      </ion-content>

      <style>
        .ios body.dark component-card {
  --ion-item-background: #1c1c1e;
}


component-card {
  --background-darker: var(--ion-color-step-200, #e9edf3);

  --text-dark: var(--ion-color-step-850, #27323f);
  --text-darker: var(--ion-color-step-950, #0e151f);

  --text-light: var(--ion-color-step-650, #5b708b);
  --text-lighter: var(--ion-color-step-550, #73849a);
  --text-lightest: var(--ion-color-step-300, #b2becd);
}

component-card ion-card .header-img {
  width: 100%;
  height: 120px;
}

component-card ion-card ion-card-subtitle {
  color: var(--text-lighter);
}

component-card ion-card ion-card-title {
  color: var(--text-darker);
}

component-card ion-card ion-card-content {
  color: var(--text-light);
}

component-card ion-card ion-list ion-item {
  --padding-start: 0;
}

/* Action Card */

component-card .action-card ion-grid {
  --ion-grid-column-padding: 0;

  padding: 10px 0 0;
}

component-card .action-card ion-col:last-child {
  text-align: right;
}

.md component-card .action-card .button-clear {
  --background-hover: currentColor;
  --background-focused: currentColor;
}

component-card .action-card .button-clear {
  --color: #c6cede;
  --border-radius: 50%;
  --padding-top: 0;
  --padding-end: 0;
  --padding-bottom: 0;
  --padding-start: 0;

  margin: 0;

  height: 36px;
  width: 36px;
}

/* Apps Card */

component-card .apps-card ion-list ion-thumbnail {
  margin-top: 5px;
  margin-bottom: 5px;

  --border-radius: 14px;
}

/* Coworker Card */

component-card .coworker-card .header-img {
  height: 160px;
}

component-card .coworker-card h1 {
  font-weight: 600;
  font-size: 18px;
}

component-card .coworker-card p {
  color: var(--text-light);
}

component-card .coworker-card ion-icon {
  align-self: start;
  margin-top: 10px;
  margin-right: 29px;

  color: var(--text-lightest);
}

/* Music Card */

component-card .music-card ion-card-header,
component-card .music-card ion-card-content {
  text-align: center;
}

component-card .music-card img {
  width: 248px;
  height: 248px;

  box-shadow: 0px 2px 8px rgba(2, 8, 20, 0.1), 0px 8px 16px rgba(2, 8, 20, 0.08);
  border-radius: 6px;
}

component-card .music-card h2 {
  font-weight: 600;
  font-size: 16px;

  color: var(--text-darker);
}

component-card .music-card p {
  color: var(--text-light);
}

component-card .music-card ion-button {
  --padding-start: 7px;
  --padding-end: 7px;

  margin: 0;
}

component-card .music-card .button-largest {
  font-size: 28px;
}

component-card .music-card ion-progress-bar {
  margin: 30px 0 20px;

  --background: var(--background-darker);
  --progress-background: var(--text-dark);
}
      </style>