import {Button} from "../../Button";

import {ReactComponent as GoogleIcon} from "../../Icons/socials/google.svg";

import {signInWithGoogle} from '../../../services/firebase';


export const Google = () => (
    <Button className="button" type="button" onClick={signInWithGoogle}>
        <GoogleIcon/>
    </Button>
)
