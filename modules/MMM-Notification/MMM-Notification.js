/* global Log, Module, moment */

Module.register("MMM-Notification", {

    defaults: {
        animationDuration: 1000,
    },

    notification: "",

    // Define start sequence.
    start: function() {
        Log.info("Starting module: " + this.name);
    },

    // Override dom generator.
    getDom: function() {
        const compliment = document.createTextNode(this.notification);
        const wrapper = document.createElement("div");
        wrapper.className = this.config.classes ? this.config.classes : "thin xlarge bright";
        wrapper.appendChild(compliment);
        return wrapper;
    },

    updateNotification: function(notification) {
        this.notification = notification;
        this.updateDom(this.config.animationDuration);
    },

    handleNotification: function(payload) {
        const self = this;
        if (payload.duration != null) {
            setTimeout(function() {
                self.updateNotification("");
            }, payload.duration >= this.config.animationDuration * 2 ? payload.duration : this.config.animationDuration * 2);
            self.updateNotification(payload.notification);
        } else {
            self.updateNotification(payload);
        }
    },

    socketNotificationReceived: function(notification, payload, sender) {
        if (notification === "NOTIFICATION") {
            this.handleNotification(payload);
        }
    },

    notificationReceived: function(notification, payload, sender) {
        if (notification === "NOTIFICATION") {
            this.handleNotification(payload);
        }
    },

});
