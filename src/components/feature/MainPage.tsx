import { Typography } from '@mui/material'
import { imagePaths } from '../../core/constants';

const ErrorPage: React.FC = () => {
    return (
        <>
            <img src={imagePaths.inmotion} alt="inmotion" />
            <Typography variant='h1'>In Motion</Typography>
        </>
    );
}
export default ErrorPage
