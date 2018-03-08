/* Magic Mirror
 * Module: MMM-TTS
 *
 * By fewieden https://github.com/fewieden/MMM-TTS
 *
 * MIT Licensed.
 */

/* eslint-env node */

const NodeHelper = require('node_helper');
const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;

module.exports = NodeHelper.create({

    start() {
        console.log(`Starting node helper for: ${this.name}`);
    },

    notificationReceived(notification, payload) {
        //if (this.config.debug) {
        console.log("Received FRONTEND notification " + notification + ": " + JSON.stringify(payload));
        //}
    },

    socketNotificationReceived(notification, payload) {
        console.log("Received SOCKET notification (forwarding) " + notification + ": " + JSON.stringify(payload));
        // MM.getModules().enumerate(function(module) {
        //     module.socketNotificationReceived(notification, payload);
        // });
    },

});
