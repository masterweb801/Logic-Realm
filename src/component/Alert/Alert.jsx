import * as React from 'react';
import Alert from '@mui/material/Alert';

export default function SimpleAlert({ severity }) {
    return (
        <Alert severity={severity}>
            {severity == "error" ? "Something Went Wrong!" : severity == "success" ? "Email Submission Successful!" : ""}
        </Alert>
    );
}