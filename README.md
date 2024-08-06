# S3ImageUploader-ASP.NET-React

# File Upload and Management with Amazon S3

## Overview

This project consists of an ASP.NET Web API backend and a React frontend. The backend API allows you to upload, retrieve, and delete files from an Amazon S3 bucket. The frontend React component provides a user interface for uploading files.

## Backend (ASP.NET Web API)

### API Endpoints

- **Upload File**
  - **Endpoint**: `POST /api/Files/upload`
  - **Description**: Uploads an image to an Amazon S3 bucket.
  - **Parameters**:
    - `file` (form-data): The file to upload.
    - `bucketName` (query string): The name of the S3 bucket.
    - `prefix` (query string, optional): The prefix (folder path) in the S3 bucket.

- **Get All Files**
  - **Endpoint**: `GET /api/Files/get-all`
  - **Description**: Lists all files in the specified S3 bucket with presigned URLs for access.
  - **Parameters**:
    - `bucketName` (query string): The name of the S3 bucket.
    - `prefix` (query string, optional): The prefix (folder path) in the S3 bucket.

- **Get File by Key**
  - **Endpoint**: `GET /api/Files/get-by-key`
  - **Description**: Retrieves a file from the S3 bucket by its key.
  - **Parameters**:
    - `bucketName` (query string): The name of the S3 bucket.
    - `key` (query string): The key of the file in the S3 bucket.

- **Delete File**
  - **Endpoint**: `DELETE /api/Files/delete`
  - **Description**: Deletes a file from the S3 bucket.
  - **Parameters**:
    - `bucketName` (query string): The name of the S3 bucket.
    - `key` (query string): The key of the file to delete.

### Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Abraar-kanini/S3ImageUploader-ASP.NET-React.git
   cd amazon-s3-file-upload
