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
        name: "Syed Real Estate",
        phone: "+92 300 1234567",
        email: "invest@syedrealestate.com",
        address: "Suite 502, Commercial Broadway, Phase 6, DHA",
        hours: "Mon - Sat: 9:00 AM - 8:00 PM"
    },
    featuredSociety: {
        name: "Park View Enclave Elite",
        tagline: "The Future of Luxury Living & 40% Projected Capital Gain",
        badge: "Exclusive Development Partner",
        heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
        stats: [
            { label: "NOC Approval", value: "100% Approved" },
            { label: "Development", value: "85% Completed" },
            { label: "Possession", value: "Within 6 Months" },
            { label: "Expected ROI", value: "35% - 42%" }
        ],
        perks: [
            { icon: "shield-check", title: "100% Verified LDA / RDA Approved", desc: "Completely clear title deeds with instant registry transfer guarantee." },
            { icon: "zap", title: "Uninterrupted Underground Utilities", desc: "Dedicated grid station with zero line cuts for power, gas, and fiber internet." },
            { icon: "trees", title: "45% Dedicated Green Spaces", desc: "Eco-resilient design featuring thematic botanical parks and central lakes." },
            { icon: "school", title: "International Standard Schooling", desc: "On-site campuses of premier international schools and tertiary medical hubs." }
        ]
    },
    properties: [
        {
            id: "sre-101",
            title: "The Royal Glasshouse Villa",
            type: "residential",
            price: "$680,000",
            location: "Sector A, Park View Enclave",
            beds: 5,
            baths: 6,
            area: "4,500 sq ft",
            status: "For Sale",
            image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
            badge: "Featured"
        },
        {
            id: "sre-102",
            title: "Skyline Apex Corporate Suite",
            type: "commercial",
            price: "$1,250,000",
            location: "Main Boulevard, Financial Zone",
            beds: 0,
            baths: 4,
            area: "8,200 sq ft",
            status: "For Sale",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
            badge: "High Yield (9% Rental)"
        },
        {
            id: "sre-103",
            title: "The Oasis Modern Mansions",
            type: "luxury",
            price: "$950,000",
            location: "Executive Block, Palm Boulevard",
            beds: 6,
            baths: 7,
            area: "6,800 sq ft",
            status: "Under Construction",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
            badge: "New Release"
        },
        {
            id: "sre-104",
            title: "Grand Horizon Duplex Penthouse",
            type: "residential",
            price: "$490,000",
            location: "Tower 4, Marina Walk",
            beds: 3,
            baths: 4,
            area: "3,100 sq ft",
            status: "For Sale",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
            badge: "Hot Deal"
        }
    ],
    closedDeals: [
        {
            title: "Grand Arcade Plaza",
            type: "Commercial Acquisition",
            volume: "$4.2 Million",
            turnaround: "18 Days to Close",
            roi: "+28% Capital Gain",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "The Crest Lakeview Estate",
            type: "Luxury Residential Sale",
            volume: "$1.8 Million",
            turnaround: "100% Asking Price Paid",
            roi: "Off-Market Deal",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "Sector C Commercial Avenue",
            type: "Plot Portfolio Liquidation",
            volume: "$3.1 Million",
            turnaround: "Sold in 48 Hours",
            roi: "34 Institutional Investors",
            image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
        }
    ],
    reviews: [
        {
            name: "Chaudhry Kamran",
            role: "Commercial Investor",
            comment: "Syed Real Estate locked down our 3-kanal commercial site in record time. Zero paperwork headache and 100% legal verification before we paid a single cent.",
            stars: 5,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        },
        {
            name: "Dr. Ayesha Malik",
            role: "Overseas Pakistani (UK)",
            comment: "Buying from abroad is always nerve-wrecking, but Mr. Syed's video walkthroughs, transparent legal registry audits, and fast updates made it seamless.",
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