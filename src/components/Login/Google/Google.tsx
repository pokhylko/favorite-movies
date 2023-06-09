import {Button} from "@mui/material";
import {Google as GoogleIcon} from '@mui/icons-material';

import {signInWithGoogle} from '../../../services/firebase';

export const Google = () => (
    <Button onClick={signInWithGoogle}>
        <GoogleIcon/>
    </Button>
)
