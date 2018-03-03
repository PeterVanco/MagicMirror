/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
    address: "0.0.0.0", // Address to listen on, can be:
    // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
    // - another specific IPv4/6 to listen on a specific interface
    // - "", "0.0.0.0", "::" to listen on any interface
    // Default, when address config is left out, is "localhost"
    port: 8080,
    // ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
    // or add a specific IPv4 of 192.168.1.5 :
    // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
    // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
    // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],
    ipWhitelist: [],

    language: "sk",
    timeFormat: 24,
    units: "metric",

    modules: [
        {
            module: "alert",
            classes: "default everyone",
        },
        {
            module: "updatenotification",
            position: "top_bar",
            classes: "default everyone",
        },
        {
            module: "clock",
            position: "top_left",
            classes: "default everyone",
        },
        {
            module: "calendar",
            header: "Nadchádzajúce udalosti",
            position: "top_left",
            classes: "peter",
            config: {
                calendars: [
                    {
                        symbol: "calendar-check-o ",
                        url: "webcal://calendar.google.com/calendar/ical/petervanco.sk%40gmail.com/private-67fae00ebadf63afa26a74287e283940/basic.ics"
                    }
                ],
                maximumEntries: 6,
                timeFormat: "absolute",
            }
        },
        // {
        // 	module: "compliments",
        // 	position: "lower_third"
        // },
        {
            module: "currentweather",
            position: "top_right",
            classes: "default",
            config: {
                location: "Bratislava",
                locationID: "",  //ID from http://www.openweathermap.org/help/city_list.txt
                appid: "635812f7c274c750fc5566f604778133"
            }
        },
        {
            module: "weatherforecast",
            position: "top_right",
            header: 'Predpoveď počasia - ',
            classes: "default everyone",
            config: {
                location: "Bratislava",
                locationID: "",  //ID from http://www.openweathermap.org/help/city_list.txt
                appid: "635812f7c274c750fc5566f604778133"
            }
        },
        {
            module: "newsfeed",
            // position: "bottom_bar",
            position: "upper_third",
            classes: "default everyone",
            config: {
                feeds: [
                    {
                        title: "SME",
                        url: "https://www.sme.sk/rss-title"
                    }
                ],
                showSourceTitle: true,
                showPublishDate: true
            }
        },
        {
            module: 'MMM-MyCommute',
            position: 'top_left',
            header: 'Cesta do práce',
            classes: 'default everyone',
            config: {
                apikey: 'AIzaSyBqaX-0g6G6idL4X8CMhqXwTE5TYTdWtB0',
                origin: 'Sputniková 37, Bratislava',
                startTime: '00:00',
                endTime: '23:59',
                // hideDays: [0,6],
                destinations: [
                    {
                        destination: 'Wolfsthal Bahnhof, Bratislava',
                        label: 'Wolfsthal Bahnhof',
                        mode: 'driving',
                        color: '#82E5AA',
                        alternatives: true,
                        map: {
                            zoom: 12,
                            height: '200px',
                            width: '334px',
                        },
                        tts: 'Cesta do Wolfsthalu bude trvať {duration} minút',
                    },
                    {
                        destination: 'Sandvik, Bratislava',
                        label: 'Sandvik',
                        mode: 'transit',
                        alternatives: true,
                        map: {
                            zoom: 12,
                            height: '200px',
                            width: '334px',
                        },
                    },
                ]
            }
        },


        // {
        //     module: "MMM-EARTH",
        //     position: "bottom_right",
        //     classes: 'default',
        //     config: {
        //         mode: "Natural",
        //         rotateInterval: 15000,
        //         MaxWidth: "30%",
        //         MaxHeight: "30%",
        //     }
        // },

        {
            module: 'MMM-teamspeak3',
            position: 'top_right',
            header: 'TeamSpeak',
            classes: 'default everyone',
            config: {
                host: '192.168.1.252',
                serverPort: '9987', // Default server port (not required if default port (9987) is used)
                sid: '', // Server ID
                serverQueryPort: '10011', // Default server query port (not required if default port (10011) is used)
                login: 'ServerQuery',
                passwd: 'df17YfRO',
                refreshInterval: 60 // in seconds
            }
        },
        {
            module: 'MMM-RandomPhoto',
            position: 'top_right',
            header: 'Náhodná spomienka',
            classes: 'everyone peter veronika',
            config: {
                opacity: 1.0,
                animationSpeed: 1000,
                updateInterval: 60,
                url: 'http://192.168.1.252:8181/randomphoto/',
                width: '334px',
            }
        },

        {
            module: 'MMM-TTS',
            position: 'top_right',
            classes: 'default everyone',
            config: {
                // debug: true,
                voice: 'sk',
                speed: 1,
            }
        },
        {
            module: 'MMM-Facial-Recognition-OCV3',
            config: {
                // Threshold for the confidence of a recognized face before it's considered a
                // positive match.  Confidence values below this threshold will be considered
                // a positive match because the lower the confidence value, or distance, the
                // more confident the algorithm is that the face was correctly detected.
                threshold: 10,
                // force the use of a usb webcam on raspberry pi (on other platforms this is always true automatically)
                useUSBCam: true,
                // Path to your training xml
                trainingFile: '/home/pi/repo/MagicMirror/modules/MMM-Facial-Recognition-OCV3/training.xml',
                // recognition intervall in seconds (smaller number = faster but CPU intens!)
                interval: 0,
                // Logout delay after last recognition so that a user does not get instantly logged out if he turns away from the mirror for a few seconds
                logoutDelay: 5,
                // Array with usernames (copy and paste from training script)
                users: ['peter'],
                //Module set used for strangers and if no user is detected
                defaultClass: "default",
                //Set of modules which should be shown for every user
                everyoneClass: "everyone",
                // Boolean to toggle welcomeMessage
                welcomeMessage: true
            }
        },

        {
            module: 'MMM-SystemStats',
            position: 'bottom_right', // This can be any of the regions.
            header: 'Systém',
            classes: 'default everyone small dimmed', // Add your own styling. Optional.
            config: {
                updateInterval: 10000,
                animationSpeed: 1000,
                align: 'right', // align labels
                //header: 'System Stats', // This is optional
            },
        },
    ]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
    module.exports = config;
}
