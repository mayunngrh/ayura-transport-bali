import React from "react";

const tabContent = {
    Ubud: [
        {
            title: "Ubud Trip A",
            activities: [
                "ATV Motorbike",
                "Monkey Forest",
                "Tegalalang Rice Fields & Swing",
                "Tegenungan Waterfall",
            ],
        },
        {
            title: "Ubud Trip B",
            activities: [
                "Monkey Forest",
                "Ubud Palace & Market",
                "Coffee Plantation",
                "Tegalalang Rice Fields & Swing",
                "Blangsinga Waterfall",
            ],
        },
        {
            title: "Ubud Trip C",
            activities: [
                "Gold & Silver Jewellery",
                "Ubud Palace",
                "Goa Lawah Temple",
                "Tegalalang Rice Fields & Swing",
            ],
        },
        {
            title: "Ubud Trip D",
            activities: [
                "Tirta Empul Temple",
                "Tegalalang Rice Fields & Swing",
                "Saraswati Temple",
                "Ubud Palace",
                "Coffee Plantation",
                "Tegenungan Waterfall",
            ],
        },
    ],
    Amlapura: [
        {
            title: "Amlapura A",
            activities: [
                "Lempuyang Temple & Gate",
                "Tirta Gangga",
                "Taman Ujung",
                "Tenganan Village",
            ],
        },
        {
            title: "Amlapura B",
            activities: [
                "Besakh Temple",
                "Taman Ujung",
                "Tirta Gangga",
                "Virginie Beach",
            ],
        },
    ],
    Kintamani: [
        {
            title: "Kintamani - Bangli",
            activities: [
                "Penglipuran Village",
                "Batur Mountain",
                "Coffee Plantation",
                "Hot Spring",
            ],
        },
        {
            title: "Kintamani",
            activities: [
                "Tracking Mount Batur",
                "Coffee Plantation",
                "Jeep Mount Batur",
                "Bike Squad",
                "Hot Spring",
                "Temple",
                "Trumpan Village",
            ],
        },
    ],
    Bedugul: [
        {
            title: "Bedugul",
            activities: [
                "Monkey Forest Sangeh",
                "Taman Ayun Temple",
                "Jatiluwin",
                "Beratan Lake & Temple",
                "Handara Gate",
                "Tanah Lot",
            ],
        },
        {
            title: "Bedugul - Tanah Lot - Badung",
            activities: [
                "Monkey Forest Sangeh",
                "Taman Ayun Temple",
                "Tanah Lot Temple",
                "Jatiluwin",
                "Ulun Danu Beratan Temple",
                "Coffee Plantation",
                "Chocolate Factory",
                "Handara Gate",
                "Lake Lake Waterfall",
                "Banyumala Twin Waterfall",
                "Sekumpul Waterfall",
            ],
        },
    ],
    Sidemen: [
        {
            title: "Sidemen - Semarapura",
            activities: [
                "Besakih Temple",
                "Kerta Goas",
                "Tukad Unda",
                "Goa Lawah Temple",
                "Virgine Beach",
                "Tenganan Village",
                "Taman Ujung",
                "Tirta Gangga",
                "Lempuyang Temple & Gate",
            ],
        },
    ],
    Pecatu: [],
};

export const specialTabContent = {
    Ubud: {
        displayName: "Ubud - Gianyar - Bangli",
        trips: [
            {
                title: "Handycrafts",
                activities: [
                    "Boutique",
                    "Art Painting",
                    "Art Gallery",
                    "Gold And Silver"
                ],
            },
            {
                title: "Temples",
                activities: [
                    "Goa Gajah",
                    "Saraswati",
                    "Tirta Empul",
                    "Gunung Kawi",
                    "Sebatu"
                ],
            },
            {
                title: "Animal Parks",
                activities: [
                    "Bali Zoo",
                    "Bird Park",
                    "Bali Safari",
                    "Elephant Park",
                    "Butterfly Park"
                ],
            },
            {
                title: "Activities",
                activities: [
                    "Atv Motor Bike",
                    "Water Rafting",
                    "Bike Squad",
                    "Swing",
                    "Cooking Class"
                ],
            },
            {
                title: "Waterfalls",
                activities: [
                    "Karto Lampo",
                    "Tegenungan",
                    "Blangsinga",
                    "Goa Rang Reng",
                    "Sumanman",
                    "Tibunama",
                    "Suwat",
                    "Goa Giri Campuhan",
                    "Tukad Cepung"
                ],
            },
            {
                title: "Tourist Attractions",
                activities: [
                    "Monkey Forest",
                    "Tegalalang Rice Fields",
                    "Ubud Palace",
                    "Bukit Campuhan",
                    "Penglipuran Village",
                    "Coffee Plantation",
                    "Traditional Balinese Dance"
                ],
            }
        ],
    },
    Amlapura: {
        displayName: "",
        trips: [],
    },
    Kintamani: {
        displayName: "",
        trips: [],
    },
    Bedugul: {
        displayName: "",
        trips: [],
    },
    Sidemen: {
        displayName: "",
        trips: [],
    },
    Pecatu: {
        displayName: "Pecatu - Nusa Dua - Uluwatu",
        trips: [
            {
                title: "Activities",
                activities: [
                    "ATV Motorbike",
                    "Monkey Forest",
                    "Tegalalang Rice Field & Swing",
                    "Tegenungan Waterfall"
                ],
            },
            {
                title: "Tourist Attraction",
                activities: [
                    "Turtle Island",
                    "GWK (Garuda Wisnu Kencana)",
                    "Pandawa Beach",
                    "Melasti Beach",
                    "Kecak Dance",
                    "Uluwatu Temple",
                    "Balangan Beach",
                    "Bingin Beach",
                    "Padang Padang Beach",
                    "Nyang Nyang Beach"
                ],
            }
        ],
    }
};

export const tabs = ["Ubud", "Amlapura", "Kintamani", "Bedugul", "Sidemen", "Pecatu"];

export default tabContent;