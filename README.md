[![Build Status](https://travis-ci.org/samdutton/apprtc-c.svg?branch=master)](https://travis-ci.org/samdutton/apprtc-c)

# apprtc-c #

This is a 'proof of concept' Chrome app version of the [AppRTC](https://apprtc.appspot.com) video chat client.

##Installation on Chrome OS##

1. Click Download ZIP (on the right of this page).

2. Go to chrome:downloads. Open apprtc-c-master.zip and drag the unzipped folder to Downloads.

3. Go to chrome: extensions and click Load unpacked extension...

4. Select the apprt-c-master folder and click Open.

5. Click Launch. (You can click Launch twice to open the app twice on the same machine.)

##Installation on a non-Chrome OS##

1. Clone this repository to your machine using `git clone git@github.com:samdutton/apprtc-c.git` or download a ZIP file of the repository by clicking the Download ZIP button on the right of this page.

2. In Chrome, navigate to chrome:extensions.

3. Click Load unpacked extension... and select the folder you cloned or downloaded.

4. Click on the Apps icon at the top left of the browser window, or navigate to chrome:apps. Open the apprtc-c app twice (you can do this in the same browser on the same machine).

##Notes##

The code here is based on [apprtc.appspot.com](https://apprtc.appspot.com).

The differences are as follows:

* For signaling, this demo uses WebSocket via the public/free mbed.org server. This isn't a long-term solution (or secure: wss isn't available) but it's not hard to roll our own secure WebSocket server (for more information see [HTML5 Rocks](http://www.html5rocks.com/en/tutorials/websockets/basics/#toc-serverside)).

* The 'room name' for this demo is hardcoded as _foo_, and a 'room' corresponds to a directory in the WebSocket URL (e.g. ws://sockets.mbed.org/ws/foo/rw, rw = read/write). It would be simple enough to add UI/UX for setting a room name.

* There is no checking for more than two users in the 'room': additional attempts to join the same room just result in an error.

* The setting of _initiator_ is somewhat hacky: as soon as the Chrome app is opened, a 'ping' message is sent via the WebSocket server to all users in the same room. When the first app to open starts up, other clients are not yet started and will not receive the message. The first app to open will receive a ping as soon as the second app to open starts, and then sets _initiator_ to 1 and calls `maybeStart()`. There are likely to be timing problems with this method, but it works well enough for the purposes of the demo and avoids having to check state on the server.

* All app parameters are hardcoded and there's currently no way to set these. Again -- easy enough to add functionality/UI for this.
