# Qr-Based-Smart-Queue-management
Project Overview

The Smart Queue Management System is a digital queue solution designed to reduce long waiting times in service environments such as hospitals, banks, government offices, and customer service centers.

Instead of standing in physical lines, users can scan a QR code, join the queue digitally, and monitor their real-time queue position and waiting time.

The system also provides an Admin Dashboard for managing the queue and an Analytics Dashboard for analyzing historical queue data such as peak hours, peak days, and estimated wait times.

The project is built using the MERN Stack (MongoDB, Express.js, React.js, Node.js).

Features
User Features

Scan QR code to join the queue

Enter name and phone number to get a queue token

View real-time queue status

See number of people ahead

View estimated waiting time

Receive alert when it is their turn

Admin Dashboard

View currently serving customer

Call the next person in queue

Update service time for customers

Monitor waiting list in real time

View total served customers

Analytics Dashboard

Peak hour detection

Peak day analysis

Average wait time analysis

Queue estimation by day

Slot-based queue prediction

Tech Stack
Frontend

React.js

React Router

Chart.js

Axios

CSS

Backend

Node.js

Express.js

Database

MongoDB

Mongoose

Other Tools

QR Code Generator

Synthetic dataset for analytics


System Architecture
User Device (Mobile / Web)
        │
        ▼
React Frontend
(Home Page, Queue Entry, User Status, Dashboards)
        │
        ▼
Node.js + Express Backend
(API routes and queue logic)
        │
        ▼
MongoDB Database
(Queue entries + historical data)
        │
        ▼
Analytics Module
(Peak hours, peak days, wait estimation)

Dataset Description

The analytics module uses a synthetic dataset representing historical queue data.

Dataset fields include:

day_of_week

hour

queue_length

wait_time_minutes

This dataset helps generate analytics such as:

Peak hour analysis

Peak day analysis

Average waiting time prediction

Slot-based queue recommendations

Future Enhancements

SMS notifications when it is the user's turn

Mobile application version

AI-based queue prediction

Cloud deployment

Multi-branch queue management

Online appointment booking system

Learning Outcomes

This project demonstrates practical implementation of:

MERN stack full-stack development

REST API development

Real-time queue management logic

Data analytics visualization

QR-based digital systems

Conclusion

The Smart Queue Management System provides a modern solution to traditional waiting line problems by enabling users to join queues digitally and monitor their status remotely. By combining real-time queue tracking with analytics insights, the system enhances user convenience and improves operational efficiency.
