import Alert from '@mui/material/Alert';

export default function SimpleAlert({ severity }) {
    return (
        <Alert severity={severity}>
            {severity == "success" ? "Email Submission Successful!" : "Something Went Wrong!"}
        </Alert>
    );
}