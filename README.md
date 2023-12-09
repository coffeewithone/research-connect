# Research Connect

## Video Demo

The final video can be viewed [here](https://www.youtube.com/watch?v=icNYEdlQWSU). 

## Overview

Research Connect is a collaborative platform tailored for the research community, facilitating interaction and engagement through a range of dynamic features. Engineered with MongoDB, TypeScript, NodeJS, NextJS, and ReactJS, it aims to deliver a seamless user experience and foster academic and professional connections.

### Current Features and Progress

#### Basic Features

1. **Account Creation and Registration**
   - **Description**: Secure signup and login functionality, with email/password and Google authentication.
   - **Progress**: Frontend validation (Zod) and Google authentication (Clerk) are implemented. User data is stored securely in MongoDB.
   - **Weight**: 8/10

2. **Edit/Update User Profile**
   - **Description**: Allows users to edit usernames, update emails, and personal names.
   - **Progress**: Feature mostly complete, profile updates are operational.
   - **Weight**: 7/10

3. **Password Reset/Recovery**
   - **Description**: Provides a password reset option with email verification.
   - **Progress**: Nearly complete, with email verification for password reset functional.
   - **Weight**: 9/10

4. **Public View of User Profile**
   - **Description**: Securely displays user profiles, including images and names, via a URL.
   - **Progress**: This feature is operational, integrating data from MongoDB's 'user' collection.
   - **Weight**: 8/10

5. **News Feed Generation and Display**
   - **Description**: Features a compilation of user posts with comments metadata and pagination.
   - **Progress**: Fully functional with all intended capabilities.
   - **Weight**: 10/10

6. **Community Feature**
   - **Description**: Allows users to create and participate in communities, with unique posts and members for each.
   - **Progress**: Fully functional, supporting community creation, membership, and post viewing.
   - **Weight**: 9/10

#### Bonus Features

1. **Upload Attachment**
   - **Description**: Enables users to upload PDFs and generate shareable links.
   - **Progress**: Fully implemented, with PDF uploads and link generation capabilities.
   - **Weight**: 10/10

2. **Notifications**
   - **Description**: Automated, real-time notifications for user activities like comments.
   - **Progress**: Complete, with notifications functioning in real-time.
   - **Weight**: 10/10

### Summary of Progress

The platform has made significant strides with most basic features complete or near completion. Account creation, user profile management, and the news feed are operational. The community feature and both bonus features are fully implemented, enhancing the user experience.
