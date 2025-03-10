// Import necessary modules
const express = require('express');
const path = require('path');

// Initialize the app
const app = express();

// Sample data for events (mock database)
const events = [
    {
        id: 1,
        orderDate: 'June 2, 2023',
        total: '$157.99',
        eventName: 'Summer Music Festival',
        orderNumber: '#112-0822160-5390023',
        eventDate: 'July 5, 2023',
        venue: 'Central Park, NYC',
        rated: false,
    },
    {
        id: 2,
        orderDate: 'July 15, 2023',
        total: '$99.99',
        eventName: 'Winter Gala Night',
        orderNumber: '#113-0922160-5390045',
        eventDate: 'December 20, 2023',
        venue: 'Madison Square Garden, NYC',
        rated: true,
    },
    {
        id: 3,
        orderDate: 'August 10, 2023',
        total: '$129.99',
        eventName: 'Autumn Concert',
        orderNumber: '#114-1022160-5390067',
        eventDate: 'September 15, 2023',
        venue: 'Radio City Music Hall, NYC',
        rated: false,
    },
    {
        id: 4,
        orderDate: 'September 5, 2023',
        total: '$149.99',
        eventName: 'Spring Festival',
        orderNumber: '#115-1122160-5390089',
        eventDate: 'April 10, 2024',
        venue: 'Brooklyn Museum, NYC',
        rated: false,
    },
];

// Serve static files (e.g., CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Route to render HTML with embedded data
app.get('/', (req, res) => {
    let html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopping Cart - Events</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="script.js" defer></script> <!-- Load JavaScript file for popup functionality -->
</head>
<body class="bg-gray-100">
    <!-- Header -->
    <header class="bg-white shadow-sm p-4 flex justify-between items-center">
        <div class="flex items-center space-x-4">
            <div class="text-green-600 font-bold text-xl">Onestore</div>
            <select class="border border-gray-300 rounded px-2 py-1 text-gray-600">
                <option value="all">All</option>
            </select>
            <input type="text" placeholder="Search events" class="border border-gray-300 rounded px-4 py-1 w-96">
        </div>
        <button class="bg-green-600 text-white px-4 py-2 rounded">Search</button>
    </header>

    <!-- Main Content -->
    <main class="max-w-screen-lg mx-auto mt-6 space-y-6">
        <!-- Tabs -->
        <div class="flex space-x-4 bg-white p-4 shadow-sm rounded-lg">
            <button class="text-green-600 font-semibold border-b-2 border-green-600 pb-1">Orders</button>
            <button class="text-gray-500">History of Events</button>
            <select class="ml-auto border border-gray-300 rounded px-2 py-1 text-gray-600">
                <option value="past-month">Past 3 Months</option>
            </select>
        </div>

        <!-- Event Cards -->
        ${events.map(event => `
            <div class="bg-white p-6 shadow-sm rounded-lg flex items-start space-x-6">
                <!-- Event Image -->
                <img src="#" alt="${event.eventName}" class="w-[20%] h-auto object-cover rounded">

                <!-- Event Details -->
                <div class="flex-grow space-y-2">
                    <!-- Details beside image -->
                    <h3 class="font-semibold text-gray-800">${event.eventName}</h3>
                    <p class="text-sm text-gray-500">Event Date: ${event.eventDate} | Venue: ${event.venue}</p>

                    <!-- Order Details -->
                    <div class="flex justify-between items-center text-sm text-gray-600">
                        <div>Order placed: <span class="font-semibold">${event.orderDate}</span></div>
                        <div>Total: <span class="font-semibold">${event.total}</span></div>
                        <div>Order #: <span class="font-semibold">${event.orderNumber}</span></div>
                        <div><a href="#" class="text-blue-500 hover: underline">View Order Details</a></div>
                        <div><a href="#" class="text-blue-500 hover: underline">View Invoice</a></div>
                    </div>

                    <!-- Buttons -->
                    <div class="flex space-x-2">
                        ${!event.rated ? `<button id="rate-${event.id}" class="bg-yellow-500 text-white px-[10px] py-[5px] rounded hover:bg-yellow hover-rounded">Rate Event</button>` : ''}
                        <button class="bg-green-600 text-white px-[10px] py-[5px] rounded hover:bg-green hover-rounded">View Details</button>
                    </div>
                </div>
            </div>`).join('')}

        <!-- Footer -->
        <footer class="text-center mt-6 text-sm text-gray-500"> Onestore Events</footer>
    </main>

    <!-- Modal for rating notification -->
    ${events.map(event => !event.rated ? `
        <div id="modal-${event.id}" class="hidden fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div class="bg-white p-4 rounded shadow-md">
                <h3 class="font-bold mb-2">Rate Your Experience</h3>
                <p>Please rate your experience with ${event.eventName}.</p>
                <button id="close-${event.id}" class="bg-green-600 text-white px-4 py-2 rounded mt-2">Close</button>
            </div>
        </div>
    ` : '').join('')}
</body>
</html>`;

    res.send(html); // Send the generated HTML as a response
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
