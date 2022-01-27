import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { EmojiEventsIcon } from '@mui/icons-material/';
import { EmailIcon } from '@mui/icons-material/';
import { GitHubIcon } from '@mui/icons-material/';
import { LinkedInIcon } from '@mui/icons-material/';

const DialMenu = () => {
    const externalLink = (url) => {
        window.open(url, '_blank');
    }

    const actions = [
        { icon: <EmojiEventsIcon style={{ color: "#d274a9" }} />, name: 'High Scores', url: 'about' },
        { icon: <EmailIcon style={{ color: "#d274a9" }} />, name: 'Email', url: 'mailto:kivi.webdev@gmail.com' },
        { icon: <LinkedInIcon style={{ color: "#d274a9" }} />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/kivi-corn/' },
        { icon: <GitHubIcon style={{ color: "#d274a9" }} />, name: 'GitHub', url: 'https://github.com/KCode100/open-trivia-react-application' },
    ];

    return (
        <Box sx={{ height: "100%", transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', top: 0, right: { xs: 0, md: 16 } }}
                icon={<SpeedDialIcon />}
                direction="left"
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={() => externalLink(action.url)}
                    />

                ))}
            </SpeedDial>
        </Box>
    );
}

export default DialMenu;