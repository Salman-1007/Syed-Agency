const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Mock Data Source
const agencyData = {
    brand: {
        name: "Syed Real Estate & Marketing",
        phone: "+92 300 1234567",
        email: "sales@syedrealestate.com",
        address: "Plaza 45, Commercial Broadway, Phase 6, DHA, Lahore",
        hours: "Mon - Sat: 10:00 AM - 9:00 PM"
    },
    featuredSociety: {
        name: "Park View City Lahore (Silver Block)",
        tagline: "LDA Approved Luxury Living with 35% Guaranteed Capital Growth",
        badge: "Platinum Authorized Sales Partner",
        heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
        stats: [
            { label: "LDA Status", value: "100% Approved" },
            { label: "Development", value: "90% Completed" },
            { label: "Possession", value: "On Down Payment" },
            { label: "Booking Starts", value: "15% Down" }
        ],
        perks: [
            { icon: "shield-check", title: "LDA Approved Registry", desc: "Completely secure investment profile with instant allocation and transferable registry letters." },
            { icon: "zap", title: "Underground Electrification", desc: "24/7 load-shedding free zone with modern subterranean utility grid installations." },
            { icon: "trees", title: "Eiffel Tower & Theme Park", desc: "Premium world-class infrastructure featuring beautiful community parks, food streets, and mega malls." },
            { icon: "plane", title: "Dedicated Overseas Block", desc: "Gated sub-community built strictly to international standards with premium surveillance cameras." }
        ]
    },
    properties: [{
            id: "sre-101",
            title: "1 Kanal Modern Spanish Luxury Villa",
            type: "residential",
            price: "PKR 7.8 Crore",
            location: "Phase 6, DHA, Lahore",
            beds: 5,
            baths: 6,
            area: "1 Kanal",
            status: "Ready to Move",
            image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
            badge: "Direct Owner Deal"
        },
        {
            id: "sre-102",
            title: "4 Marla Commercial Plot File",
            type: "commercial",
            price: "PKR 1.45 Crore",
            location: "Main Boulevard, Park View City",
            beds: 0,
            baths: 0,
            area: "4 Marla",
            status: "Booking Open",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
            badge: "High Demand File"
        },
        {
            id: "sre-103",
            title: "10 Marla Luxury Executive Mansion",
            type: "luxury",
            price: "PKR 3.9 Crore",
            location: "Block Executive, Bahria Town",
            beds: 4,
            baths: 5,
            area: "10 Marla",
            status: "Under Construction",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
            badge: "Flexible Installments"
        }
    ],
    closedDeals: [{
            title: "DHA Phase 8 Commercial Portfolio",
            type: "Corporate Acquisition",
            volume: "PKR 32 Crore",
            turnaround: "Transferred in 14 Days",
            roi: "Off-Market Deal",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "10-Plot File Package Liquidation",
            type: "Investor Bulk Exit",
            volume: "PKR 14.5 Crore",
            turnaround: "Sold in 72 Hours",
            roi: "All Cash Deal",
            image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
        }
    ],
    reviews: [{
            name: "Mian Muhammad Asif",
            role: "Textile Mill Owner",
            comment: "Syed Real Estate locked down our commercial inventory seamlessly. No hidden document overheads, transparent commissions, and highly efficient transfers.",
            stars: 5,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        },
        {
            name: "Zainab Bibi",
            role: "Overseas Investor (Manchester, UK)",
            comment: "Being outside Pakistan, trust is my number one concern. Their professional video walk-throughs and structural layout verifications made my 1 Kanal booking risk-free.",
            stars: 5,
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
        }
    ]
};
app.get('/', (req, res) => {
    res.render('index', { data: agencyData });
});

app.post('/api/inquire', (req, res) => {
    console.log("Inbound Lead Received:", req.body);
    res.json({ success: true, message: "Thank you. Our senior broker will call you within 15 minutes." });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Syed Real Estate portal running on http://localhost:${PORT}`));

module.exports = app;