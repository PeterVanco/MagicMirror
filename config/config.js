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
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Nadchádzajúce udalosti",
			position: "top_left",
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
        // {
        //     module: 'MMM-Traffic',
        //     position: 'top_left',
        //     classes: 'dimmed medium', //optional, default is 'bright medium', only applies to commute info not route_name
        //     config: {
        //         api_key: 'AIzaSyBqaX-0g6G6idL4X8CMhqXwTE5TYTdWtB0',
        //         mode: 'driving',
        //         origin: 'Sputnikova 37, Bratislava',
        //         destination: 'Wolfsthal Bahnhof',
        //         // fri_destination: '1 E 161st St, Bronx, NY 10451',
        //         // arrival_time: '0750', //optional, but needs to be in 24 hour time if used.
        //         route_name: 'Wolfsthal Bahnhof',
        //         changeColor: true,
        //         showGreen: true,
        //         limitYellow: 5, //Greater than 5% of journey time due to traffic
        //         limitRed: 20, //Greater than 20% of journey time due to traffic
        //         traffic_model: 'pessimistic',
        //         interval: 120000, //2 minutes
        //         showWeekend: true,
        //         allTime: false,
        //
        //         map: true,
        //         key: 'AIzaSyCtJwOZjqh2Um11gppjrkIGfvA1hcYfucA',
        //         lat: 37.8262306,
        //         lng: -122.2920096,
        //         height: '300px',
        //         width: '300px'
        //     }
        // },
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
                        // tts: 'Cesta do Sandviku bude trvať {duration} minút',
                    },
                    // {
                    //     destination: '55 Mill St, Toronto, ON M5A 3C4',
                    //     label: 'Distillery District',
                    //     mode: 'bicycling'
                    // },
                    // {
                    //     destination: '6301 Silver Dart Dr, Mississauga, ON L5P 1B2',
                    //     label: 'Pearson Airport',
                    //     avoid: 'tolls'
                    // }
                ]
            }
        },
        // {
        //     module: 'MMM-GoogleMapsTraffic',
        //     position: 'top_left',
        //     config: {
        //         key: 'AIzaSyCtJwOZjqh2Um11gppjrkIGfvA1hcYfucA',
        //         lat: 37.8262306,
        //         lng: -122.2920096,
        //         height: '300px',
        //         width: '300px'
        //     }
        // },

        // {
        //     module: "MMM-EARTH",
        //     position: "bottom_right",
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
        // {
        //     module: 'MMM-plexdeck',
        //     position: 'top_right',
        //     header: 'Plex On Deck',
        //     config: {
        //         plexURL: 'http://192.168.1.252:32400',
        //         plexToken: 'KmiktZGsmuQ2pZnKGDHi',
        //     }
        // },

        {
            module: 'MMM-RandomPhoto',
            // position: 'fullscreen_below',
            position: 'top_right',
            header: 'Náhodná spomienka',
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
            config: {
                // debug: true,
                voice: 'sk',
                speed: 1,
            }
        },
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
