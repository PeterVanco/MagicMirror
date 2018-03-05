/* global Module Log */

/* Magic Mirror
 * Module: MMM-TTS
 *
 * By fewieden https://github.com/fewieden/MMM-TTS
 *
 * MIT Licensed.
 */

Module.register('MMM-Debug', {

    defaults: {
        debug: true
    },

    start() {
        Log.info(`Starting module: ${this.name}`);
        this.sendNotification('DEBUG', this.config.debug);
    },

    notificationReceived(notification, payload) {
        if (this.config.debug) {
            console.log("Received FRONTEND notification " + notification + ": " + JSON.stringify(payload));
        }
    },

    socketNotificationReceived(notification, payload) {
        if (this.config.debug) {
            console.log("Received SOCKET notification " + notification + ": " + JSON.stringify(payload));
        }
    },

    getDom() {
        const self = this;
        const wrapper = document.createElement('div');
        if (this.config.debug === true) {
            wrapper.innerHTML =
                '<input id="debug-notification" type="text" placeholder="notification">' +
                '<textarea id="debug-payload" cols="60" rows="5" placeholder="payload"></textarea>';
            const button = document.createElement("button");
            button.innerText = "SEND";
            button.onclick = () => {
                let notification = document.getElementById("debug-notification").value;
                let payload = document.getElementById("debug-payload").value;
                console.log("Sending DEBUG SOCKET notification " + notification + ": " + JSON.stringify(payload));
                self.sendNotification(notification, payload);
            };
            wrapper.appendChild(button);
        }
        return wrapper;
    }

});
