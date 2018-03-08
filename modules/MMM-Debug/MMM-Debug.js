Module.register('MMM-Debug', {

    defaults: {
        debug: true
    },

    start() {
        Log.info(`Starting module: ${this.name}`);
        this.sendNotification('DEBUG', this.config.debug);
    },

    getStyles: function() {
        return ["MMM-Debug.css"];
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


            const notificationTypeWrapper = document.createElement('div');
            const localNotification = document.createElement('input');
            localNotification.id = 'local';
            localNotification.type = 'radio';
            localNotification.name = "notificationType";
            localNotification.checked = true;
            const localNotificationLabel = document.createElement('label');
            localNotificationLabel.setAttribute("for", "local");
            localNotificationLabel.innerText = "Local";
            notificationTypeWrapper.appendChild(localNotification);
            notificationTypeWrapper.appendChild(localNotificationLabel);

            const socketNotification = document.createElement('input');
            socketNotification.id = 'socket';
            socketNotification.type = 'radio';
            socketNotification.name = "notificationType";
            const socketNotificationLabel = document.createElement('label');
            socketNotificationLabel.setAttribute("for", 'socket');
            socketNotificationLabel.innerText = 'Socket';
            notificationTypeWrapper.appendChild(socketNotification);
            notificationTypeWrapper.appendChild(socketNotificationLabel);

            wrapper.appendChild(notificationTypeWrapper);

            const notification = document.createElement("input");
            notification.id = "debug-notification";
            notification.type = "text";
            notification.placeholder = "notification";
            wrapper.appendChild(notification);

            const button = document.createElement("button");
            button.id = "debug-send-button";
            button.innerText = "SEND";
            button.onclick = function() {
                let notification = document.getElementById("debug-notification").value;
                let payload;
                try {
                    payload = JSON.parse(document.getElementById("debug-payload").value);
                } catch (e) {
                    payload = document.getElementById("debug-payload").value;
                }

                if (localNotification.checked === true) {
                    console.log("Sending LOCAL notification " + notification + ": " + JSON.stringify(payload));
                    self.sendNotification(notification, payload);
                } else {
                    console.log("Sending SOCKET notification " + notification + ": " + JSON.stringify(payload));
                    self.sendSocketNotification(notification, payload);
                }
            };
            wrapper.appendChild(button);

            const payload = document.createElement("textarea");
            payload.id = "debug-payload";
            payload.rows = 5;
            payload.placeholder = "payload";
            wrapper.appendChild(payload);
        }
        return wrapper;
    }

});
